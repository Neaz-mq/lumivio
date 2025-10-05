import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";

const App = () => {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // default scrolling duration
      smooth: true,
      smoothTouch: false, // keep native feel on mobile
      lerp: 0.1, // inertia (lower = smoother, higher = snappier)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy(); // cleanup on unmount
    };
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