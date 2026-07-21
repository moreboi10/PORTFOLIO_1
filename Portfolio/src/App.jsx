import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <Experience/>
        <TechStack/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
};

export default App;

// import Testimonials from "./sections/Testimonials";
// import Footer from "./sections/Footer";
// import Contact from "./sections/Contact";
// import TechStack from "./sections/TechStack";
// import Experience from "./sections/Experience";
// import Hero from "./sections/Hero";
// import ShowcaseSection from "./sections/ShowcaseSection";
// import LogoShowcase from "./sections/LogoShowcase";
// import FeatureCards from "./sections/FeatureCards";
// import Navbar from "./components/NavBar";

// const App = () => (
//   <>
//     <Navbar />
//     <Hero />
//     <ShowcaseSection />
//     <LogoShowcase />
//     <FeatureCards />
//     <Experience />
//     <TechStack />
//     <Testimonials />
//     <Contact />
//     <Footer />
//   </>
// );

// export default App;
