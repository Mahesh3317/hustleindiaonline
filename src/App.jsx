import React, { useEffect } from "react";
import Routes from "./Routes";

function App() {
  useEffect(() => {
    // Load Google Analytics gtag.js
    const script1 = document.createElement("script");
    script1.setAttribute("async", "");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-6XWKW8PXWG";
    document.head.appendChild(script1);

    // Google Analytics config
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6XWKW8PXWG');
    `;
    document.head.appendChild(script2);
  }, []);

  return <Routes />;
}

export default App;
