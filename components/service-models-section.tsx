"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Zap, Clock, TrendingUp, Headphones } from "lucide-react"


// Datos para BRAI AaaS
const braiAaaSFeatures = [
  "50% al iniciar implementación",
  "50% al completar y poner en marcha",
  "Mensualidad del servicio completo (incluye soporte, mantenimiento y mejoras continuas)",
]

const braiAaaSIncludes = [
  "Liberación de cargas laborales repetitivas",
  "Recursos humanos disponibles para tareas estratégicas",
  "Soporte técnico especializado 24/7",
  "Actualizaciones y mejoras continuas del sistema",
  "Monitoreo proactivo del rendimiento",
  "Reportes mensuales de eficiencia y ahorro",
]

// Componente para las tarjetas de modelo
function ModelCard({
  title,
  subtitle,
  description,
  features,
  icon,
  isPopular = false,
  isPremium = false,
  gradient,
  buttonText,
  onButtonClick,
  children,
}: {
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: React.ReactNode
  isPopular?: boolean
  isPremium?: boolean
  gradient: string
  buttonText: string
  onButtonClick: () => void
  children?: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative bg-zinc-900 rounded-2xl p-8 border-2 transition-all duration-300 ${
        isPremium ? "border-[#9ACA3C] shadow-lg shadow-[#9ACA3C]/20" : "border-zinc-800 hover:border-[#9ACA3C]"
      }`}
    >
      {(isPopular || isPremium) && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span
            className={`px-4 py-1 rounded-full text-sm font-bold ${
              isPremium ? "bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black" : "bg-[#D6F050] text-black"
            }`}
          >
            {isPremium ? "PREMIUM" : "POPULAR"}
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            {icon}
          </div>
          <h3
            className="text-3xl font-bold text-white font-montserrat font-bold"
          >
            {title}
          </h3>
        </div>
        <p className="text-lg text-gray-300 mb-2">{subtitle}</p>
        <p className="text-[#9ACA3C] font-semibold">{description}</p>
      </div>

      <div className="mb-8">
        <h4 
          className="text-white font-semibold mb-4"
          style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}
        >
          {title === "BRAI Partner" ? "Incluye:" : "Modelo de pago:"}
        </h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <CheckCircle className="h-5 w-5 text-[#9ACA3C] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {children}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onButtonClick}
        className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
          isPremium
            ? "bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black hover:from-[#D6F050] hover:to-[#9ACA3C]"
            : "bg-[#D6F050] text-black hover:bg-[#9ACA3C]"
        }`}
      >
        {buttonText}
        <ArrowRight className="inline-block ml-2 h-5 w-5" />
      </motion.button>
    </motion.div>
  )
}

export default function ServiceModelsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full py-20 bg-black" id="models">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-montserrat"
          >
            NUESTRO MODELO<span className="text-[#9ACA3C]">*</span> DE AUTOMATIZACIÓN
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un enfoque integral diseñado para transformar tu empresa. Automatización específica de procesos
            con resultados garantizados y soporte continuo.
          </p>
        </motion.div>

        <div className="flex justify-center max-w-6xl mx-auto">

          <ModelCard
            title="PAS"
            subtitle="Procesos como Servicio"
            description="Automatización específica como servicio"
            features={braiAaaSFeatures}
            icon={<Zap className="h-6 w-6 text-black" />}
            isPopular={true}
            gradient="from-[#D6F050] to-[#9ACA3C]"
            buttonText="Comenzar mi Proceso"
            onButtonClick={() => scrollToSection('contact')}
          >
            <div className="mb-6 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg p-4">
              <h4 
                className="text-white font-semibold mb-3 flex items-center gap-2"
                style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}
              >
                <TrendingUp className="h-5 w-5" />
                Garantías de Resultados:
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#9ACA3C]" />
                  <span className="text-gray-300">
                    <strong className="text-[#9ACA3C]">+70%</strong> ahorro de tiempo
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#D6F050]" />
                  <span className="text-gray-300">
                    <strong className="text-[#D6F050]">+50%</strong> reducción de costos
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Headphones className="h-5 w-5 text-[#D6F050]" />
                <span className="text-white font-semibold">Incluye:</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                {braiAaaSIncludes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#D6F050] mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 bg-zinc-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-[#9ACA3C]" />
                <span className="text-white font-semibold">Descuento por volumen:</span>
              </div>
              <p className="text-gray-300">Mientras más procesos contrates, menor será la mensualidad</p>
            </div>
          </ModelCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 mb-8">¿Quieres saber más sobre nuestro modelo PAS?</p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent border-2 border-[#9ACA3C] text-[#9ACA3C] font-bold rounded-full text-lg hover:bg-[#9ACA3C] hover:text-black transition-all transform hover:scale-105"
          >
            Hablar con un Especialista
          </button>
        </motion.div>
      </div>
    </section>
  )
}
