"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Backend Systems", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const contactItems = [
    {
      icon: FaEnvelope,
      label: "info@lubech.tech",
      href: "mailto:info@lubech.tech",
      color: "#4676C2",
    },
    {
      icon: FaPhone,
      label: "+44 7572 964620",
      href: "tel:+447572964620",
      color: "#59C368",
    },
    {
      icon: FaMapMarkerAlt,
      label: "28 Foxwell Square NN35AT Northampton",
      href: "https://maps.google.com/?q=28 Foxwell Square NN35AT Northampton",
      color: "#f59e0b",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp Us",
      href: "https://wa.me/447572964620",
      color: "#25D366",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/company/lubech",
      color: "#0A66C2",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/447572964620",
      color: "#25D366",
    },
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <footer className="glass-strong text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <div className="relative h-20 w-56 overflow-hidden">
                <Image
                  src="/logo_footer.png"
                  alt="Lubech"
                  fill
                  className="object-contain scale-[1.5] origin-center"
                />
              </div>
            </a>

            <p className="text-white/70 mb-7 leading-relaxed text-sm max-w-sm">
              We are a passionate team of developers, designers, and innovators
              dedicated to transforming your ideas into digital reality — from
              web apps to mobile and backend systems.
            </p>

            <div className="space-y-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-3 group"
                >
                  <item.icon
                    className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: item.color }}
                  />
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-200">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold mb-5 text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold mb-5 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/10 py-7 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p variants={itemVariants} className="text-white/50 text-sm">
            © {new Date().getFullYear()} Lubech. All rights reserved.
          </motion.p>

          {/* Social icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            {socialLinks.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 glass rounded-lg border border-white/10 hover:border-white/25 transition-all duration-200"
              >
                <s.icon className="h-4 w-4" style={{ color: s.color }} aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to top */}
          <motion.button
            variants={itemVariants}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200"
          >
            Back to top
            <FaArrowUp className="h-3.5 w-3.5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
