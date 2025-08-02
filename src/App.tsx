import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import BlogPostPage from './pages/BlogPostPage'; // ✅ CORRECT
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
              <Header />
              <main className="pb-16 md:pb-0">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/category/:slug" element={<CategoryPage />} />
                  <Route path="/post/:slug" element={<BlogPostPage />} />
                  <Route path="/about" element={
                    <div className="container mx-auto px-4 py-12">
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About HustleIndiaOnline</h1>
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>HustleIndiaOnline is your trusted source for the latest news, technology updates, astrology predictions, and lifestyle content in multiple Indian languages.</p>
                        <p>We are committed to providing accurate, timely, and relevant information to our readers across India.</p>
                      </div>
                    </div>
                  } />
                  <Route path="/contact" element={
                    <div className="container mx-auto px-4 py-12">
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>Get in touch with our team for any queries, suggestions, or feedback.</p>
                        <p>Email: contact@hustleindia.online</p>
                        <p>Phone: +91-XXXXXXXXXX</p>
                      </div>
                    </div>
                  } />
                  <Route path="/privacy" element={
                    <div className="container mx-auto px-4 py-12">
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.</p>
                      </div>
                    </div>
                  } />
                  <Route path="/terms" element={
                    <div className="container mx-auto px-4 py-12">
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms & Conditions</h1>
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>Please read our terms and conditions carefully before using our website.</p>
                      </div>
                    </div>
                  } />
                </Routes>
              </main>
              <Footer />
              <MobileBottomNav />
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;