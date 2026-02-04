// Home.jsx
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundImg from "../assets/background.jpg";
import whiteArrowIcon from "../assets/white_arrow_icon.svg";

const Home = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { font-family: 'Inter', system-ui, sans-serif; }

        @keyframes shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .button-bg {
          background: conic-gradient(
            from 0deg,
            #00F5FF,
            #000,
            #000,
            #00F5FF,
            #000,
            #000,
            #000,
            #00F5FF
          );
          background-size: 300% 300%;
          animation: shine 6s ease-out infinite;
        }

        .glass-card {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 30px rgba(0,0,0,0.35);
        }

        .arrow-slide {
          transition: transform 0.3s ease;
        }

        button:hover .arrow-slide {
          transform: translateX(4px);
        }
      `}</style>

      <div className="min-h-screen flex flex-col bg-slate-950 text-gray-300">
        <Header
          scrollToAbout={() => scrollTo(aboutRef)}
          scrollToFeatures={() => scrollTo(featuresRef)}
          scrollToContact={() => scrollTo(contactRef)}
        />

        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={backgroundImg}
              alt="Background"
              className="w-full h-full object-cover brightness-[0.6] contrast-[1.05]"
            />

            {/* MAIN OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-transparent" />

            {/* FADE OUT GRADIENT (IMPORTANT PART) */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-slate-900" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Where Student Knowledge
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Lives & Grows
              </span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              A collaborative academic platform where students share, discover
              and elevate learning resources together.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-5">
              <div className="button-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
                <button
                  onClick={() => navigate("/register")}
                  className="px-9 py-3.5 text-sm md:text-base font-medium text-white bg-gray-900 rounded-full flex items-center gap-2.5"
                >
                  Get Started
                  <img
                    src={whiteArrowIcon}
                    alt="Arrow"
                    className="w-4 h-4 arrow-slide"
                  />
                </button>
              </div>

              <button
                onClick={() => scrollTo(featuresRef)}
                className="px-9 py-3.5 text-sm md:text-base font-medium border border-white/40 text-white rounded-full hover:bg-white/10 transition"
              >
                Explore Platform
              </button>
            </div>
          </div>
        </section>

        {/* WHY NOTENEST – CONTINUES HERO SHADING */}
        <section
          ref={aboutRef}
          className="relative py-14 bg-gradient-to-b from-slate-900 to-slate-900"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Why NoteNest Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-7 card-hover">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-300">
                  Making high-quality academic resources accessible to every
                  student through a trusted, student-powered ecosystem.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-7 card-hover">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  How It Works
                </h3>
                <p className="text-gray-300">
                  Upload notes, preview instantly, rate content and collaborate
                  to surface the best materials.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* BUILT FOR STUDENTS */}
        <section className="py-14 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Built for Students
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Instant Access",
                "Focused Design",
                "Quick Onboarding",
                "Structured Content",
                "Advanced Filters",
                "Inclusive Design",
              ].map((title, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 card-hover">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Built to support efficient, distraction-free learning.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLATFORM FEATURES */}
        <section ref={featuresRef} className="py-14 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Platform Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Unlimited Sharing",
                "Real-time Discussions",
                "Advanced Search",
                "Instant Previews",
                "Community Ratings",
                "Moderation System",
              ].map((f, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 card-hover">
                  <h3 className="text-white font-semibold mb-2">{f}</h3>
                  <p className="text-gray-300 text-sm">
                    Ensuring quality, trust and collaboration.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section ref={contactRef} className="py-14 bg-slate-950">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-7">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Contact Us
                </h3>
                <p className="text-gray-300 mb-2">
                  Feedback, ideas and collaboration are welcome.
                </p>
                <p className="text-blue-400">
                  2020icts012@vau.jfn.ac.lk
                </p>
              </div>

              <div className="glass-card rounded-2xl p-7">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Technical Support
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>User ID</li>
                  <li>Issue details</li>
                  <li>Screenshots</li>
                  <li>Device info</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer
          scrollToAbout={() => scrollTo(aboutRef)}
          scrollToFeatures={() => scrollTo(featuresRef)}
          scrollToContact={() => scrollTo(contactRef)}
        />
      </div>
    </>
  );
};

export default Home;
