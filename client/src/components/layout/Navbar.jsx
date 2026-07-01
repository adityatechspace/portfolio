import { useState } from "react";
import {
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
  FiDownload,
} from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">

        <div className="rounded-2xl border border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-xl">

          <div className="px-6 h-20 flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
                AK
              </div>

              <div className="hidden sm:block">
                <h1 className="font-semibold text-black dark:text-white">
                  Aditya Kumar
                </h1>

                <p className="text-xs text-slate-500">
                  AI Engineer
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">

              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="relative text-sm font-medium text-slate-700 dark:text-slate-300 transition hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              ))}

              {/* AI Assistant */}
              <a
                href="#ai-assistant"
                className="group flex items-center gap-2 rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-500/10 to-blue-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition-all duration-300 hover:scale-105 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/20"
              >
                <BsStars className="animate-pulse" />
                AI Assistant
              </a>

            </nav>

            {/* Right */}
            <div className="flex items-center gap-3">

              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                className="hidden md:flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
              >
                <FiDownload />
                Resume
              </a>

              {/* Theme */}
              <button
                onClick={toggleTheme}
                className="w-11 h-11 rounded-full border border-slate-700 bg-slate-900/40 backdrop-blur-md flex items-center justify-center transition hover:border-blue-500 hover:rotate-180 duration-500"
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>

              {/* Mobile Menu */}
              <button
                className="lg:hidden w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>

            </div>

          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden border-t border-slate-800">

              <div className="flex flex-col gap-5 p-6">

                {navLinks.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-slate-300"
                  >
                    {item}
                  </a>
                ))}

                <a
                  href="#ai-assistant"
                  className="rounded-xl border border-violet-500 bg-violet-500/10 px-4 py-3 text-violet-300"
                  onClick={() => setMenuOpen(false)}
                >
                  ✨ AI Assistant
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="rounded-xl border border-slate-700 px-4 py-3"
                >
                  ⬇ Download Resume
                </a>

              </div>

            </div>
          )}

        </div>

      </header>
    </>
  );
}

export default Navbar;