"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Smartphone,
  Server,
  Filter,
} from "lucide-react";
import { Project } from "@/types";
import { useState } from "react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: "labour-experts",
      title: "Labour Experts Platform",
      description:
        "A comprehensive platform connecting skilled workers with employers, featuring job matching, skill verification, and secure payment processing.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
      category: "web",
      liveUrl: "https://labour-experts.vercel.app",
    },
    {
      id: "mashongatea",
      title: "Mashongatea Website",
      description:
        "Professional business website showcasing services and portfolio with modern design, responsive layout, and optimized performance.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      category: "web",
      liveUrl: "https://www.mashongatea.com",
    },
    {
      id: "ordnancity",
      title: "Ordnancity Platform",
      description:
        "Advanced city management platform with real-time monitoring, citizen services, and administrative tools for urban development.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
      category: "web",
      liveUrl: "https://ordnancity.vercel.app",
    },
    {
      id: "glam-n-go",
      title: "Glam n' Go - E-commerce App",
      description:
        "Cross-platform shopping app for women, men, and kids products with secure payments, real-time delivery tracking, and user-friendly interface.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React Native",
        "Firebase",
        "Stripe",
        "Node.js",
        "MongoDB",
      ],
      category: "mobile",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.kenyana.glamngo",
      githubUrl: "https://apps.apple.com/ug/app/glam-n-go/id6503872122",
    },
    {
      id: "tuwe-app",
      title: "Tuwe - Community Management",
      description:
        "Revolutionary community management platform for Ugandan neighborhoods, featuring fee collections, property listings, and local services integration.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Mobile Money",
        "USSD",
      ],
      category: "mobile",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.emmanuellubwama.tuwe",
    },
    {
      id: "easy-gas",
      title: "Easy Gas - Delivery App",
      description:
        "Convenient cooking gas delivery app with seamless ordering, real-time tracking, and reliable service across Uganda.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React Native",
        "Firebase",
        "Google Maps",
        "Node.js",
        "MongoDB",
      ],
      category: "mobile",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.easygas.mobile.app",
      githubUrl: "https://apps.apple.com/ug/app/easy-gas/id6738344020",
    },
    {
      id: "cafe-jafn",
      title: "Cafe Jaf'n - Food Ordering",
      description:
        "Modern cafe ordering app with menu management, online payments, and delivery tracking for seamless dining experience.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React Native",
        "Firebase",
        "Stripe",
        "Node.js",
        "MongoDB",
      ],
      category: "mobile",
      liveUrl: "https://apps.apple.com/ug/app/cafe-jafn/id6746074084",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: Filter },
    { id: "web", label: "Web Apps", icon: Code },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "backend", label: "Backend", icon: Server },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return Code;
      case "mobile":
        return Smartphone;
      case "backend":
        return Server;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "web":
        return "glass text-indigo-300 border border-indigo-400/30";
      case "mobile":
        return "glass text-orange-300 border border-orange-400/30";
      case "backend":
        return "glass text-emerald-300 border border-emerald-400/30";
      default:
        return "glass text-white/70 border border-white/20";
    }
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6 border border-white/20"
          >
            <Code className="h-4 w-4 text-orange-400" />
            <span className="text-sm font-medium text-white/90">
              Our Portfolio
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Explore our portfolio of successful projects that showcase our
            expertise in web development, mobile applications, and backend
            systems.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <motion.button
                key={filter.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "glass-strong text-white border border-white/30"
                    : "glass text-white/80 border border-white/10 hover:glass-strong hover:border-white/20"
                }`}
              >
                <IconComponent className="h-4 w-4" />
                <span>{filter.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl border border-white/20 hover:glass-strong hover:border-white/30 transition-all duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-orange-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CategoryIcon className="h-16 w-16 text-white/40" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 glass text-white/80 rounded-full text-sm font-medium border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 glass-strong text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 border border-white/30 hover:border-white/50 transition-all duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>
                          {project.category === "mobile"
                            ? "Download"
                            : "View Site"}
                        </span>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 glass text-white/90 py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 border border-white/20 hover:glass-strong hover:border-white/40 transition-all duration-200"
                      >
                        <Github className="h-4 w-4" />
                        <span>
                          {project.category === "mobile" ? "iOS App" : "Code"}
                        </span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="glass-strong rounded-3xl p-8 md:p-12 text-white border border-white/30"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can bring your ideas to life with our
              expertise and passion for development.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="glass text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:glass-strong hover:border-white/50 transition-all duration-200"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
