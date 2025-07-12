import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import TransparencySection from './components/TransparencySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

const AboutUsPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const pageContent = {
    en: {
      title: "About Us - Trust & Credibility Center | HustleIndia",
      description: "Meet the team behind HustleIndia's success. Learn about our mission to empower Digital Bharat, our transparent methodology, and real success stories from our community of 2.5L+ members.",
      keywords: "HustleIndia team, digital earning mentor, online income transparency, Indian digital entrepreneurs, affiliate marketing India, YouTube earning guide"
    },
    hi: {
      title: "हमारे बारे में - विश्वास और विश्वसनीयता केंद्र | हसलइंडिया",
      description: "हसलइंडिया की सफलता के पीछे की टीम से मिलें। डिजिटल भारत को सशक्त बनाने के हमारे मिशन, हमारी पारदर्शी पद्धति, और हमारे 2.5L+ सदस्यों के समुदाय की वास्तविक सफलता की कहानियों के बारे में जानें।",
      keywords: "हसलइंडिया टीम, डिजिटल कमाई मेंटर, ऑनलाइन आय पारदर्शिता, भारतीय डिजिटल उद्यमी, एफिलिएट मार्केटिंग भारत, यूट्यूब कमाई गाइड"
    }
  };

  const currentContent = pageContent[currentLanguage] || pageContent.en;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{currentContent.title}</title>
        <meta name="description" content={currentContent.description} />
        <meta name="keywords" content={currentContent.keywords} />
        <meta property="og:title" content={currentContent.title} />
        <meta property="og:description" content={currentContent.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hustleindia.online/about-us-trust-credibility-center" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=630&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentContent.title} />
        <meta name="twitter:description" content={currentContent.description} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=630&fit=crop" />
        <link rel="canonical" href="https://hustleindia.online/about-us-trust-credibility-center" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="HustleIndia Team" />
        <meta name="language" content={currentLanguage === 'hi' ? 'Hindi' : 'English'} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": currentContent.title,
            "description": currentContent.description,
            "url": "https://hustleindia.online/about-us-trust-credibility-center",
            "mainEntity": {
              "@type": "Organization",
              "name": "HustleIndia",
              "url": "https://hustleindia.online",
              "logo": "https://hustleindia.online/logo.png",
              "description": "India's largest digital earning community platform",
              "foundingDate": "2019",
              "founder": {
                "@type": "Person",
                "name": "Rajesh Kumar Sharma"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411001",
                "addressCountry": "IN"
              }
            }
          })}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-16">
        <HeroSection currentLanguage={currentLanguage} />
        <MissionSection currentLanguage={currentLanguage} />
        <TeamSection currentLanguage={currentLanguage} />
        <TransparencySection currentLanguage={currentLanguage} />
        <TestimonialsSection currentLanguage={currentLanguage} />
        <ContactSection currentLanguage={currentLanguage} />
      </main>

      <footer className="bg-text-primary text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <p className="text-lg mb-4">
              {currentLanguage === 'hi' ?'भारत के डिजिटल भविष्य का निर्माण, एक साथ।' :'Building India\'s digital future, together.'
              }
            </p>
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} HustleIndia. {currentLanguage === 'hi' ? 'सभी अधिकार सुरक्षित।' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;