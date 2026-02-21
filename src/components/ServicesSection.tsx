"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGraphql,
  SiFirebase,
  SiSupabase,
  SiGo,
  SiPhp,
  SiFlutter,
  SiRedis,
  SiTailwindcss,
  SiPython,
  SiExpo,
  SiPrisma,
  SiStripe,
  SiVercel,
  SiAmazonwebservices,
  SiDart,
  SiJavascript,
} from "react-icons/si";
import {
  Code,
  Smartphone,
  Server,
  Cloud,
  Zap,
  Users,
  CheckCircle,
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

  const techRow1 = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  ];

  const techRow2 = [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Dart", icon: SiDart, color: "#0175C2" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Stripe", icon: SiStripe, color: "#635BFF" },
    { name: "Expo", icon: SiExpo, color: "#ffffff" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
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
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Watermark */}
      <div className="pointer-events-none select-none absolute top-0 left-0 opacity-[0.07] -translate-x-1/4 -translate-y-1/4">
        <div className="relative w-96 h-96 overflow-hidden">
          <Image src="/logo_icon.png" alt="" fill className="object-contain scale-[3] origin-center" aria-hidden />
        </div>
      </div>
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

                <ul className="space-y-3">
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
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* ── Section Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />

      {/* Technologies We Master — full-width marquee */}
      <div
        style={{
          background: "linear-gradient(180deg, rgba(70,118,194,0.08) 0%, rgba(89,195,104,0.06) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
        className="py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies We <span className="gradient-text">Master</span>
          </h3>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We stay at the forefront of technology to deliver cutting-edge solutions
          </p>
        </motion.div>

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-6">
          <div
            className="flex gap-6 w-max"
            style={{ animation: "marquee 40s linear infinite", willChange: "transform" }}
          >
            {[...techRow1, ...techRow1].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 glass px-8 py-5 rounded-2xl border border-white/10 hover:border-white/30 hover:glass-strong transition-all duration-200 whitespace-nowrap flex-shrink-0 cursor-default"
                >
                  <Icon style={{ color: tech.color, fontSize: "2rem" }} className="flex-shrink-0" />
                  <span className="text-white font-semibold text-lg">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 w-max"
            style={{ animation: "marquee-reverse 40s linear infinite", willChange: "transform" }}
          >
            {[...techRow2, ...techRow2].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 glass px-8 py-5 rounded-2xl border border-white/10 hover:border-white/30 hover:glass-strong transition-all duration-200 whitespace-nowrap flex-shrink-0 cursor-default"
                >
                  <Icon style={{ color: tech.color, fontSize: "2rem" }} className="flex-shrink-0" />
                  <span className="text-white font-semibold text-lg">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Section Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
