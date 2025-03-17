"use client"
import React from "react"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProcessSection from "@/components/process-section"
import TrustSection from "@/components/trust-section"
import FAQSection from "@/components/faq-section"
import PortfolioSection from "@/components/portfolio-section"
export default function Home() {
  return (
    <>
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }
      `}</style>
      <main className="min-h-screen bg-black text-white">
        <HeroSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <TrustSection />
        <FAQSection />
      </main>
    </>
  )
}

