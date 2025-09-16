"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  Heart,
  Linkedin,
  Twitter,
  Github,
  Code,
  CheckCircle,
  Star,
} from "lucide-react";
import { TeamMember } from "@/types";

const AboutSection = () => {
  const teamMembers: TeamMember[] = [
    {
      id: "ceo",
      name: "Emmanuel Lubwama",
      role: "CEO & Lead Developer",
      image: "/api/placeholder/300/300",
      bio: "Full-stack developer with 5+ years of experience building scalable web and mobile applications. Passionate about creating innovative solutions that drive business growth.",
      social: {
        linkedin: "https://linkedin.com/in/emmanuel-lubwama",
        twitter: "https://twitter.com/emmanuel_lubwama",
        github: "https://github.com/emmanuel-lubwama",
      },
    },
    {
      id: "cto",
      name: "Sarah Johnson",
      role: "CTO & Backend Specialist",
      image: "/api/placeholder/300/300",
      bio: "Backend architect with expertise in microservices, cloud infrastructure, and database design. Focused on building robust and scalable systems.",
      social: {
        linkedin: "https://linkedin.com/in/sarah-johnson",
        github: "https://github.com/sarah-johnson",
      },
    },
    {
      id: "designer",
      name: "Michael Chen",
      role: "UI/UX Designer",
      image: "/api/placeholder/300/300",
      bio: "Creative designer with a passion for user-centered design. Specializes in creating intuitive and beautiful user experiences across web and mobile platforms.",
      social: {
        linkedin: "https://linkedin.com/in/michael-chen",
        twitter: "https://twitter.com/michael_chen",
      },
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We never compromise on quality. Every line of code, every design element, and every user interaction is crafted with precision and care.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Our clients are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We stay ahead of the curve by embracing new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "We love what we do, and it shows in our work. Our passion for technology drives us to create exceptional digital experiences.",
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Delivered", icon: Code },
    { number: "100%", label: "Client Satisfaction", icon: Star },
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Heart },
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
    },
  };

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <Users className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-white/90">About Us</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Meet the <span className="gradient-text">Team</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            We are a passionate team of developers, designers, and innovators
            dedicated to transforming your ideas into digital reality.
          </motion.p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-6">
              Our <span className="gradient-text">Story</span>
            </h3>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Founded in 2021, TechGeeks started as a passionate team of
                developers with a mission to create exceptional digital
                experiences that transform businesses and communities across
                Uganda and beyond.
              </p>
              <p>
                Over the years, we&apos;ve successfully delivered over 10
                projects including web platforms like Labour Experts and
                Ordnancity, and mobile applications like Glam n&apos; Go, Tuwe,
                and Easy Gas. Our work spans from e-commerce solutions to
                community management platforms, helping businesses and
                communities embrace digital transformation.
              </p>
              <p>
                Today, we continue to push the boundaries of what&apos;s
                possible in web and mobile development, always staying ahead of
                the latest technologies and trends while maintaining our
                commitment to quality and client satisfaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-6 border border-white/20 text-center"
                >
                  <IconComponent className="h-8 w-8 text-indigo-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Team Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Our <span className="gradient-text">Team</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border-white/20 hover:glass-strong hover:border-white/30 transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 glass rounded-full mx-auto mb-6 flex items-center justify-center border border-white/20">
                  <Users className="h-12 w-12 text-white/60" />
                </div>

                <h4 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h4>

                <p className="text-indigo-400 font-semibold mb-4">
                  {member.role}
                </p>

                <p className="text-white/80 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass text-indigo-400 rounded-full border border-white/20 hover:glass-strong hover:border-white/30 transition-all duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass text-indigo-400 rounded-full border border-white/20 hover:glass-strong hover:border-white/30 transition-all duration-200"
                    >
                      <Twitter className="h-5 w-5" />
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass text-white/80 rounded-full border border-white/20 hover:glass-strong hover:border-white/30 transition-all duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Our <span className="gradient-text">Values</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-6 border border-white/20 hover:glass-strong hover:border-white/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 glass rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/20">
                  <value.icon className="h-8 w-8 text-indigo-400" />
                </div>

                <h4 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h4>

                <p className="text-white/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 glass-strong rounded-3xl p-8 md:p-12 border border-white/20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">TechGeeks</span>?
            </h3>
            <p className="text-white/80 text-lg">
              We combine technical expertise with creative vision to deliver
              exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Full-stack development expertise",
              "Modern technology stack",
              "Agile development methodology",
              "24/7 support and maintenance",
              "Scalable and secure solutions",
              "Competitive pricing and timelines",
            ].map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                <span className="text-white/90 font-medium">{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
