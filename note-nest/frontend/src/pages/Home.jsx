// Home.jsx
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  const handleGetStarted = () => navigate("/register");

  return (
    <div className="bg-[#f8fafc] text-gray-800 min-h-screen flex flex-col">
      <Header
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToFeatures={() => scrollTo(featuresRef)}
        scrollToContact={() => scrollTo(contactRef)}
      />

      {/* ===== HERO ===== */}
      <main className="flex-grow flex items-center justify-center px-6 text-black py-16">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-[#2094F3]">NoteNest</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your ultimate platform for sharing and accessing study resources.
            Join thousands of students to collaborate and succeed!
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-[#2094F3] hover:bg-[#1b7cd0] text-white px-8 py-3 rounded-md text-lg font-medium transition"
          >
            Get Started
          </button>
        </div>
      </main>

      {/* ===== ABOUT ===== */}
      <section ref={aboutRef} className="py-16 px-6 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-10">
            About NoteNest
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Our Mission",
                desc: "We empower students to share and access knowledge freely, creating a collaborative learning environment for everyone."
              },
              {
                title: "How It Works",
                desc: "Upload and explore notes, PDFs, and videos organized by year and subject. Preview and interact to build your digital library."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#e0f2fe] p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-3 text-[#1e40af]">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section
        ref={featuresRef}
        className="py-16 px-6 bg-gradient-to-b from-[#e0f2fe] to-white scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-12">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📚", title: "Resource Sharing", desc: "Upload and download notes, PDFs, and videos for any subject or year." },
              { icon: "💬", title: "Interactive Learning", desc: "Comment and collaborate with peers for deeper understanding." },
              { icon: "🗂️", title: "Smart Organization", desc: "Filter by subject, year, or type to quickly find what you need." },
              { icon: "👁️", title: "Preview Before Download", desc: "Check relevance with quick previews before saving resources." },
              { icon: "⭐", title: "Ratings & Likes", desc: "Highlight the best content by liking and rating." },
              { icon: "🔒", title: "Secure Platform", desc: "A trusted community ensuring safe and verified resources." },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-1 text-[#1e40af]">{f.title}</h3>
                <p className="text-gray-700 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section ref={contactRef} className="py-16 px-6 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-10">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#e0f2fe] p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3 text-[#1e40af]">Get In Touch</h3>
              <p className="text-gray-700 mb-5">
                Have questions or suggestions? We’d love to hear from you.
              </p>
              <p className="mb-2">📧 Email:
                <a
                  href="mailto:2020icts12@vau.jfn.ac.lk"
                  className="ml-1 text-[#2563eb] hover:underline"
                >
                  2020icts12@vau.jfn.ac.lk
                </a>
              </p>
              <p>🏛️ Faculty of Technology, University of Jaffna</p>
            </div>

            <div className="bg-[#e0f2fe] p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3 text-[#1e40af]">Technical Support</h3>
              <p className="text-gray-700 mb-3">
                For faster assistance, please include:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Your student ID</li>
                <li>A detailed description of the issue</li>
                <li>Screenshots (if applicable)</li>
                <li>Your device & browser details</li>
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
  );
};

export default Home;
