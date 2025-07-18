"use client"
import React from "react"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProcessSection from "@/components/process-section"
import TrustSection from "@/components/trust-section"
import FAQSection from "@/components/faq-section"
import PortfolioSection from "@/components/portfolio-section"
import ServicesSection from "@/components/services-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import ServiceModelSection from "@/components/service-model-section"

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
        <ServiceModelSection />
        <ProcessSection />
        <PortfolioSection />
        <TeamSection />
        {/* <TestimonialsSection /> */}
        <TrustSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  )
}

