import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ReviewCard from './components/ReviewCard';
import ComparisonTool from './components/ComparisonTool';
import FilterSidebar from './components/FilterSidebar';
import FeaturedSection from './components/FeaturedSection';
import SearchAndSort from './components/SearchAndSort';

const TechReviewsHub = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    earningRanges: [],
    paymentMethods: [],
    ratings: [],
    specialFeatures: []
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const getDisplayText = (enText, hiText) => {
    return currentLanguage === 'hi' ? hiText : enText;
  };

  // Mock data for reviews
  const mockReviews = [
    {
      id: 1,
      appName: 'Swagbucks',
      appIcon: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center',
      category: getDisplayText('Survey & Cashback', 'सर्वे और कैशबैक'),
      rating: 4.6,
      reviewCount: 2847,
      earningPotential: 8500,
      minPayout: 100,
      paymentMethods: ['PayPal', 'UPI', getDisplayText('Gift Cards', 'गिफ्ट कार्ड')],
      topPro: getDisplayText('Multiple earning methods available', 'कई कमाई के तरीके उपलब्ध'),
      topCon: getDisplayText('Some surveys may not qualify', 'कुछ सर्वे योग्य नहीं हो सकते'),
      isVerified: true,
      isFeatured: true,
      isHustleIndiaTested: true,
      hasWithdrawalProof: true,
      isNewLaunch: false,
      lastUpdated: '2025-01-10',
      views: '12.5K',
      payoutSpeed: 2,
      usabilityScore: 9,
      reliabilityScore: 8
    },
    {
      id: 2,
      appName: 'Google Opinion Rewards',
      appIcon: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center',
      category: getDisplayText('Survey App', 'सर्वे ऐप'),
      rating: 4.4,
      reviewCount: 1923,
      earningPotential: 2500,
      minPayout: 20,
      paymentMethods: ['Google Play Credit', 'PayPal'],
      topPro: getDisplayText('Quick surveys, reliable payouts', 'त्वरित सर्वे, विश्वसनीय पेआउट'),
      topCon: getDisplayText('Limited survey availability', 'सीमित सर्वे उपलब्धता'),
      isVerified: true,
      isFeatured: false,
      isHustleIndiaTested: true,
      hasWithdrawalProof: true,
      isNewLaunch: false,
      lastUpdated: '2025-01-08',
      views: '8.2K',
      payoutSpeed: 1,
      usabilityScore: 10,
      reliabilityScore: 9
    },
    {
      id: 3,
      appName: 'Meesho',
      appIcon: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center',
      category: getDisplayText('Reselling Platform', 'रीसेलिंग प्लेटफॉर्म'),
      rating: 4.2,
      reviewCount: 3456,
      earningPotential: 15000,
      minPayout: 0,
      paymentMethods: ['Bank Transfer', 'UPI'],
      topPro: getDisplayText('High earning potential, no investment', 'उच्च कमाई की संभावना, कोई निवेश नहीं'),
      topCon: getDisplayText('Requires active selling efforts', 'सक्रिय बिक्री प्रयासों की आवश्यकता'),
      isVerified: true,
      isFeatured: true,
      isHustleIndiaTested: true,
      hasWithdrawalProof: true,
      isNewLaunch: false,
      lastUpdated: '2025-01-09',
      views: '15.8K',
      payoutSpeed: 3,
      usabilityScore: 8,
      reliabilityScore: 9
    },
    {
      id: 4,
      appName: 'MPL (Mobile Premier League)',
      appIcon: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop&crop=center',
      category: getDisplayText('Gaming Platform', 'गेमिंग प्लेटफॉर्म'),
      rating: 4.0,
      reviewCount: 5672,
      earningPotential: 12000,
      minPayout: 50,
      paymentMethods: ['Paytm', 'Bank Transfer', 'UPI'],
      topPro: getDisplayText('Fun way to earn, skill-based games', 'कमाने का मजेदार तरीका, कौशल-आधारित गेम'),
      topCon: getDisplayText('Requires gaming skills, some luck involved', 'गेमिंग कौशल की आवश्यकता, कुछ भाग्य शामिल'),
      isVerified: true,
      isFeatured: false,
      isHustleIndiaTested: true,
      hasWithdrawalProof: true,
      isNewLaunch: false,
      lastUpdated: '2025-01-07',
      views: '22.1K',
      payoutSpeed: 2,
      usabilityScore: 9,
      reliabilityScore: 7
    },
    {
      id: 5,
      appName: 'TaskBucks',
      appIcon: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center',
      category: getDisplayText('Task & Survey', 'टास्क और सर्वे'),
      rating: 3.8,
      reviewCount: 1234,
      earningPotential: 4500,
      minPayout: 50,
      paymentMethods: ['Paytm', 'Mobile Recharge'],
      topPro: getDisplayText('Simple tasks, mobile recharge option', 'सरल कार्य, मोबाइल रिचार्ज विकल्प'),
      topCon: getDisplayText('Lower earning potential', 'कम कमाई की संभावना'),
      isVerified: true,
      isFeatured: false,
      isHustleIndiaTested: true,
      hasWithdrawalProof: false,
      isNewLaunch: false,
      lastUpdated: '2025-01-06',
      views: '6.7K',
      payoutSpeed: 3,
      usabilityScore: 7,
      reliabilityScore: 8
    },
    {
      id: 6,
      appName: 'CashKaro',
      appIcon: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=100&h=100&fit=crop&crop=center',
      category: getDisplayText('Cashback Platform', 'कैशबैक प्लेटफॉर्म'),
      rating: 4.3,
      reviewCount: 2156,
      earningPotential: 6800,
      minPayout: 250,
      paymentMethods: ['Bank Transfer', 'Gift Vouchers'],
      topPro: getDisplayText('High cashback rates, trusted platform', 'उच्च कैशबैक दरें, विश्वसनीय प्लेटफॉर्म'),
      topCon: getDisplayText('Higher minimum payout threshold', 'उच्च न्यूनतम पेआउट सीमा'),
      isVerified: true,
      isFeatured: false,
      isHustleIndiaTested: true,
      hasWithdrawalProof: true,
      isNewLaunch: false,
      lastUpdated: '2025-01-05',
      views: '9.3K',
      payoutSpeed: 7,
      usabilityScore: 8,
      reliabilityScore: 9
    }
  ];

  const handleFilterChange = (filterType, value, checked) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: checked 
        ? [...(prev[filterType] || []), value]
        : (prev[filterType] || []).filter(item => item !== value)
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      earningRanges: [],
      paymentMethods: [],
      ratings: [],
      specialFeatures: []
    });
  };

  const filteredReviews = mockReviews.filter(review => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (!review.appName.toLowerCase().includes(query) && 
          !review.category.toLowerCase().includes(query)) {
        return false;
      }
    }
    return true;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'earning':
        return b.earningPotential - a.earningPotential;
      case 'newest':
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      case 'popular':
        return b.reviewCount - a.reviewCount;
      case 'verified':
        return (b.isHustleIndiaTested ? 1 : 0) - (a.isHustleIndiaTested ? 1 : 0);
      default:
        return 0;
    }
  });

  return (
    <>
      <Helmet>
        <title>
          {getDisplayText(
            'Tech Reviews & App Comparison Hub - HustleIndia',
            'टेक रिव्यू और ऐप तुलना हब - हसल इंडिया'
          )}
        </title>
        <meta 
          name="description" 
          content={getDisplayText(
            'Comprehensive reviews and comparisons of money-making apps, earning platforms, and digital tools. Get honest insights, withdrawal proofs, and expert recommendations.',
            'पैसे कमाने वाले ऐप्स, कमाई प्लेटफॉर्म और डिजिटल टूल्स की व्यापक समीक्षा और तुलना। ईमानदार अंतर्दृष्टि, निकासी प्रमाण और विशेषज्ञ सिफारिशें प्राप्त करें।'
          )}
        />
        <meta name="keywords" content="app reviews, tech reviews, earning apps, money making apps, app comparison, HustleIndia" />
        <link rel="canonical" href="https://hustleindia.online/tech-reviews-product-comparison-hub" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-cultural-gradient text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {getDisplayText(
                    'Tech Reviews & App Comparison Hub',
                    'टेक रिव्यू और ऐप तुलना हब'
                  )}
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {getDisplayText(
                    'Honest reviews, detailed comparisons, and expert insights on money-making apps and digital platforms. Make informed decisions with our comprehensive testing and community feedback.',
                    'पैसे कमाने वाले ऐप्स और डिजिटल प्लेटफॉर्म पर ईमानदार समीक्षाएं, विस्तृत तुलना और विशेषज्ञ अंतर्दृष्टि। हमारे व्यापक परीक्षण और समुदायिक फीडबैक के साथ सूचित निर्णय लें।'
                  )}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                    iconName="Search"
                    iconPosition="left"
                  >
                    {getDisplayText('Explore Reviews', 'समीक्षाएं देखें')}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                    iconName="BarChart3"
                    iconPosition="left"
                    onClick={() => setShowComparison(!showComparison)}
                  >
                    {getDisplayText('Compare Apps', 'ऐप्स की तुलना करें')}
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">150+</div>
                    <div className="text-white/80 text-sm">
                      {getDisplayText('Apps Reviewed', 'ऐप्स समीक्षित')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">₹2.5L+</div>
                    <div className="text-white/80 text-sm">
                      {getDisplayText('Total Tested Earnings', 'कुल परीक्षित कमाई')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50K+</div>
                    <div className="text-white/80 text-sm">
                      {getDisplayText('Community Reviews', 'समुदायिक समीक्षाएं')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-white/80 text-sm">
                      {getDisplayText('Accuracy Rate', 'सटीकता दर')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Featured Section */}
            <FeaturedSection currentLanguage={currentLanguage} />

            {/* Comparison Tool */}
            {showComparison && (
              <div className="mb-12">
                <ComparisonTool apps={mockReviews} currentLanguage={currentLanguage} />
              </div>
            )}

            {/* Search and Sort */}
            <SearchAndSort
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onFilterToggle={() => setShowFilters(!showFilters)}
              currentLanguage={currentLanguage}
              resultsCount={sortedReviews.length}
            />

            {/* Main Content */}
            <div className="flex gap-8">
              {/* Sidebar */}
              <div className="hidden lg:block w-80 flex-shrink-0">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  currentLanguage={currentLanguage}
                  isOpen={false}
                  onClose={() => {}}
                />
              </div>

              {/* Mobile Sidebar */}
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                currentLanguage={currentLanguage}
                isOpen={showFilters}
                onClose={() => setShowFilters(false)}
              />

              {/* Reviews Grid */}
              <div className="flex-1">
                {sortedReviews.length > 0 ? (
                  <div className={`grid gap-6 ${
                    viewMode === 'grid' ?'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' :'grid-cols-1'
                  }`}>
                    {sortedReviews.map((review) => (
                      <ReviewCard
                        key={review.id}
                        review={review}
                        currentLanguage={currentLanguage}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Icon name="Search" size={64} color="var(--color-text-secondary)" className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {getDisplayText('No Results Found', 'कोई परिणाम नहीं मिला')}
                    </h3>
                    <p className="text-text-secondary mb-6">
                      {getDisplayText(
                        'Try adjusting your search terms or filters',
                        'अपने खोज शब्दों या फिल्टर को समायोजित करने का प्रयास करें'
                      )}
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleClearFilters}
                      iconName="RotateCcw"
                      iconPosition="left"
                    >
                      {getDisplayText('Clear Filters', 'फिल्टर साफ़ करें')}
                    </Button>
                  </div>
                )}

                {/* Load More */}
                {sortedReviews.length > 0 && (
                  <div className="text-center mt-12">
                    <Button
                      variant="outline"
                      size="lg"
                      iconName="ChevronDown"
                      iconPosition="right"
                    >
                      {getDisplayText('Load More Reviews', 'और समीक्षाएं लोड करें')}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {getDisplayText('Quick Links', 'त्वरित लिंक')}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('All Reviews', 'सभी समीक्षाएं')}
                  </a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('Top Rated Apps', 'टॉप रेटेड ऐप्स')}
                  </a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('New Launches', 'नए लॉन्च')}
                  </a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('Scam Alerts', 'स्कैम अलर्ट')}
                  </a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {getDisplayText('Categories', 'श्रेणियां')}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('Survey Apps', 'सर्वे ऐप्स')}
                  </a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('Gaming Apps', 'गेमिंग ऐप्स')}
                  </a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('Cashback Apps', 'कैशबैक ऐप्स')}
                  </a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('Investment Apps', 'निवेश ऐप्स')}
                  </a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {getDisplayText('Resources', 'संसाधन')}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('How We Test', 'हम कैसे परीक्षण करते हैं')}
                  </a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('Review Guidelines', 'समीक्षा दिशानिर्देश')}
                  </a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('Submit App', 'ऐप सबमिट करें')}
                  </a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">
                    {getDisplayText('Contact Us', 'संपर्क करें')}
                  </a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {getDisplayText('Stay Updated', 'अपडेट रहें')}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {getDisplayText(
                    'Get notified about new reviews and app launches',
                    'नई समीक्षाओं और ऐप लॉन्च के बारे में सूचना प्राप्त करें'
                  )}
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-white hover:text-primary transition-colors">
                    <Icon name="Mail" size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-primary transition-colors">
                    <Icon name="MessageCircle" size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-primary transition-colors">
                    <Icon name="Bell" size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} HustleIndia. {getDisplayText('All rights reserved.', 'सभी अधिकार सुरक्षित।')}</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TechReviewsHub;