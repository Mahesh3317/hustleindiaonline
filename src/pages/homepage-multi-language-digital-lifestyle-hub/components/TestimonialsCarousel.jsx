import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsCarousel = ({ currentLanguage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = {
    en: [
      {
        id: 1,
        name: "Sneha Patel",
        location: "Surat, Gujarat",
        profession: "Housewife turned Blogger",
        earnings: "₹75,000/month",
        duration: "10 months",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        testimonial: `I started blogging about cooking and home management during my free time. Within 10 months, I'm earning more than my husband's salary! HustleIndia's step-by-step guidance made it possible. Now I help other women start their digital journey.`,
        method: "Food Blogging + Affiliate Marketing",
        verified: true,
        featured: true
      },
      {
        id: 2,
        name: "Arjun Singh",
        location: "Jaipur, Rajasthan",
        profession: "College Student",
        earnings: "₹45,000/month",
        duration: "6 months",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        testimonial: `As a final year engineering student, I needed extra income for my family. Started with YouTube tech reviews and now I'm financially independent. The best part? I'm helping other students with genuine product reviews.`,
        method: "YouTube + Tech Reviews",
        verified: true,
        featured: false
      },
      {
        id: 3,
        name: "Meera Krishnan",
        location: "Kochi, Kerala",
        profession: "Software Engineer",
        earnings: "₹1,25,000/month",
        duration: "1.5 years",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
        testimonial: `Working 9-5 wasn't enough for my dreams. I started freelance app development on weekends and now it's my primary income source. HustleIndia's community support was incredible throughout my journey.`,
        method: "Freelance App Development",
        verified: true,
        featured: true
      },
      {
        id: 4,
        name: "Rohit Sharma",
        location: "Pune, Maharashtra",
        profession: "Marketing Executive",
        earnings: "₹85,000/month",
        duration: "8 months",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        testimonial: `I combined my marketing knowledge with digital platforms. Started with social media management for small businesses and now I run a full-service digital marketing agency. The growth has been phenomenal!`,
        method: "Digital Marketing Agency",
        verified: true,
        featured: false
      },
      {
        id: 5,
        name: "Priya Reddy",
        location: "Hyderabad, Telangana",
        profession: "Teacher",
        earnings: "₹60,000/month",
        duration: "7 months",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
        testimonial: `Teaching was my passion, but the salary wasn't enough. I started online tutoring and course creation. Now I reach thousands of students globally while earning 3x my previous salary. Education truly has no boundaries!`,
        method: "Online Education + Courses",
        verified: true,
        featured: true
      }
    ],
    hi: [
      {
        id: 1,
        name: "स्नेहा पटेल",
        location: "सूरत, गुजरात",
        profession: "गृहिणी से ब्लॉगर बनीं",
        earnings: "₹75,000/महीना",
        duration: "10 महीने",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        testimonial: `मैंने अपने खाली समय में खाना बनाने और घर के प्रबंधन के बारे में ब्लॉगिंग शुरू की। 10 महीने में मैं अपने पति की सैलरी से ज्यादा कमा रही हूं! हसल इंडिया के स्टेप-बाई-स्टेप गाइडेंस ने इसे संभव बनाया। अब मैं अन्य महिलाओं को उनकी डिजिटल यात्रा शुरू करने में मदद करती हूं।`,
        method: "फूड ब्लॉगिंग + एफिलिएट मार्केटिंग",
        verified: true,
        featured: true
      },
      {
        id: 2,
        name: "अर्जुन सिंह",
        location: "जयपुर, राजस्थान",
        profession: "कॉलेज स्टूडेंट",
        earnings: "₹45,000/महीना",
        duration: "6 महीने",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        testimonial: `इंजीनियरिंग के अंतिम वर्ष के छात्र के रूप में, मुझे अपने परिवार के लिए अतिरिक्त आय की जरूरत थी। यूट्यूब टेक रिव्यू से शुरुआत की और अब मैं आर्थिक रूप से स्वतंत्र हूं। सबसे अच्छी बात? मैं अन्य छात्रों को वास्तविक उत्पाद समीक्षाओं के साथ मदद कर रहा हूं।`,
        method: "यूट्यूब + टेक रिव्यू",
        verified: true,
        featured: false
      },
      {
        id: 3,
        name: "मीरा कृष्णन",
        location: "कोच्चि, केरल",
        profession: "सॉफ्टवेयर इंजीनियर",
        earnings: "₹1,25,000/महीना",
        duration: "1.5 साल",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
        testimonial: `9-5 की नौकरी मेरे सपनों के लिए पर्याप्त नहीं थी। मैंने वीकेंड में फ्रीलांस ऐप डेवलपमेंट शुरू किया और अब यह मेरी प्राथमिक आय का स्रोत है। हसल इंडिया के कम्युनिटी सपोर्ट ने मेरी पूरी यात्रा में अविश्वसनीय मदद की।`,
        method: "फ्रीलांस ऐप डेवलपमेंट",
        verified: true,
        featured: true
      },
      {
        id: 4,
        name: "रोहित शर्मा",
        location: "पुणे, महाराष्ट्र",
        profession: "मार्केटिंग एक्जीक्यूटिव",
        earnings: "₹85,000/महीना",
        duration: "8 महीने",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        testimonial: `मैंने अपने मार्केटिंग ज्ञान को डिजिटल प्लेटफॉर्म के साथ जोड़ा। छोटे व्यवसायों के लिए सोशल मीडिया मैनेजमेंट से शुरुआत की और अब मैं एक पूर्ण-सेवा डिजिटल मार्केटिंग एजेंसी चलाता हूं। विकास अभूतपूर्व रहा है!`,
        method: "डिजिटल मार्केटिंग एजेंसी",
        verified: true,
        featured: false
      },
      {
        id: 5,
        name: "प्रिया रेड्डी",
        location: "हैदराबाद, तेलंगाना",
        profession: "शिक्षिका",
        earnings: "₹60,000/महीना",
        duration: "7 महीने",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
        testimonial: `पढ़ाना मेरा जुनून था, लेकिन सैलरी पर्याप्त नहीं थी। मैंने ऑनलाइन ट्यूटरिंग और कोर्स बनाना शुरू किया। अब मैं दुनिया भर के हजारों छात्रों तक पहुंचती हूं और अपनी पिछली सैलरी से 3 गुना कमाती हूं। शिक्षा की वास्तव में कोई सीमा नहीं है!`,
        method: "ऑनलाइन शिक्षा + कोर्स",
        verified: true,
        featured: true
      }
    ],
    ta: [
      {
        id: 1,
        name: "ஸ்னேகா பட்டேல்",
        location: "சூரத், குஜராத்",
        profession: "இல்லத்தரசியிலிருந்து ப்ளாகராக",
        earnings: "₹75,000/மாதம்",
        duration: "10 மாதங்கள்",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        testimonial: `எனது ஓய்வு நேரத்தில் சமையல் மற்றும் வீட்டு நிர்வாகம் பற்றி ப்ளாகிங் செய்ய ஆரம்பித்தேன். 10 மாதங்களில் என் கணவரின் சம்பளத்தை விட அதிகம் சம்பாதிக்கிறேன்! ஹஸ்டில் இந்தியாவின் படிப்படியான வழிகாட்டுதல் இதை சாத்தியமாக்கியது. இப்போது மற்ற பெண்களுக்கு அவர்களின் டிஜிட்டல் பயணத்தைத் தொடங்க உதவுகிறேன்.`,
        method: "உணவு ப்ளாகிங் + அஃபிலியேட் மார்க்கெட்டிங்",
        verified: true,
        featured: true
      },
      {
        id: 2,
        name: "அர்ஜுன் சிங்",
        location: "ஜெய்ப்பூர், ராஜஸ்தான்",
        profession: "கல்லூரி மாணவர்",
        earnings: "₹45,000/மாதம்",
        duration: "6 மாதங்கள்",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        testimonial: `இறுதி ஆண்டு இன்ஜினியரிங் மாணவனாக, எனது குடும்பத்திற்கு கூடுதல் வருமானம் தேவைப்பட்டது. யூடியூப் டெக் ரிவியூக்களுடன் தொடங்கி இப்போது நான் நிதி ரீதியாக சுதந்திரமாக இருக்கிறேன். சிறந்த பகுதி? நான் மற்ற மாணவர்களுக்கு உண்மையான தயாரிப்பு மதிப்புரைகளுடன் உதவுகிறேன்.`,
        method: "யூடியூப் + டெக் ரிவியூக்கள்",
        verified: true,
        featured: false
      },
      {
        id: 3,
        name: "மீரா கிருஷ்ணன்",
        location: "கொச்சி, கேரளா",
        profession: "மென்பொருள் பொறியாளர்",
        earnings: "₹1,25,000/மாதம்",
        duration: "1.5 ஆண்டுகள்",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
        testimonial: `9-5 வேலை என் கனவுகளுக்கு போதுமானதாக இல்லை. வார இறுதியில் ஃப்ரீலான்ஸ் ஆப் டெவலப்மென்ட் தொடங்கினேன், இப்போது அது என் முதன்மை வருமான ஆதாரம். ஹஸ்டில் இந்தியாவின் சமூக ஆதரவு என் பயணம் முழுவதும் நம்பமுடியாததாக இருந்தது.`,
        method: "ஃப்ரீலான்ஸ் ஆப் டெவலப்மென்ட்",
        verified: true,
        featured: true
      },
      {
        id: 4,
        name: "ரோஹித் ஷர்மா",
        location: "புனே, மகாராஷ்டிரா",
        profession: "மார்க்கெட்டிங் எக்ஸிக்யூட்டிவ்",
        earnings: "₹85,000/மாதம்",
        duration: "8 மாதங்கள்",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        testimonial: `என் மார்க்கெட்டிங் அறிவை டிஜிட்டல் தளங்களுடன் இணைத்தேன். சிறு வணிகங்களுக்கான சமூக ஊடக நிர்வாகத்துடன் தொடங்கி இப்போது முழு சேவை டிஜிட்டல் மார்க்கெட்டிங் ஏஜென்சியை நடத்துகிறேன். வளர்ச்சி அபரிமிதமாக உள்ளது!`,
        method: "டிஜிட்டல் மார்க்கெட்டிங் ஏஜென்சி",
        verified: true,
        featured: false
      },
      {
        id: 5,
        name: "பிரியா ரெட்டி",
        location: "ஹைதராபாத், தெலுங்கானா",
        profession: "ஆசிரியர்",
        earnings: "₹60,000/மாதம்",
        duration: "7 மாதங்கள்",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
        testimonial: `கற்பித்தல் என் ஆர்வமாக இருந்தது, ஆனால் சம்பளம் போதுமானதாக இல்லை. ஆன்லைன் ட்யூட்டரிங் மற்றும் கோர்ஸ் உருவாக்கத்தைத் தொடங்கினேன். இப்போது உலகளவில் ஆயிரக்கணக்கான மாணவர்களை அடைந்து என் முந்தைய சம்பளத்தை விட 3 மடங்கு சம்பாதிக்கிறேன். கல்விக்கு உண்மையில் எல்லைகள் இல்லை!`,
        method: "ஆன்லைன் கல்வி + கோர்ஸ்கள்",
        verified: true,
        featured: true
      }
    ],
    te: [
      {
        id: 1,
        name: "స్నేహా పటేల్",
        location: "సూరత్, గుజరాత్",
        profession: "గృహిణి నుండి బ్లాగర్‌గా",
        earnings: "₹75,000/నెల",
        duration: "10 నెలలు",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        testimonial: `నా ఖాళీ సమయంలో వంట మరియు ఇంటి నిర్వహణ గురించి బ్లాగింగ్ ప్రారంభించాను. 10 నెలల్లో నా భర్త జీతం కంటే ఎక్కువ సంపాదిస్తున్నాను! హస్టిల్ ఇండియా యొక్క దశల వారీ మార్గదర్శకత్వం దీన్ని సాధ్యం చేసింది. ఇప్పుడు ఇతర మహిళలకు వారి డిజిటల్ ప్రయాణాన్ని ప్రారంభించడంలో సహాయం చేస్తున్నాను.`,
        method: "ఫుడ్ బ్లాగింగ్ + అఫిలియేట్ మార్కెటింగ్",
        verified: true,
        featured: true
      },
      {
        id: 2,
        name: "అర్జున్ సింగ్",
        location: "జైపూర్, రాజస్థాన్",
        profession: "కాలేజీ విద్యార్థి",
        earnings: "₹45,000/నెల",
        duration: "6 నెలలు",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        testimonial: `చివరి సంవత్సరం ఇంజినీరింగ్ విద్యార్థిగా, నా కుటుంబానికి అదనపు ఆదాయం అవసరం. యూట్యూబ్ టెక్ రివ్యూలతో ప్రారంభించి ఇప్పుడు నేను ఆర్థికంగా స్వతంత్రుడిని. ఉత్తమ భాగం? నేను ఇతర విద్యార్థులకు నిజమైన ఉత్పత్తి సమీక్షలతో సహాయం చేస్తున్నాను.`,
        method: "యూట్యూబ్ + టెక్ రివ్యూలు",
        verified: true,
        featured: false
      },
      {
        id: 3,
        name: "మీరా కృష్ణన్",
        location: "కొచ్చి, కేరళ",
        profession: "సాఫ్ట్‌వేర్ ఇంజనీర్",
        earnings: "₹1,25,000/నెల",
        duration: "1.5 సంవత్సరాలు",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
        testimonial: `9-5 ఉద్యోగం నా కలలకు సరిపోలేదు. వారాంతాల్లో ఫ్రీలాన్స్ యాప్ డెవలప్‌మెంట్ ప్రారంభించాను మరియు ఇప్పుడు అది నా ప్రాథమిక ఆదాయ వనరు. హస్టిల్ ఇండియా యొక్క కమ్యూనిటీ మద్దతు నా ప్రయాణం అంతటా అద్భుతంగా ఉంది.`,
        method: "ఫ్రీలాన్స్ యాప్ డెవలప్‌మెంట్",
        verified: true,
        featured: true
      },
      {
        id: 4,
        name: "రోహిత్ శర్మ",
        location: "పూణే, మహారాష్ట్ర",
        profession: "మార్కెటింగ్ ఎగ్జిక్యూటివ్",
        earnings: "₹85,000/నెల",
        duration: "8 నెలలు",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        testimonial: `నా మార్కెటింగ్ జ్ఞానాన్ని డిజిటల్ ప్లాట్‌ఫారమ్‌లతో కలిపాను. చిన్న వ్యాపారాల కోసం సోషల్ మీడియా మేనేజ్‌మెంట్‌తో ప్రారంభించి ఇప్పుడు పూర్తి-సేవా డిజిటల్ మార్కెటింగ్ ఏజెన్సీని నడుపుతున్నాను. వృద్ధి అసాధారణంగా ఉంది!`,
        method: "డిజిటల్ మార్కెటింగ్ ఏజెన్సీ",
        verified: true,
        featured: false
      },
      {
        id: 5,
        name: "ప్రియా రెడ్డి",
        location: "హైదరాబాద్, తెలంగాణ",
        profession: "ఉపాధ్యాయురాలు",
        earnings: "₹60,000/నెల",
        duration: "7 నెలలు",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
        testimonial: `బోధన నా అభిరుచి, కానీ జీతం సరిపోలేదు. ఆన్‌లైన్ ట్యూటరింగ్ మరియు కోర్స్ క్రియేషన్ ప్రారంభించాను. ఇప్పుడు నేను ప్రపంచవ్యాప్తంగా వేలాది మంది విద్యార్థులను చేరుకుంటూ నా మునుపటి జీతం కంటే 3 రెట్లు సంపాదిస్తున్నాను. విద్యకు నిజంగా సరిహద్దులు లేవు!`,
        method: "ఆన్‌లైన్ విద్య + కోర్సులు",
        verified: true,
        featured: true
      }
    ]
  };

  const sectionTitles = {
    en: {
      title: "Real Success Stories from Our Community",
      subtitle: "Meet Indians who transformed their lives through digital earning",
      viewProfile: "View Full Story",
      nextStory: "Next Story",
      prevStory: "Previous Story"
    },
    hi: {
      title: "हमारे समुदाय की वास्तविक सफलता की कहानियां",
      subtitle: "उन भारतीयों से मिलें जिन्होंने डिजिटल कमाई के माध्यम से अपना जीवन बदला",
      viewProfile: "पूरी कहानी देखें",
      nextStory: "अगली कहानी",
      prevStory: "पिछली कहानी"
    },
    ta: {
      title: "எங்கள் சமூகத்தின் உண்மையான வெற்றிக் கதைகள்",
      subtitle: "டிஜிட்டல் வருமானம் மூலம் தங்கள் வாழ்க்கையை மாற்றிய இந்தியர்களைச் சந்திக்கவும்",
      viewProfile: "முழு கதையைப் பாருங்கள்",
      nextStory: "அடுத்த கதை",
      prevStory: "முந்தைய கதை"
    },
    te: {
      title: "మా కమ్యూనిటీ నుండి నిజమైన విజయ కథలు",
      subtitle: "డిజిటల్ సంపాదన ద్వారా తమ జీవితాలను మార్చుకున్న భారతీయులను కలవండి",
      viewProfile: "పూర్తి కథను చూడండి",
      nextStory: "తదుపరి కథ",
      prevStory: "మునుపటి కథ"
    }
  };

  const currentTestimonials = testimonials[currentLanguage];
  const titles = sectionTitles[currentLanguage];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentTestimonials.length, isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = currentTestimonials[currentIndex];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-poppins mb-4">
            {titles.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {titles.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-background rounded-2xl shadow-cultural-lg overflow-hidden">
            {/* Main Testimonial */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    {currentTestimonial.verified && (
                      <div className="bg-success rounded-full p-2">
                        <Icon name="Check" size={16} color="white" />
                      </div>
                    )}
                    {currentTestimonial.featured && (
                      <div className="bg-warning rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-white">
                          {currentLanguage === 'hi' ? 'फीचर्ड' : 
                           currentLanguage === 'ta' ? 'சிறப்பு' :
                           currentLanguage === 'te' ? 'ఫీచర్డ్' : 'Featured'}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{currentTestimonial.name}</h3>
                  <p className="text-white/90 mb-1">{currentTestimonial.profession}</p>
                  <p className="text-white/80 text-sm">{currentTestimonial.location}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Earnings Highlight */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-secondary mb-1">
                        {currentLanguage === 'hi' ? 'मासिक आय' : 
                         currentLanguage === 'ta' ? 'மாதாந்திர வருமானம்' :
                         currentLanguage === 'te' ? 'నెలవారీ ఆదాయం' : 'Monthly Earnings'}
                      </p>
                      <p className="text-3xl font-bold text-success">{currentTestimonial.earnings}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-text-secondary mb-1">
                        {currentLanguage === 'hi' ? 'समय अवधि' : 
                         currentLanguage === 'ta' ? 'கால அளவு' :
                         currentLanguage === 'te' ? 'కాల వ్యవధి' : 'Duration'}
                      </p>
                      <p className="text-xl font-semibold text-text-primary">{currentTestimonial.duration}</p>
                    </div>
                  </div>

                  {/* Method Badge */}
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {currentTestimonial.method}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-text-primary leading-relaxed text-lg">
                    <Icon name="Quote" size={24} color="var(--color-primary)" className="mb-4" />
                    "{currentTestimonial.testimonial}"
                  </blockquote>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    {titles.viewProfile}
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="bg-white/90 hover:bg-white text-text-primary shadow-lg"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="bg-white/90 hover:bg-white text-text-primary shadow-lg"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {currentTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>

          {/* Mini Testimonials Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {currentTestimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                onClick={() => goToTestimonial(index)}
                className={`bg-card rounded-lg p-6 border cursor-pointer transition-all hover:shadow-cultural ${
                  index === currentIndex ? 'border-primary shadow-cultural' : 'border-border'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-text-secondary">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-success mb-2">{testimonial.earnings}</p>
                <p className="text-xs text-text-secondary line-clamp-2">{testimonial.method}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;