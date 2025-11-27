"use client";

import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CEO",
      company: "Labour Experts",
      content:
        "Lubech transformed our vision into a powerful platform. Their expertise in web development and attention to detail exceeded our expectations. The team delivered on time and within budget.",
      rating: 5,
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Founder",
      company: "Glam n' Go",
      content:
        "Working with Lubech was a game-changer. They built our e-commerce app with such professionalism and care. Our app has over 5K downloads and growing. Highly recommend!",
      rating: 5,
    },
    {
      id: "3",
      name: "James Ochen",
      role: "Product Manager",
      company: "Tuwe Technologies",
      content:
        "The team at Lubech understood our community management needs perfectly. They created a robust platform that serves thousands of users. Their backend expertise is outstanding.",
      rating: 5,
    },
    {
      id: "4",
      name: "Emily Rodriguez",
      role: "Director",
      company: "Ordnancity",
      content:
        "Lubech's technical skills and creative approach helped us build a cutting-edge city management platform. Their support throughout the project was exceptional.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

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
    <section id="testimonials" className="py-20">
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
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-white/90">Client Reviews</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
            about working with Lubech.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4 md:px-8"
                >
                  <motion.div
                    variants={itemVariants}
                    className="glass-strong rounded-3xl p-8 md:p-12 border border-white/30 text-center"
                  >
                    <Quote className="h-12 w-12 text-indigo-400 mx-auto mb-6 opacity-50" />
                    
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                      &quot;{testimonial.content}&quot;
                    </p>

                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {testimonial.name}
                      </h4>
                      <p className="text-indigo-400 font-semibold mb-1">
                        {testimonial.role}
                      </p>
                      <p className="text-white/70">{testimonial.company}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-strong p-3 rounded-full border border-white/30 hover:border-white/50 transition-all duration-200 text-white z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-strong p-3 rounded-full border border-white/30 hover:border-white/50 transition-all duration-200 text-white z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 glass-strong border border-white/30"
                    : "w-2 glass border border-white/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
