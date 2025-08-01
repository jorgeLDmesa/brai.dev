"use client"
import React from "react"
import HeroSection from "@/components/hero-section"
import ClientsCarousel from "@/components/clients-carousel"
import FreeAuditSection from "@/components/free-audit-section"
import ServiceModelsSection from "@/components/service-models-section"
import ProcessSection from "@/components/process-section"
import PortfolioSection from "@/components/portfolio-section"
import TeamSection from "@/components/team-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }
      `}</style>
      <main className="min-h-screen bg-black text-white">
        {/* 1. Hero Section */}
        <HeroSection />
        
        {/* 2. Carrusel de Clientes */}
        <ClientsCarousel />
        
        {/* 3. Auditoría Gratuita */}
        <FreeAuditSection />
        
        {/* 4. Modelos de Servicio */}
        <ServiceModelsSection />
        
        {/* 5. Proceso de Trabajo */}
        <ProcessSection />
        
        {/* 6. Casos de Éxito/Portfolio */}
        <PortfolioSection />
        
        {/* 7. Nuestro Equipo */}
        <TeamSection />
        
        {/* 8. Testimoniales */}
        <TestimonialsSection />
        
        {/* 9. FAQ */}
        <FAQSection />
        
        {/* 10. Contacto */}
        <ContactSection />
      </main>
    </>
  )
}

