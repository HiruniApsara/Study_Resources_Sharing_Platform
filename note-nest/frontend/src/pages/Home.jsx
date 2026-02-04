// Home.jsx
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundImg from "../assets/background.jpg";
import whiteArrowIcon from "../assets/white_arrow_icon.svg"; // ← added here

const Home = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleGetStarted = () => navigate("/register");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        :root {
          --primary: #1d4ed8;
          --primary-dark: #1e40af;
        }

        * {
          font-family: 'Inter', system-ui, sans-serif;
        }

        @keyframes shine {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .shine-bg {
          background: conic-gradient(from 0deg, #00F5FF, #000, #000, #00F5FF, #000, #000, #000, #00F5FF);
          background-size: 300% 300%;
          animation: shine 6s ease-out infinite;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 35px rgba(0,0,0,0.08);
        }

        .arrow-slide {
          transition: transform 0.3s ease;
        }

        button:hover .arrow-slide {
          transform: translateX(4px);
        }
      `}</style>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header
          scrollToAbout={() => scrollTo(aboutRef)}
          scrollToFeatures={() => scrollTo(featuresRef)}
          scrollToContact={() => scrollTo(contactRef)}
        />

        {/* Hero */}
        <section className="relative pt-14 pb-20 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={backgroundImg}
              alt="Background"
              className="w-full h-full object-cover brightness-[0.45] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Your Knowledge Finds a{" "}
                <span className="bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                  Home
                </span>
                <br className="hidden sm:block" /> in NoteNest
              </h1>

              <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Collaborate, discover, and elevate your learning with the most vibrant
                student-powered resource hub.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
                {/* Shiny animated Get Started button with arrow */}
                <div className="shine-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100 shadow-lg">
                  <button
                    onClick={handleGetStarted}
                    className="px-9 py-3.5 text-sm md:text-base font-medium text-white bg-gray-900 rounded-full min-w-[220px] flex items-center justify-center gap-2.5 group"
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
                  className="px-9 py-3.5 text-sm md:text-base font-medium border border-white/60 text-white rounded-full hover:bg-white/10 transition duration-300 min-w-[200px]"
                >
                  Explore Features
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why NoteNest Matters */}
        <section ref={aboutRef} className="py-14 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
              Why NoteNest Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-7 lg:gap-10">
              {[
                {
                  title: "Our Mission",
                  desc: "Making high-quality study resources accessible to every student — created by students, for students. No barriers.",
                },
                {
                  title: "How It Works",
                  desc: "Upload notes, past papers, summaries. Browse by course and year. Preview instantly. Rate and collaborate.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm card-hover"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built for Students */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
              Built for Students
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: "⚡", title: "Instant Access", desc: "Find notes in seconds with fast previews and search." },
                { icon: "🧠", title: "Clean Interface", desc: "Modern, focused design that makes studying enjoyable." },
                { icon: "🚀", title: "Easy Start", desc: "Sign up instantly — upload or download in one click." },
                { icon: "📂", title: "Smart Organization", desc: "Clear structure by year, subject and semester." },
                { icon: "🔍", title: "Powerful Tools", desc: "Filters, sorting, bookmarks — made for your flow." },
                { icon: "♿", title: "Inclusive", desc: "High contrast, keyboard support, screen reader ready." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm card-hover"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section ref={featuresRef} className="py-14 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
              Platform Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: "📚", title: "Unlimited Sharing", desc: "Any file type — PDFs, images, videos, scans." },
                { icon: "💬", title: "Real-time Discussion", desc: "Comments, replies and mentions on every resource." },
                { icon: "🔎", title: "Advanced Search", desc: "Filter by year, subject, rating, recency." },
                { icon: "👁️", title: "Instant Previews", desc: "View content without downloading." },
                { icon: "⭐", title: "Community Ratings", desc: "Sort by quality — best resources rise." },
                { icon: "🛡️", title: "Moderation", desc: "Report system keeps content safe and relevant." },
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm card-hover"
                >
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-700 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section ref={contactRef} className="py-14 bg-gray-50 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
              Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-7">
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-5">
                  Questions, suggestions or feedback? We’re here to listen.
                </p>
                <p className="text-base">
                  📧 <a href="mailto:2020icts012@vau.jfn.ac.lk" className="text-blue-600 hover:underline">
                    2020icts012@vau.jfn.ac.lk
                  </a>
                </p>
                <p className="text-base mt-2">
                  🏛️ Faculty of Technology, University of Jaffna
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Support</h3>
                <p className="text-gray-600 mb-5">
                  To help us resolve your issue faster, please provide:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-600 text-sm">
                  <li>Your student/faculty ID</li>
                  <li>Detailed description of the issue</li>
                  <li>Screenshots (if possible)</li>
                  <li>Device, OS & browser info</li>
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