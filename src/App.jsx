import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Gsap from "./components/Gsap";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) lenis.scrollTo(value);
        else return window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div className="relative">
          <Navbar />

          <main className="relative">
            <section id="home">
              <Hero />
            </section>

            <section id="about">
              <About />
            </section>

            {/* <section id="services">
              <Services />
            </section> */}

            {/* <section id="work">
              <Work />
            </section> */}

            {/* <section id="team">
              <Team />
            </section> */}

            {/* <section id="testimonials">
              <Testimonials />
            </section> */}

            {/* <section id="motion">
              <Gsap />
            </section> */}

            {/* <section id="blog">
              <Blog />
            </section> */}
          </main>

          <ScrollToTop />
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

export default App;
