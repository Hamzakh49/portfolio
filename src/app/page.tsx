"use client";

import { motion } from "framer-motion";
import { Mail, Github, ExternalLink, Download } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export default function Portfolio() {
  const projects = [
    {
      title: "Statex Online Monitoring",
      description:
        "Designed responsive dashboards with interactive graphs to monitor ad performance metrics like engagements, media values and reach. Implemented data fetching and filtering for seamless insights.",
      stack: "Next.js, Tailwind CSS, TypeScript, Node.js, MUI, Docker, Shadcn",
    },
    {
      title: "ERP System Web Platform",
      description:
        "Built modular components for dashboards, reports, and workflows using React.js. Designed RESTful APIs to handle complex data for inventory, finance, and HR modules with customizable workflows.",
      stack: "React, Node.js, Express.js, MongoDB, Tailwind CSS",
    },
    {
      title: "Neo Motors Website",
      description:
        "Developed a custom responsive website for a car manufacturer. Implemented animations, transitions, and SEO optimization for enhanced user experience.",
      stack: "React, Node.js, Tailwind CSS",
      link: "https://neomotors.ma/",
    },
  ];

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Docker",
    "REST APIs",
    "Git",
  ];

  const experience = [
    {
      company: "EVEAD GROUP",
      role: "Front-End Engineer",
      duration: "2024 – 2025",
      description:
        "",
    },
    {
      company: "UX Centers",
      role: "Web Developer",
      duration: "2023 – 2024",
      description:
        "",
    },
    {
      company: "I-ETERIA",
      role: "Full-Stack Developer",
      duration: "2022",
      description:
        "",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-16 bg-linear-to-b from-gray-900 to-gray-950">
      {/* Header / Hero */}
      <header className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-300"
        >
          Hamza Kharchi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 text-lg md:text-xl mb-6"
        >
          Front-End & Full-Stack Developer | React • Next.js • Node.js
        </motion.p>

        {/* Download CV Button */}
        <motion.a
          href="/Resume_Hamza_Kharchi.pdf"
          download
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-600 to-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:from-blue-500 hover:to-cyan-500 transition-all"
        >
          <Download className="h-4 w-4" /> Download CV
        </motion.a>
      </header>

      {/* About Me Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-center text-cyan-300"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 text-center leading-relaxed text-base md:text-lg"
        >
          I’m a passionate front-end and full-stack developer who loves turning
          complex ideas into sleek, functional, and performant web applications.
          I’ve worked on diverse projects — from analytics dashboards and ERP
          systems to modern websites — always focusing on user experience,
          clean architecture, and maintainable code.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center text-cyan-300"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm hover:border-cyan-400 hover:text-cyan-300 transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center text-cyan-300"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white">
                {exp.role} –{" "}
                <span className="text-cyan-400">{exp.company}</span>
              </h3>
              <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center text-cyan-300"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="bg-gray-800/70 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-cyan-400/20 hover:shadow-lg">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      {project.stack}
                    </p>
                  </div>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                    </motion.a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-cyan-300">Let’s Connect</h2>
        <div className="flex justify-center flex-wrap gap-4">
          <Button className="bg-linear-to-r from-cyan-600 to-blue-600 border-none hover:from-blue-500 hover:to-cyan-500">
            <Mail className="mr-2 h-4 w-4" /> hamza.kharchi98@gmail.com
          </Button>
          <Button className="bg-transparent border-gray-600 text-white hover:border-cyan-400 hover:text-cyan-300">
            <Github className="mr-2 h-4 w-4" /> github.com/Hamzakh49
          </Button>
        </div>
      </motion.footer>
    </div>
  );
}
