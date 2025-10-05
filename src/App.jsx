import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const sectionsRef = useRef([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div className="relative">
          <Navbar />
          <main>
            <Hero />
            <About />
          </main>
             <ScrollToTop />
        </div>
      )}
    </>
  );
};

export default App;
