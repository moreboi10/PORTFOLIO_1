import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

// import LogoSection from "./sections/LogoSection";
// import Experience from "./sections/Experience";
// import Testimonials from "./sections/Testimonials.jsx";
// import GlowCursor from "./components/GlowCursor";

const App = () => {
  return (
    <main>
      <div>
        {/* <GlowCursor
          color="#67E8F9"
          secondaryColor="#A78BFA"
          trailLength={40}
          trailWidth={8}
          trailTaper={0.8}
          followSpeed={0.16}
          glowIntensity={1.9}
          glowSpread={1.2}
          hotspot={0.65}
          brightness={1.25}
          opacity={1}
          pulseSpeed={1.1}
          noiseStrength={0.035}
          idleFade
          idleTimeout={700}
          fadeDuration={900}
          blendMode="screen"
        > */}
          <NavBar />
          <Hero />
          <ShowcaseSection />
          {/* <LogoSection /> */}
          <FeatureCards />
          {/* <Experience/> */}
          <TechStack />
          {/* <Testimonials/> */}
          <Contact />
          <Footer />
        {/* </GlowCursor> */}
      </div>
    </main>
  );
};

export default App;

