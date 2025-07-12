import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import components
import FilterBar from './components/FilterBar';
import SeasonalBanner from './components/SeasonalBanner';
import MethodCard from './components/MethodCard';
import Sidebar from './components/Sidebar';

const CategoryHubMoneyMakingEcosystem = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [filteredMethods, setFilteredMethods] = useState([]);
  const [filters, setFilters] = useState({
    earningRange: 'all',
    timeInvestment: 'all',
    skillLevel: 'all',
    sortBy: 'popularity',
    trending: false,
    beginner: false
  });

  // Mock data for money-making methods
  const moneyMakingMethods = [
    {
      id: 1,
      title: "YouTube Channel Monetization",
      titleHi: "यूट्यूब चैनल मुद्रीकरण",
      description: "Create engaging content and earn through ads, sponsorships, and memberships",
      descriptionHi: "आकर्षक कंटेंट बनाएं और विज्ञापन, स्पॉन्सरशिप और सदस्यता के माध्यम से कमाएं",
      image: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800",
      earningRange: "₹15,000-₹1,00,000",
      initialInvestment: "₹5,000",
      difficulty: "Intermediate",
      difficultyHi: "मध्यम",
      timeInvestment: "Part-time",
      timeInvestmentHi: "अंशकालिक",
      successRate: 75,
      rating: 4.6,
      reviews: 1250,
      trending: true,
      featured: true,
      skills: ["Video Editing", "Content Creation", "SEO", "Analytics"],
      benefits: [
        "Multiple revenue streams",
        "Global audience reach",
        "Creative freedom",
        "Passive income potential"
      ],
      challenges: [
        "Consistent content creation",
        "Algorithm changes",
        "Initial growth phase",
        "Competition"
      ],
      studentsCount: "12.5K",
      lastUpdated: "2 days ago",
      category: "content-creation",
      earningCategory: "10000-50000"
    },
    {
      id: 2,
      title: "Affiliate Marketing",
      titleHi: "एफिलिएट मार्केटिंग",
      description: "Promote products and earn commission on every sale through your referral links",
      descriptionHi: "उत्पादों को बढ़ावा दें और अपने रेफरल लिंक के माध्यम से हर बिक्री पर कमीशन कमाएं",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      earningRange: "₹10,000-₹75,000",
      initialInvestment: "₹0",
      difficulty: "Beginner",
      difficultyHi: "शुरुआती",
      timeInvestment: "Flexible",
      timeInvestmentHi: "लचीला",
      successRate: 65,
      rating: 4.4,
      reviews: 890,
      trending: true,
      featured: false,
      skills: ["Digital Marketing", "Content Writing", "Social Media", "Analytics"],
      benefits: [
        "No initial investment",
        "Work from anywhere",
        "Passive income",
        "Multiple niches available"
      ],
      challenges: [
        "Building trust with audience",
        "Finding quality products",
        "Competition",
        "Commission dependency"
      ],
      studentsCount: "8.2K",
      lastUpdated: "1 week ago",
      category: "marketing",
      earningCategory: "10000-50000"
    },
    {
      id: 3,
      title: "Online Tutoring",
      titleHi: "ऑनलाइन ट्यूशन",
      description: "Teach students online in subjects you excel at and earn hourly rates",
      descriptionHi: "जिन विषयों में आप अच्छे हैं उनमें छात्रों को ऑनलाइन पढ़ाएं और घंटे के हिसाब से कमाएं",
      image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
      earningRange: "₹20,000-₹60,000",
      initialInvestment: "₹2,000",
      difficulty: "Beginner",
      difficultyHi: "शुरुआती",
      timeInvestment: "Part-time",
      timeInvestmentHi: "अंशकालिक",
      successRate: 85,
      rating: 4.8,
      reviews: 2100,
      trending: false,
      featured: true,
      skills: ["Subject Expertise", "Communication", "Patience", "Technology"],
      benefits: [
        "High success rate",
        "Flexible schedule",
        "Helping students",
        "Steady income"
      ],
      challenges: [
        "Student retention",
        "Platform competition",
        "Technology issues",
        "Curriculum updates"
      ],
      studentsCount: "15.8K",
      lastUpdated: "3 days ago",
      category: "education",
      earningCategory: "10000-50000"
    },
    {
      id: 4,
      title: "Freelance Writing",
      titleHi: "फ्रीलांस लेखन",
      description: "Write articles, blogs, and content for businesses and publications",
      descriptionHi: "व्यवसायों और प्रकाशनों के लिए लेख, ब्लॉग और कंटेंट लिखें",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
      earningRange: "₹8,000-₹40,000",
      initialInvestment: "₹1,000",
      difficulty: "Beginner",
      difficultyHi: "शुरुआती",
      timeInvestment: "Flexible",
      timeInvestmentHi: "लचीला",
      successRate: 70,
      rating: 4.3,
      reviews: 650,
      trending: false,
      featured: false,
      skills: ["Writing", "Research", "SEO", "Grammar"],
      benefits: [
        "Low startup cost",
        "Work from home",
        "Skill development",
        "Diverse projects"
      ],
      challenges: [
        "Finding clients",
        "Payment delays",
        "Competitive rates",
        "Deadline pressure"
      ],
      studentsCount: "6.5K",
      lastUpdated: "5 days ago",
      category: "writing",
      earningCategory: "1000-10000"
    },
    {
      id: 5,
      title: "E-commerce Store",
      titleHi: "ई-कॉमर्स स्टोर",
      description: "Start your online store and sell products directly to customers",
      descriptionHi: "अपना ऑनलाइन स्टोर शुरू करें और ग्राहकों को सीधे उत्पाद बेचें",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      earningRange: "₹25,000-₹2,00,000",
      initialInvestment: "₹15,000",
      difficulty: "Advanced",
      difficultyHi: "उन्नत",
      timeInvestment: "Full-time",
      timeInvestmentHi: "पूर्णकालिक",
      successRate: 55,
      rating: 4.2,
      reviews: 420,
      trending: true,
      featured: false,
      skills: ["Business Management", "Marketing", "Customer Service", "Inventory"],
      benefits: [
        "High earning potential",
        "Business ownership",
        "Scalable model",
        "Multiple revenue streams"
      ],
      challenges: [
        "High initial investment",
        "Inventory management",
        "Customer acquisition",
        "Competition"
      ],
      studentsCount: "3.2K",
      lastUpdated: "1 day ago",
      category: "business",
      earningCategory: "50000+"
    },
    {
      id: 6,
      title: "App Development",
      titleHi: "ऐप डेवलपमेंट",
      description: "Create mobile apps and monetize through ads, in-app purchases, or subscriptions",
      descriptionHi: "मोबाइल ऐप बनाएं और विज्ञापन, इन-ऐप खरीदारी या सब्स्क्रिप्शन के माध्यम से कमाएं",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      earningRange: "₹30,000-₹5,00,000",
      initialInvestment: "₹10,000",
      difficulty: "Advanced",
      difficultyHi: "उन्नत",
      timeInvestment: "Full-time",
      timeInvestmentHi: "पूर्णकालिक",
      successRate: 45,
      rating: 4.5,
      reviews: 380,
      trending: true,
      featured: true,
      skills: ["Programming", "UI/UX Design", "Problem Solving", "Marketing"],
      benefits: [
        "Very high earning potential",
        "Technical skill development",
        "Innovation opportunities",
        "Global market reach"
      ],
      challenges: [
        "Steep learning curve",
        "Technical complexity",
        "Market saturation",
        "Continuous updates needed"
      ],
      studentsCount: "2.8K",
      lastUpdated: "4 days ago",
      category: "technology",
      earningCategory: "50000+"
    }
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    let filtered = [...moneyMakingMethods];

    // Apply filters
    if (filters.earningRange !== 'all') {
      filtered = filtered.filter(method => method.earningCategory === filters.earningRange);
    }

    if (filters.timeInvestment !== 'all') {
      filtered = filtered.filter(method => 
        method.timeInvestment.toLowerCase() === filters.timeInvestment
      );
    }

    if (filters.skillLevel !== 'all') {
      filtered = filtered.filter(method => 
        method.difficulty.toLowerCase() === filters.skillLevel
      );
    }

    if (filters.trending) {
      filtered = filtered.filter(method => method.trending);
    }

    if (filters.beginner) {
      filtered = filtered.filter(method => method.difficulty.toLowerCase() === 'beginner');
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'earning-high':
        filtered.sort((a, b) => b.successRate - a.successRate);
        break;
      case 'earning-low':
        filtered.sort((a, b) => 
          parseInt(a.initialInvestment.replace(/[₹,]/g, '')) - 
          parseInt(b.initialInvestment.replace(/[₹,]/g, ''))
        );
        break;
      case 'success-rate':
        filtered.sort((a, b) => b.successRate - a.successRate);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
        break;
      default:
        filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredMethods(filtered);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'clear') {
      setFilters({
        earningRange: 'all',
        timeInvestment: 'all',
        skillLevel: 'all',
        sortBy: 'popularity',
        trending: false,
        beginner: false
      });
    } else {
      setFilters(prev => ({
        ...prev,
        [filterType]: value
      }));
    }
  };

  return (
    <>
      <Helmet>
        <title>Money Making Methods - HustleIndia | Earn Online in India</title>
        <meta name="description" content="Discover proven money-making methods in India. From YouTube monetization to affiliate marketing, find the perfect online earning opportunity for your skills and goals." />
        <meta name="keywords" content="money making, online earning, affiliate marketing, YouTube monetization, freelancing, India" />
        <meta property="og:title" content="Money Making Methods - HustleIndia" />
        <meta property="og:description" content="Comprehensive guide to online earning methods in India with realistic earning potential and success rates." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/category-hub-money-making-ecosystem" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="bg-cultural-gradient p-3 rounded-xl">
                  <Icon name="DollarSign" size={32} color="white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary font-poppins">
                  {currentLanguage === 'hi' ? 'पैसे कमाने के तरीके' : 'Money Making Methods'}
                </h1>
              </div>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                {currentLanguage === 'hi' ?'भारत में ऑनलाइन पैसे कमाने के सिद्ध तरीकों की खोज करें। यूट्यूब मुद्रीकरण से लेकर एफिलिएट मार्केटिंग तक, अपने कौशल और लक्ष्यों के लिए सही अवसर खोजें।' :'Discover proven online earning methods in India. From YouTube monetization to affiliate marketing, find the perfect opportunity for your skills and goals.'
                }
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-cultural p-4 border border-border">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-text-secondary">
                    {currentLanguage === 'hi' ? 'सफल उपयोगकर्ता' : 'Success Stories'}
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-cultural p-4 border border-border">
                  <div className="text-2xl font-bold text-success">₹2.5Cr+</div>
                  <div className="text-sm text-text-secondary">
                    {currentLanguage === 'hi' ? 'कुल कमाई' : 'Total Earned'}
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-cultural p-4 border border-border">
                  <div className="text-2xl font-bold text-secondary">25+</div>
                  <div className="text-sm text-text-secondary">
                    {currentLanguage === 'hi' ? 'तरीके' : 'Methods'}
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-cultural p-4 border border-border">
                  <div className="text-2xl font-bold text-warning">4.6★</div>
                  <div className="text-sm text-text-secondary">
                    {currentLanguage === 'hi' ? 'औसत रेटिंग' : 'Avg Rating'}
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal Banner */}
            <SeasonalBanner />

            {/* Filter Bar */}
            <FilterBar 
              onFilterChange={handleFilterChange}
              activeFilters={filters}
              totalMethods={filteredMethods.length}
            />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Methods Grid */}
              <div className="lg:col-span-3">
                {filteredMethods.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredMethods.map((method) => (
                      <MethodCard 
                        key={method.id} 
                        method={method} 
                        currentLanguage={currentLanguage}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="bg-muted rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={32} color="var(--color-text-secondary)" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {currentLanguage === 'hi' ? 'कोई परिणाम नहीं मिला' : 'No Results Found'}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {currentLanguage === 'hi' ?'अपने फिल्टर को समायोजित करने का प्रयास करें या सभी फिल्टर साफ़ करें' :'Try adjusting your filters or clear all filters'
                      }
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => handleFilterChange('clear', null)}
                    >
                      <Icon name="RotateCcw" size={16} />
                      {currentLanguage === 'hi' ? 'फिल्टर साफ़ करें' : 'Clear Filters'}
                    </Button>
                  </div>
                )}

                {/* Load More Button */}
                {filteredMethods.length > 0 && (
                  <div className="text-center mt-8">
                    <Button variant="outline" size="lg">
                      <Icon name="Plus" size={20} />
                      {currentLanguage === 'hi' ? 'और तरीके लोड करें' : 'Load More Methods'}
                    </Button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Sidebar currentLanguage={currentLanguage} />
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-16 bg-cultural-gradient rounded-2xl p-8 lg:p-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-poppins">
                  {currentLanguage === 'hi' ?'आज ही अपनी ऑनलाइन कमाई शुरू करें' :'Start Your Online Earning Journey Today'
                  }
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  {currentLanguage === 'hi' ?'हजारों भारतीयों में शामिल हों जो पहले से ही ऑनलाइन पैसे कमा रहे हैं। अपना पहला ₹1000 अगले 30 दिनों में कमाएं।' :'Join thousands of Indians already earning online. Make your first ₹1000 in the next 30 days.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="default" 
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-white/90 font-semibold"
                  >
                    <Icon name="Rocket" size={20} />
                    {currentLanguage === 'hi' ? 'मुफ्त में शुरू करें' : 'Start Free Now'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Icon name="Phone" size={20} />
                    {currentLanguage === 'hi' ? 'विशेषज्ञ से बात करें' : 'Talk to Expert'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CategoryHubMoneyMakingEcosystem;