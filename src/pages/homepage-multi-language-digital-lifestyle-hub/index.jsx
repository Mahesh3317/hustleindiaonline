import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ContentShowcase from './components/ContentShowcase';
import EarningsCalculator from './components/EarningsCalculator';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

const HomepageMultiLanguageDigitalLifestyleHub = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const seoContent = {
    en: {
      title: "HustleIndia - Digital Earning Hub | Make Money Online in India",
      description: "Join 50,000+ Indians earning ₹25,000-₹2,00,000 monthly online. Get proven strategies, tech reviews, and step-by-step guidance for digital success.",
      keywords: "make money online India, digital earning, online income, work from home, affiliate marketing, blogging, YouTube monetization"
    },
    hi: {
      title: "हसल इंडिया - डिजिटल कमाई हब | भारत में ऑनलाइन पैसे कमाएं",
      description: "50,000+ भारतीयों के साथ जुड़ें जो महीने में ₹25,000-₹2,00,000 ऑनलाइन कमा रहे हैं। सिद्ध रणनीतियां, टेक रिव्यू और डिजिटल सफलता के लिए गाइडेंस पाएं।",
      keywords: "भारत में ऑनलाइन पैसे कमाना, डिजिटल कमाई, ऑनलाइन आय, घर से काम, एफिलिएट मार्केटिंग, ब्लॉगिंग, यूट्यूब मुद्रीकरण"
    },
    ta: {
      title: "ஹஸ்டில் இந்தியா - டிஜிட்டல் வருமான மையம் | இந்தியாவில் ஆன்லைனில் பணம் சம்பாதிக்கவும்",
      description: "மாதம் ₹25,000-₹2,00,000 ஆன்லைனில் சம்பாதிக்கும் 50,000+ இந்தியர்களுடன் சேருங்கள். நிரூபிக்கப்பட்ட உத்திகள், டெக் மதிப்புரைகள் மற்றும் டிஜிட்டல் வெற்றிக்கான வழிகாட்டுதலைப் பெறுங்கள்.",
      keywords: "இந்தியாவில் ஆன்லைனில் பணம் சம்பாதித்தல், டிஜிட்டல் வருமானம், ஆன்லைன் வருமானம், வீட்டிலிருந்து வேலை, அஃபிலியேட் மார்க்கெட்டிங், ப்ளாகிங், யூடியூப் பணமாக்கல்"
    },
    te: {
      title: "హస్టిల్ ఇండియా - డిజిటల్ సంపాదన కేంద్రం | భారతదేశంలో ఆన్‌లైన్‌లో డబ్బు సంపాదించండి",
      description: "నెలకు ₹25,000-₹2,00,000 ఆన్‌లైన్‌లో సంపాదిస్తున్న 50,000+ భారతీయులతో చేరండి. నిరూపితమైన వ్యూహాలు, టెక్ రివ్యూలు మరియు డిజిటల్ విజయం కోసం మార్గదర్శకత్వం పొందండి.",
      keywords: "భారతదేశంలో ఆన్‌లైన్‌లో డబ్బు సంపాదించడం, డిజిటల్ సంపాదన, ఆన్‌లైన్ ఆదాయం, ఇంటి నుండి పని, అఫిలియేట్ మార్కెటింగ్, బ్లాగింగ్, యూట్యూబ్ మనీటైజేషన్"
    }
  };

  const currentSEO = seoContent[currentLanguage];

  return (
    <>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hustleindia.online/homepage-multi-language-digital-lifestyle-hub" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSEO.title} />
        <meta name="twitter:description" content={currentSEO.description} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop" />
        <link rel="canonical"href="https://hustleindia.online/homepage-multi-language-digital-lifestyle-hub" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={currentLanguage} />
        <meta name="author" content="HustleIndia Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="alternate" hrefLang="en" href="https://hustleindia.online/homepage-multi-language-digital-lifestyle-hub?lang=en" />
        <link rel="alternate" hrefLang="hi" href="https://hustleindia.online/homepage-multi-language-digital-lifestyle-hub?lang=hi" />
        <link rel="alternate" hrefLang="ta" href="https://hustleindia.online/homepage-multi-language-digital-lifestyle-hub?lang=ta" />
        <link rel="alternate" hrefLang="te" href="https://hustleindia.online/homepage-multi-language-digital-lifestyle-hub?lang=te" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "HustleIndia",
            "url": "https://hustleindia.online",
            "description": currentSEO.description,
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://hustleindia.online/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "sameAs": [
              "https://facebook.com/hustleindia",
              "https://twitter.com/hustleindia",
              "https://instagram.com/hustleindia",
              "https://youtube.com/hustleindia"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header 
          currentLanguage={currentLanguage}
          onLanguageChange={setCurrentLanguage}
        />
        
        <main>
          <HeroSection currentLanguage={currentLanguage} />
          <ContentShowcase currentLanguage={currentLanguage} />
          <EarningsCalculator currentLanguage={currentLanguage} />
          <TestimonialsCarousel currentLanguage={currentLanguage} />
          <NewsletterSection currentLanguage={currentLanguage} />
        </main>
        
        <Footer currentLanguage={currentLanguage} />
      </div>
    </>
  );
};

export default HomepageMultiLanguageDigitalLifestyleHub;