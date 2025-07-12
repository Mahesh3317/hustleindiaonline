import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HomepageMultiLanguageDigitalLifestyleHub from "pages/homepage-multi-language-digital-lifestyle-hub";
import CategoryHubMoneyMakingEcosystem from "pages/category-hub-money-making-ecosystem";
import AboutUsTrustCredibilityCenter from "pages/about-us-trust-credibility-center";
import TechReviewsProductComparisonHub from "pages/tech-reviews-product-comparison-hub";
import IndividualBlogPostSeoOptimizedArticle from "pages/individual-blog-post-seo-optimized-article";
import AstrologyNumerologyCulturalWisdomHub from "pages/astrology-numerology-cultural-wisdom-hub";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HomepageMultiLanguageDigitalLifestyleHub />} />
        <Route path="/homepage-multi-language-digital-lifestyle-hub" element={<HomepageMultiLanguageDigitalLifestyleHub />} />
        <Route path="/category-hub-money-making-ecosystem" element={<CategoryHubMoneyMakingEcosystem />} />
        <Route path="/about-us-trust-credibility-center" element={<AboutUsTrustCredibilityCenter />} />
        <Route path="/tech-reviews-product-comparison-hub" element={<TechReviewsProductComparisonHub />} />
        <Route path="/individual-blog-post-seo-optimized-article" element={<IndividualBlogPostSeoOptimizedArticle />} />
        <Route path="/astrology-numerology-cultural-wisdom-hub" element={<AstrologyNumerologyCulturalWisdomHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;