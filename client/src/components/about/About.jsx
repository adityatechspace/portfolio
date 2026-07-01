import {
  FiBook,
  FiCode,
  FiCpu,
  FiAward,
} from "react-icons/fi";

function About() {
  const roadmap = [
    {
      year: "2022",
      title: "Started Programming Journey",
      description:
        "Built strong foundations in programming, problem solving, and software development.",
      icon: <FiBook />,
    },

    {
      year: "2023",
      title: "Full Stack Development",
      description:
        "Learned React, Node.js, Express, and modern web application architecture.",
      icon: <FiCode />,
    },

    {
      year: "2024",
      title: "AI & Machine Learning",
      description:
        "Worked on AI-powered solutions, automation systems, and intelligent applications.",
      icon: <FiCpu />,
    },

    {
      year: "2025",
      title: "Professional Projects",
      description:
        "Delivered production-ready applications and expanded expertise in cloud and AI engineering.",
      icon: <FiAward />,
    },
  ];

  return (
    <section
      id="about"
      className="py-32 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}

 <div className="relative mb-20">

    <div className="
    absolute
    -left-20
    top-0
    h-56
    w-56
    rounded-full
    bg-blue-500/10
    blur-[110px]
    "></div>

    <div className="relative">

        <div className="inline-flex items-center gap-3">

            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>

            <span className="
            uppercase
            tracking-[0.35em]
            text-xs
            font-semibold
            text-blue-400/80
            ">
            ABOUT ME
            </span>

        </div>

        <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-extrabold
        leading-tight

        bg-gradient-to-r
        from-white
        via-slate-100
        to-slate-400

        bg-clip-text
        text-transparent
        ">
               My Journey

        </h2>

        <p className="
        mt-6
        max-w-xl
        text-lg
        leading-8
        text-slate-400
        ">
             A roadmap of my growth as a developer,
            AI enthusiast, and problem solver.

        </p>

        <div className="
        mt-8
        h-1
        w-28
        rounded-full
        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-cyan-500
        "/>

    </div>

</div>

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-slate-800 hidden md:block"></div>

          <div className="space-y-12">

            {roadmap.map((item, index) => (
              <div
                key={index}
                className="flex gap-8 items-start"
              >
                <div className="hidden md:flex w-12 h-12 rounded-full bg-blue-600 items-center justify-center text-xl shrink-0 z-10">
                  {item.icon}
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex-1">
                  <span className="text-blue-400 font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-semibold mt-2 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;