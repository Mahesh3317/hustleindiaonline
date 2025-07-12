import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ComparisonTool = ({ apps, currentLanguage }) => {
  const [selectedApps, setSelectedApps] = useState([]);
  const [comparisonCriteria, setComparisonCriteria] = useState('all');

  const getDisplayText = (enText, hiText) => {
    return currentLanguage === 'hi' ? hiText : enText;
  };

  const criteriaOptions = [
    { value: 'all', label: getDisplayText('All Criteria', 'सभी मानदंड') },
    { value: 'earning', label: getDisplayText('Earning Potential', 'कमाई की संभावना') },
    { value: 'payout', label: getDisplayText('Payout Methods', 'पेआउट के तरीके') },
    { value: 'usability', label: getDisplayText('User Experience', 'उपयोगकर्ता अनुभव') },
    { value: 'reliability', label: getDisplayText('Reliability', 'विश्वसनीयता') }
  ];

  const appOptions = apps.map(app => ({
    value: app.id,
    label: app.appName
  }));

  const handleAppSelection = (appIds) => {
    const selected = apps.filter(app => appIds.includes(app.id));
    setSelectedApps(selected.slice(0, 3)); // Limit to 3 apps for comparison
  };

  const getScoreColor = (score) => {
    if (score >= 8) return 'text-green-600 bg-green-50';
    if (score >= 6) return 'text-blue-600 bg-blue-50';
    if (score >= 4) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const comparisonMetrics = [
    {
      key: 'earningPotential',
      label: getDisplayText('Earning Potential', 'कमाई की संभावना'),
      icon: 'DollarSign',
      format: (value) => `₹${value}/month`
    },
    {
      key: 'minPayout',
      label: getDisplayText('Minimum Payout', 'न्यूनतम पेआउट'),
      icon: 'Wallet',
      format: (value) => `₹${value}`
    },
    {
      key: 'rating',
      label: getDisplayText('User Rating', 'उपयोगकर्ता रेटिंग'),
      icon: 'Star',
      format: (value) => `${value}/5`
    },
    {
      key: 'payoutSpeed',
      label: getDisplayText('Payout Speed', 'पेआउट की गति'),
      icon: 'Clock',
      format: (value) => `${value} days`
    },
    {
      key: 'usabilityScore',
      label: getDisplayText('Usability Score', 'उपयोगिता स्कोर'),
      icon: 'Smartphone',
      format: (value) => `${value}/10`
    },
    {
      key: 'reliabilityScore',
      label: getDisplayText('Reliability Score', 'विश्वसनीयता स्कोर'),
      icon: 'Shield',
      format: (value) => `${value}/10`
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-cultural p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <Icon name="BarChart3" size={20} color="var(--color-secondary)" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">
            {getDisplayText('App Comparison Tool', 'ऐप तुलना उपकरण')}
          </h3>
          <p className="text-sm text-text-secondary">
            {getDisplayText('Compare up to 3 apps side by side', 'एक साथ 3 ऐप्स तक की तुलना करें')}
          </p>
        </div>
      </div>

      {/* App Selection */}
      <div className="mb-6">
        <Select
          label={getDisplayText('Select Apps to Compare', 'तुलना के लिए ऐप्स चुनें')}
          options={appOptions}
          value={selectedApps.map(app => app.id)}
          onChange={handleAppSelection}
          multiple
          searchable
          placeholder={getDisplayText('Choose apps...', 'ऐप्स चुनें...')}
          className="mb-4"
        />

        <Select
          label={getDisplayText('Comparison Criteria', 'तुलना के मानदंड')}
          options={criteriaOptions}
          value={comparisonCriteria}
          onChange={setComparisonCriteria}
          placeholder={getDisplayText('Select criteria...', 'मानदंड चुनें...')}
        />
      </div>

      {/* Comparison Results */}
      {selectedApps.length > 0 && (
        <div className="space-y-6">
          {/* App Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selectedApps.map((app) => (
              <div key={app.id} className="bg-muted rounded-lg p-4 text-center">
                <Image
                  src={app.appIcon}
                  alt={app.appName}
                  className="w-16 h-16 rounded-xl mx-auto mb-3 object-cover"
                />
                <h4 className="font-semibold text-text-primary mb-1">{app.appName}</h4>
                <p className="text-sm text-text-secondary">{app.category}</p>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <Icon name="Star" size={14} color="#FCD34D" className="fill-current" />
                  <span className="text-sm font-medium">{app.rating}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Metrics */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-text-secondary">
                    {getDisplayText('Criteria', 'मानदंड')}
                  </th>
                  {selectedApps.map((app) => (
                    <th key={app.id} className="text-center py-3 px-4 font-medium text-text-secondary">
                      {app.appName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonMetrics.map((metric) => (
                  <tr key={metric.key} className="border-b border-border hover:bg-muted/50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Icon name={metric.icon} size={16} color="var(--color-text-secondary)" />
                        <span className="font-medium text-text-primary">{metric.label}</span>
                      </div>
                    </td>
                    {selectedApps.map((app) => (
                      <td key={app.id} className="py-4 px-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          metric.key.includes('Score') 
                            ? getScoreColor(app[metric.key] || 0)
                            : 'text-text-primary'
                        }`}>
                          {metric.format(app[metric.key] || 0)}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment Methods Comparison */}
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
              <Icon name="CreditCard" size={16} />
              <span>{getDisplayText('Payment Methods', 'भुगतान के तरीके')}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedApps.map((app) => (
                <div key={app.id}>
                  <h5 className="font-medium text-text-primary mb-2">{app.appName}</h5>
                  <div className="flex flex-wrap gap-1">
                    {app.paymentMethods.map((method, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              className="flex-1 bg-cultural-gradient"
              iconName="Download"
              iconPosition="left"
            >
              {getDisplayText('Download Comparison Report', 'तुलना रिपोर्ट डाउनलोड करें')}
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              iconName="Share"
              iconPosition="left"
            >
              {getDisplayText('Share Comparison', 'तुलना साझा करें')}
            </Button>
          </div>
        </div>
      )}

      {selectedApps.length === 0 && (
        <div className="text-center py-12">
          <Icon name="BarChart3" size={48} color="var(--color-text-secondary)" className="mx-auto mb-4" />
          <h4 className="text-lg font-medium text-text-primary mb-2">
            {getDisplayText('Select Apps to Compare', 'तुलना के लिए ऐप्स चुनें')}
          </h4>
          <p className="text-text-secondary">
            {getDisplayText(
              'Choose 2-3 apps from the dropdown above to see detailed comparison',
              'विस्तृत तुलना देखने के लिए ऊपर ड्रॉपडाउन से 2-3 ऐप्स चुनें'
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default ComparisonTool;