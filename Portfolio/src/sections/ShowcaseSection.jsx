import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SpecularButton from "../components/SpecularButton";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const Project1Ref = useRef(null);
  const Project2Ref = useRef(null);
  const Project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      Project1Ref.current,
      Project2Ref.current,
      Project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });

    gsap.fromTo(
      sectionRef.current,

      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT side */}
          <div className="first-project-wrapper" ref={Project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>Food Delivery, Built for a Seamless Experience</h2>
              <p className="text-white-50 md:text-xl">
                A full-stack food delivery platform built with React and Spring
                Boot, featuring secure JWT authentication, Razorpay payments,
                role-based access, restaurant & menu management, and end-to-end
                order tracking.
              </p>
              <div className="flex gap-4">
                <SpecularButton
                size="lg"
                radius={18}
                tint="#ffffff"
                tintOpacity={0}
                blur={0}
                textColor="#f5f5f5"
                lineColor="#ffffff"
                baseColor="#525252"
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={1}
                speed={0.35}
                followMouse
                proximity={250}
                autoAnimate={false}
                onClick={() => console.log("clicked")}
              >
                Open Description
              </SpecularButton>
              <SpecularButton
                size="lg"
                radius={18}
                tint="#ffffff"
                tintOpacity={0}
                blur={0}
                textColor="#f5f5f5"
                lineColor="#ffffff"
                baseColor="#525252"
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={1}
                speed={0.35}
                followMouse
                proximity={250}
                autoAnimate={false}
                onClick={() => console.log("clicked")}
              >
                Open App
              </SpecularButton>
              </div>
            </div>
          </div>
          {/* RIGHT side */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={Project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Library Management Platform</h2>
            </div>

            <div className="project" ref={Project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC directory" />
              </div>
              <h2>A startup showcase app </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
