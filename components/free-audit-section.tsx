"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CheckCircle, Calculator, TrendingUp, Clock, Rocket } from "lucide-react"

const auditFeatures = [
  {
    icon: <Calculator className="h-10 w-10" />,
    title: "Análisis ROI",
    description: "Proyección detallada de retorno de inversión",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Ahorro de Tiempo",
    description: "Cuantificación exacta de horas recuperadas",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Reducción de Costos",
    description: "Impacto directo en tu estructura de costos",
  },
  {
    icon: <CheckCircle className="h-10 w-10" />,
    title: "Plan Personalizado",
    description: "Estrategia específica para tu empresa",
  },
]

const auditIncludes = [
  {
    title: "Análisis de Procesos Actuales",
    description: "Mapeo completo de tus operaciones y workflows",
  },
  {
    title: "Identificación de Oportunidades",
    description: "Procesos con mayor potencial de automatización",
  },
  {
    title: "Matrices de ROI Detalladas",
    description: "Cálculos precisos de retorno de inversión",
  },
  {
    title: "Proyección de Ahorros",
    description: "Tiempo y dinero que ahorrarás mensualmente",
  },
  {
    title: "Plan de Implementación",
    description: "Roadmap detallado para tu transformación",
  },
  {
    title: "Sin Compromiso",
    description: "Resultados valiosos sin obligación de contratar",
  },
]

function FeatureCard({
  icon,
  title,
  description,
  index,
}: { icon: React.ReactNode; title: string; description: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-[#9ACA3C] transition-all duration-300 text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#9ACA3C] to-[#D6F050] flex items-center justify-center text-black">
        {icon}
      </div>
      <h3
        className="text-lg font-bold text-white mb-2"
        // style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontWeight: 300 }}
        style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}
      >
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

export default function FreeAuditSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full py-20 bg-zinc-950">
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
            DESCUBRE TU POTENCIAL<span className="text-[#9ACA3C]">*</span> DE AUTOMATIZACIÓN
          </h2>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black px-8 py-3 rounded-full text-xl font-bold mb-6 font-montserrat font-bold"
          >
            AUDITORÍA GRATUITA
          </motion.div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Análisis completo de tus procesos actuales con matrices de ROI personalizadas. Descubre exactamente cuánto
            tiempo y dinero puedes ahorrar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {auditFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-16"
        >
          <h3
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center font-montserrat"
          >
            LO QUE INCLUYE<span className="text-[#9ACA3C]">*</span> TU AUDITORÍA GRATUITA
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditIncludes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="h-6 w-6 text-[#9ACA3C] mt-1 flex-shrink-0" />
                <div>
                  <h4
                    className="text-white font-bold mb-1"
                    style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-12 py-6 bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black font-bold text-xl rounded-full transition-all hover:from-[#D6F050] hover:to-[#9ACA3C] shadow-lg hover:shadow-xl font-montserrat font-bold"
          >
            SOLICITAR AUDITORÍA GRATUITA
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-400 mt-6 flex items-center justify-center gap-2"
          >
            <Rocket className="h-5 w-5 text-[#9ACA3C]" />
            Recibe tu análisis completo en 48 horas
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
