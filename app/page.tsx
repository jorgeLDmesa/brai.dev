"use client"
import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"

// Lazy load non-critical sections
const ClientsCarousel = dynamic(() => import("@/components/clients-carousel"), {
  loading: () => <div className="h-96 bg-zinc-950 animate-pulse" />
})

const FreeAuditSection = dynamic(() => import("@/components/free-audit-section"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const ServiceModelsSection = dynamic(() => import("@/components/service-models-section"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const ProcessSection = dynamic(() => import("@/components/process-section"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const PortfolioSection = dynamic(() => import("@/components/portfolio-section"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const TeamSection = dynamic(() => import("@/components/team-section"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const FAQSection = dynamic(() => import("@/components/faq-section"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

export default function Home() {
  return (
    <>
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }
      `}</style>
      <main className="min-h-screen bg-black text-white">
        {/* 1. Hero Section - Critical, load immediately */}
        <HeroSection />
        
        {/* 2. Carrusel de Clientes */}
        <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
          <ClientsCarousel />
        </Suspense>
        
        {/* 3. Auditoría Gratuita */}
        <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
          <FreeAuditSection />
        </Suspense>
        
        {/* 4. Modelos de Servicio */}
        <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
          <ServiceModelsSection />
        </Suspense>
        
        {/* 5. Proceso de Trabajo */}
        <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
          <ProcessSection />
        </Suspense>
        
        {/* 6. Casos de Éxito/Portfolio */}
        <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
          <PortfolioSection />
        </Suspense>
        
        {/* 7. Nuestro Equipo */}
        <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
          <TeamSection />
        </Suspense>
        
        {/* 8. Testimoniales */}
        <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
          <TestimonialsSection />
        </Suspense>
        
        {/* 9. FAQ */}
        <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
          <FAQSection />
        </Suspense>
        
        {/* 10. Contacto */}
        <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
          <ContactSection />
        </Suspense>
      </main>
    </>
  )
}

