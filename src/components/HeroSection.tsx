"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Server, Sparkles } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute top-20 left-10 w-20 h-20 glass rounded-full opacity-60 floating"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
          className="absolute top-40 right-20 w-16 h-16 glass rounded-full opacity-60 floating"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-40 left-20 w-24 h-24 glass rounded-full opacity-60 floating"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "0.5s" }}
          className="absolute bottom-20 right-10 w-12 h-12 glass rounded-full opacity-60 floating"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8 border border-white/20"
          >
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-white/90">
              Professional Development Services
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Transform Your Ideas</span>
            <br />
            <span className="text-white">Into Digital Reality</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We build stunning websites, cross-platform mobile applications, and
            robust backend systems that drive your business forward.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group glass-strong text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 border border-white/30 hover:border-white/50 transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass text-white/90 px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:glass-strong hover:border-white/40 transition-all duration-300"
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Services Preview */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Code,
                title: "Web Development",
                description:
                  "Modern, responsive websites built with cutting-edge technologies",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                description:
                  "Cross-platform mobile applications for iOS and Android",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
              },
              {
                icon: Server,
                title: "Backend Systems",
                description:
                  "Scalable APIs and server infrastructure for your applications",
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-6 rounded-2xl border border-white/20 hover:glass-strong hover:border-white/30 transition-all duration-300"
              >
                <service.icon
                  className={`h-12 w-12 ${service.color} mb-4 mx-auto`}
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "10+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "3+", label: "Years Experience" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
