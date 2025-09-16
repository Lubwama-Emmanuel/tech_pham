"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Server,
  Cloud,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Service } from "@/types";

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: "web-development",
      title: "Web Development",
      description:
        "We create modern, responsive websites that deliver exceptional user experiences and drive business growth.",
      icon: "Code",
      features: [
        "React & Next.js Applications",
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "E-commerce Solutions",
        "CMS Integration",
      ],
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications that work seamlessly on iOS and Android devices.",
      icon: "Smartphone",
      features: [
        "React Native Development",
        "iOS & Android Apps",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
    },
    {
      id: "backend-development",
      title: "Backend Development",
      description:
        "Robust server-side solutions and APIs that power your applications with scalability and security.",
      icon: "Server",
      features: [
        "Node.js & Express APIs",
        "Database Design",
        "Cloud Infrastructure",
        "Authentication Systems",
        "Real-time Features",
        "Microservices Architecture",
      ],
    },
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "React Native", category: "Mobile" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "GraphQL", category: "API" },
  ];

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

  const getIcon = (iconName: string) => {
    const icons = {
      Code,
      Smartphone,
      Server,
    };
    return icons[iconName as keyof typeof icons] || Code;
  };

  return (
    <section id="services" className="py-20">
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
            <Zap className="h-4 w-4 text-indigo-400" />
            <span className="text-sm font-medium text-white/90">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What We <span className="gradient-text">Build</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            From concept to deployment, we provide end-to-end development
            services that transform your ideas into powerful digital solutions.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service) => {
            const IconComponent = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border-white/20 hover:glass-strong hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 glass rounded-2xl mb-6 border border-white/20">
                  <IconComponent className="h-8 w-8 text-indigo-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-white/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full glass-strong text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 border border-white/30 hover:border-white/50 transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-strong rounded-3xl p-8 md:p-12 border border-white/20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We <span className="gradient-text">Master</span>
            </h3>
            <p className="text-white/80 text-lg">
              We stay at the forefront of technology to deliver cutting-edge
              solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-4 text-center border border-white/10 hover:glass-strong hover:border-white/20 transition-all duration-200"
              >
                <div className="text-lg font-semibold text-white mb-1">
                  {tech.name}
                </div>
                <div className="text-sm text-white/60">{tech.category}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            Our <span className="gradient-text">Process</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We understand your vision, goals, and requirements through detailed consultation.",
                icon: Users,
              },
              {
                step: "02",
                title: "Design",
                description:
                  "We create wireframes, prototypes, and design systems that align with your brand.",
                icon: Code,
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We build your solution using best practices and modern development methodologies.",
                icon: Server,
              },
              {
                step: "04",
                title: "Deployment",
                description:
                  "We deploy your solution and provide ongoing support and maintenance.",
                icon: Cloud,
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                variants={itemVariants}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold gradient-text mb-4">
                    {process.step}
                  </div>
                  <process.icon className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {process.title}
                  </h4>
                  <p className="text-white/80">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-orange-500 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
