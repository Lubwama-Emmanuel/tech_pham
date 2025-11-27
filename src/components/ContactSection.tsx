"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  User,
  Building,
  FileText,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return "";
      case "project":
        if (!value.trim()) return "Project type is required";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {};
    const newErrors: Record<string, string> = {};

    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setTouched(allTouched);
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        message: "",
        budget: "",
      });
      setErrors({});
      setTouched({});
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@lubech.tech",
      description: "Send us an email anytime",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Come say hello at our office",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Available 24/7",
      description: "Get instant support",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
    "Not sure yet",
  ];

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "Backend System",
    "E-commerce Platform",
    "API Development",
    "UI/UX Design",
    "Full-stack Solution",
    "Other",
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
    <section id="contact" className="py-20">
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
            <MessageCircle className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-white/90">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let&apos;s <span className="gradient-text">Work Together</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Ready to bring your ideas to life? Get in touch with us and
            let&apos;s discuss how we can help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8"
            >
              Get in Touch
            </motion.h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start space-x-4 p-4 rounded-xl glass hover:glass-strong transition-all duration-200 border border-white/10"
                >
                  <div
                    className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-white font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-white/70 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-indigo-400" />
                <h4 className="text-lg font-semibold text-white">
                  Business Hours
                </h4>
              </div>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Start Your Project
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h4>
                  <p className="text-white/80">
                    We&apos;ve received your message and will get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                          errors.name ? "text-red-400" : "text-white/40"
                        }`} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className={`w-full pl-10 pr-4 py-3 glass rounded-lg border transition-all duration-200 text-white placeholder-white/40 ${
                            errors.name
                              ? "border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                              : "border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && touched.name && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <AlertCircle className="h-5 w-5 text-red-400" />
                          </div>
                        )}
                      </div>
                      {errors.name && touched.name && (
                        <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                          errors.email ? "text-red-400" : "text-white/40"
                        }`} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className={`w-full pl-10 pr-4 py-3 glass rounded-lg border transition-all duration-200 text-white placeholder-white/40 ${
                            errors.email
                              ? "border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                              : "border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && touched.email && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <AlertCircle className="h-5 w-5 text-red-400" />
                          </div>
                        )}
                      </div>
                      {errors.email && touched.email && (
                        <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className="w-full pl-10 pr-4 py-3 glass rounded-lg border border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-200 text-white placeholder-white/40"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-200 text-white bg-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="project"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Project Type *
                    </label>
                    <div className="relative">
                      <select
                        id="project"
                        name="project"
                        required
                        value={formData.project}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 glass rounded-lg border transition-all duration-200 text-white bg-transparent ${
                          errors.project
                            ? "border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                            : "border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                        }`}
                      >
                        <option value="" className="bg-gray-900">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-gray-900">
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.project && touched.project && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <AlertCircle className="h-5 w-5 text-red-400" />
                        </div>
                      )}
                    </div>
                    {errors.project && touched.project && (
                      <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.project}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Project Details *
                    </label>
                    <div className="relative">
                      <FileText className={`absolute left-3 top-3 h-5 w-5 ${
                        errors.message ? "text-red-400" : "text-white/40"
                      }`} />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full pl-10 pr-4 py-3 glass rounded-lg border transition-all duration-200 resize-none text-white placeholder-white/40 ${
                          errors.message
                            ? "border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                            : "border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                        }`}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                      {errors.message && touched.message && (
                        <div className="absolute right-3 top-3">
                          <AlertCircle className="h-5 w-5 text-red-400" />
                        </div>
                      )}
                    </div>
                    {errors.message && touched.message && (
                      <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full glass-strong text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 border border-white/30 hover:border-white/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
