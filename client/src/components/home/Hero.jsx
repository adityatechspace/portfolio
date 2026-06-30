

import {
    FaGithub,
    FaEnvelope,
    FaDownload,
    FaGlobe,
    FaLinkedin,
} from "react-icons/fa";

import profilePicture from "../../assets/profile-picture.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-32 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm text-blue-300">
                🚀 Available for Opportunities
              </span>

              <span className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300">
                🤖 AI Portfolio Assistant Available
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-black dark:text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Aditya Kumar
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
              Software Engineer · AI Developer · Full Stack Developer
            </h2>

            <p className="text-slate-400 leading-relaxed max-w-xl mb-10">
              I build intelligent software solutions using AI,
              Machine Learning, and modern web technologies.
              Passionate about solving real-world problems through
              scalable applications and automation.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-medium"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-xl border border-slate-700 flex bg-slate-800 dark:bg-slate-300 items-center gap-2"
              >
                <FaDownload />
                Resume
              </a>

              <a
                href="#ai-assistant"
                className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400"
              >
                Ask AI Assistant
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/adityatechspace"
                className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center hover:border-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/go-on-adityakumar"
                className="w-12 h-12 rounded-xl border border-blue-500 flex items-center justify-center hover:border-blue-400 transition text-blue-600"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:adityaproinfo@gmail.com"
                className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center hover:border-blue-500 transition"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://adityatechspace.github.io/"
                className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center hover:border-blue-500 transition"
              >
                <FaGlobe />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="relative">

  <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-cyan-500/10 rounded-full scale-125"></div>

  <img
    src={profilePicture}
    alt="Profile"
    className="relative w-[300px] md:w-[255px] rounded-3xl opacity-95 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
  />

  <div className="absolute bottom-5 right-5 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 shadow-lg">
    🟢 Open to Roles
  </div>

</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;