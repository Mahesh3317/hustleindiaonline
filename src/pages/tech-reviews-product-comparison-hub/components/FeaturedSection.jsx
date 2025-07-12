import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedSection = ({ currentLanguage }) => {
  const getDisplayText = (enText, hiText) => {
    return currentLanguage === 'hi' ? hiText : enText;
  };

  const featuredApp = {
    id: 'app-of-month',
    appName: 'Swagbucks',
    appIcon: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center',
    category: getDisplayText('Survey & Cashback', 'सर्वे और कैशबैक'),
    rating: 4.6,
    reviewCount: 2847,
    earningPotential: 8500,
    minPayout: 100,
    paymentMethods: ['PayPal', 'UPI', getDisplayText('Gift Cards', 'गिफ्ट कार्ड')],
    description: getDisplayText(
      `Our comprehensive 30-day testing revealed Swagbucks as the most reliable earning platform for Indian users. With consistent daily earning opportunities and multiple payout options, it's perfect for beginners.`,
      `हमारे 30-दिन के व्यापक परीक्षण में स्वैगबक्स भारतीय उपयोगकर्ताओं के लिए सबसे विश्वसनीय कमाई प्लेटफॉर्म के रूप में सामने आया। निरंतर दैनिक कमाई के अवसरों और कई पेआउट विकल्पों के साथ, यह शुरुआती लोगों के लिए बिल्कुल सही है।`
    ),
    highlights: [
      getDisplayText('₹8,500 monthly earning potential', '₹8,500 मासिक कमाई की संभावना'),getDisplayText('Multiple earning methods', 'कई कमाई के तरीके'),getDisplayText('Instant PayPal withdrawals', 'तत्काल PayPal निकासी'),getDisplayText('24/7 customer support', '24/7 ग्राहक सहायता')
    ],
    testingResults: {
      totalEarned: 12450,
      daysActive: 30,
      successfulWithdrawals: 4,
      averageDailyTime: 45
    }
  };

  const scamAlerts = [
    {
      id: 'scam-1',
      appName: 'FakeEarn Pro',
      reason: getDisplayText('Fake withdrawal proofs', 'नकली निकासी प्रमाण'),
      reportedBy: 156,
      severity: 'high'
    },
    {
      id: 'scam-2',
      appName: 'QuickCash Scam',
      reason: getDisplayText('Account suspension after earning', 'कमाई के बाद खाता निलंबन'),
      reportedBy: 89,
      severity: 'medium'
    }
  ];

  const newLaunches = [
    {
      id: 'new-1',
      appName: 'TaskMaster India',
      appIcon: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&crop=center',
      category: getDisplayText('Micro Tasks', 'माइक्रो टास्क'),
      launchDate: '2025-01-05',
      earningPotential: 3500,
      status: 'testing'
    },
    {
      id: 'new-2',
      appName: 'CryptoRewards',
      appIcon: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=60&h=60&fit=crop&crop=center',
      category: getDisplayText('Crypto Earning', 'क्रिप्टो कमाई'),
      launchDate: '2025-01-08',
      earningPotential: 6200,
      status: 'verified'
    }
  ];

  return (
    <div className="space-y-8">
      {/* App of the Month */}
      <div className="bg-cultural-gradient rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon name="Award" size={24} color="white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {getDisplayText('App of the Month', 'महीने का ऐप')}
              </h2>
              <p className="text-white/80">
                {getDisplayText('January 2025', 'जनवरी 2025')}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={featuredApp.appIcon}
                  alt={featuredApp.appName}
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">{featuredApp.appName}</h3>
                  <p className="text-white/80">{featuredApp.category}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          color={i < Math.floor(featuredApp.rating) ? "#FCD34D" : "#ffffff40"}
                          className={i < Math.floor(featuredApp.rating) ? "fill-current" : ""}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{featuredApp.rating}</span>
                    <span className="text-white/60">({featuredApp.reviewCount})</span>
                  </div>
                </div>
              </div>

              <p className="text-white/90 mb-6 leading-relaxed">
                {featuredApp.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="DollarSign" size={16} />
                    <span className="text-sm text-white/80">
                      {getDisplayText('Monthly Potential', 'मासिक संभावना')}
                    </span>
                  </div>
                  <p className="text-xl font-bold">₹{featuredApp.earningPotential}</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Wallet" size={16} />
                    <span className="text-sm text-white/80">
                      {getDisplayText('Min Payout', 'न्यूनतम पेआउट')}
                    </span>
                  </div>
                  <p className="text-xl font-bold">₹{featuredApp.minPayout}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <Button
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  {getDisplayText('Read Full Review', 'पूरी समीक्षा पढ़ें')}
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  iconName="Download"
                  iconPosition="left"
                >
                  {getDisplayText('Download App', 'ऐप डाउनलोड करें')}
                </Button>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-4 flex items-center space-x-2">
                <Icon name="BarChart3" size={18} />
                <span>{getDisplayText('30-Day Testing Results', '30-दिन के परीक्षण परिणाम')}</span>
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">{getDisplayText('Total Earned', 'कुल कमाई')}</span>
                  <span className="font-bold">₹{featuredApp.testingResults.totalEarned}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">{getDisplayText('Active Days', 'सक्रिय दिन')}</span>
                  <span className="font-bold">{featuredApp.testingResults.daysActive}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">{getDisplayText('Successful Withdrawals', 'सफल निकासी')}</span>
                  <span className="font-bold">{featuredApp.testingResults.successfulWithdrawals}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">{getDisplayText('Avg Daily Time', 'औसत दैनिक समय')}</span>
                  <span className="font-bold">{featuredApp.testingResults.averageDailyTime} min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scam Alerts */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <Icon name="AlertTriangle" size={20} color="var(--color-error)" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-800">
              {getDisplayText('Scam Alerts', 'स्कैम अलर्ट')}
            </h3>
            <p className="text-sm text-red-600">
              {getDisplayText('Apps to avoid - reported by our community', 'बचने योग्य ऐप्स - हमारे समुदाय द्वारा रिपोर्ट किए गए')}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {scamAlerts.map((alert) => (
            <div key={alert.id} className="bg-white rounded-lg p-4 border border-red-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-red-800">{alert.appName}</h4>
                  <p className="text-sm text-red-600">{alert.reason}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    alert.severity === 'high' ?'bg-red-100 text-red-800' :'bg-yellow-100 text-yellow-800'
                  }`}>
                    {alert.severity === 'high' ? getDisplayText('High Risk', 'उच्च जोखिम')
                      : getDisplayText('Medium Risk', 'मध्यम जोखिम')
                    }
                  </span>
                  <p className="text-xs text-red-500 mt-1">
                    {alert.reportedBy} {getDisplayText('reports', 'रिपोर्ट्स')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Launches */}
      <div className="bg-white rounded-xl shadow-cultural p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={20} color="var(--color-accent)" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                {getDisplayText('New Launches', 'नए लॉन्च')}
              </h3>
              <p className="text-sm text-text-secondary">
                {getDisplayText('Latest apps under review', 'समीक्षाधीन नवीनतम ऐप्स')}
              </p>
            </div>
          </div>
          <Link
            to="/category-hub-money-making-ecosystem"
            className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1"
          >
            <span>{getDisplayText('View All', 'सभी देखें')}</span>
            <Icon name="ArrowRight" size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {newLaunches.map((app) => (
            <div key={app.id} className="border border-border rounded-lg p-4 hover:shadow-cultural transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src={app.appIcon}
                  alt={app.appName}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-text-primary">{app.appName}</h4>
                  <p className="text-sm text-text-secondary">{app.category}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  app.status === 'verified' 
                    ? 'bg-green-100 text-green-800' :'bg-yellow-100 text-yellow-800'
                }`}>
                  {app.status === 'verified' 
                    ? getDisplayText('Verified', 'सत्यापित')
                    : getDisplayText('Testing', 'परीक्षण')
                  }
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">
                  {getDisplayText('Launched:', 'लॉन्च:')} {app.launchDate}
                </span>
                <span className="font-medium text-primary">
                  ₹{app.earningPotential}/{getDisplayText('month', 'महीना')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;