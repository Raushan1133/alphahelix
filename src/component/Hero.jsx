import React, { memo, useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import Caresoul1 from '../assets/about/carousel1.jpg'
import Caresoul2 from '../assets/about/carousel2.avif'
import Caresoul3 from '../assets/about/carousel3.webp'
// import { Counter } from "@/components/ui/counter"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react' // Import icons

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Global Reach",
      subtitle: "Serving clients across 50+ countries",
      image: Caresoul3,
      gradient: "from-indigo-600 to-indigo-800"
    },
    {
      title: "About Our Consultancy",
      subtitle: "Transforming businesses through innovative solutions",
      image: Caresoul1, // Replace with your image paths
      gradient: "from-blue-600 to-blue-800"
    },
    {
      title: "Expert Solutions",
      subtitle: "Driving success through strategic consulting",
      image: Caresoul2,
      gradient: "from-purple-600 to-purple-800"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${
              currentSlide === index ? 'visible' : 'invisible'
            }`}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover  bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className={`absolute inset-0  opacity-80`} />
            </div>

            {/* Content */}
            <div className="relative h-full">
              <div className="container mx-auto px-6 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 text-4xl md:text-6xl font-bold"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl"
                  >
                    {slide.subtitle}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-10 left-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-white/50 rounded-full p-2 text-white backdrop-blur-sm transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-10 right-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-white/50 rounded-full p-2 text-white backdrop-blur-sm transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-white w-4'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
