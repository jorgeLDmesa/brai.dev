"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Building, Rocket } from "lucide-react"

// Datos para el modelo de casa de software
const softwareHouseFeatures = [
  "Acceso a un equipo de élite en software e IA",
  "Desarrollo continuo de soluciones a medida",
  "Integración tecnológica en múltiples áreas de tu negocio",
  "Optimización constante de procesos y algoritmos",
  "Soporte estratégico y técnico prioritario",
  "Escalabilidad de soluciones garantizada",
]

// Datos para MVPs individuales
const individualMVPFeatures = [
  "Validación rápida de una hipótesis de negocio",
  "Desarrollo enfocado en un problema clave",
  "Entrega funcional en semanas, no meses",
  "Uso de aceleradores (IA, componentes reusables)",
  "Producto Mínimo Viable listo para demostrar",
  "La forma más rentable de probar una idea innovadora",
]

// Componente para las tarjetas de modelo
function ModelCard({
  title,
  subtitle,
  description,
  features,
  icon,
  price,
  duration,
  isPopular = false,
  gradient,
  onChooseModel,
}: {
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: React.ReactNode
  price: string
  duration: string
  isPopular?: boolean
  gradient: string
  onChooseModel: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative bg-zinc-900 rounded-2xl p-8 border-2 transition-all duration-300 ${
        isPopular ? "border-[#9ACA3C] shadow-lg shadow-[#9ACA3C]/20" : "border-zinc-800 hover:border-[#9ACA3C]"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black px-4 py-1 rounded-full text-sm font-bold">
            MÁS POPULAR
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <div
          className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
        >
          {icon}
        </div>
        <h3
          className="text-3xl font-bold mb-2 text-white"
          className="font-montserrat font-bold"
        >
          {title}
        </h3>
        <p className="text-[#9ACA3C] font-semibold mb-4">{subtitle}</p>
        <p className="text-gray-300 mb-6">{description}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-400 ml-2">{duration}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
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

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onChooseModel}
        className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
          isPopular
            ? "bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black hover:from-[#D6F050] hover:to-[#9ACA3C]"
            : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 hover:border-[#9ACA3C]"
        }`}
      >
        Elegir este modelo
        <ArrowRight className="inline-block ml-2 h-5 w-5" />
      </motion.button>
    </motion.div>
  )
}

// Componente de comparación
function ComparisonSection() {
  const comparisons = [
    {
      aspect: "Duración",
      softwareHouse: "12 meses",
      individual: "2-4 meses",
    },
    {
      aspect: "Alcance",
      softwareHouse: "Múltiples MVPs + Estrategia",
      individual: "Un MVP específico",
    },
    {
      aspect: "Equipo",
      softwareHouse: "Equipo dedicado exclusivo",
      individual: "Equipo asignado por proyecto",
    },
    {
      aspect: "Soporte",
      softwareHouse: "24/7 durante todo el año",
      individual: "Durante el desarrollo",
    },
    {
      aspect: "Ideal para",
      softwareHouse: "Empresas en crecimiento",
      individual: "Startups y proyectos puntuales",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-20 bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
    >
      <h3
        className="text-3xl font-bold mb-8 text-center text-white"
        style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
      >
        COMPARACIÓN<span className="text-[#9ACA3C]">*</span> DE MODELOS
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-4 px-4 text-gray-400 font-semibold">Aspecto</th>
              <th className="text-center py-4 px-4 text-[#9ACA3C] font-semibold">Agencia de Automatización</th>
              <th className="text-center py-4 px-4 text-[#D6F050] font-semibold">MVP Individual</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((comparison, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors"
              >
                <td className="py-4 px-4 text-white font-medium">{comparison.aspect}</td>
                <td className="py-4 px-4 text-center text-gray-300">{comparison.softwareHouse}</td>
                <td className="py-4 px-4 text-center text-gray-300">{comparison.individual}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
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
    <section className="w-full py-20 bg-black">
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
            NUESTROS MODELOS<span className="text-[#9ACA3C]">*</span> DE SERVICIO
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nos adaptamos a ti. Elige el modelo de colaboración que mejor se alinee con tus objetivos, ya sea una alianza a largo plazo o un proyecto de alto impacto en tiempo récord.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ModelCard
            title="AGENCIA DE AUTOMATIZACIÓN"
            subtitle="Alianza Estratégica Anual"
            description="Tu equipo de innovación externo. Un equipo de élite dedicado a resolver tus desafíos de negocio con soluciones tecnológicas a medida."
            features={softwareHouseFeatures}
            icon={<Building className="h-10 w-10 text-black" />}
            price="Desde $1,500"
            duration="/ mes"
            isPopular={true}
            gradient="from-[#9ACA3C] to-[#D6F050]"
            onChooseModel={() => scrollToSection('contact')}
          />

          <ModelCard
            title="MVP ACELERADO"
            subtitle="Proyecto de Alto Impacto"
            description="Validamos tu idea y construimos un Producto Mínimo Viable funcional en semanas. El camino más rápido para probar una hipótesis de negocio con tecnología."
            features={individualMVPFeatures}
            icon={<Rocket className="h-10 w-10 text-black" />}
            price="Desde $2,500"
            duration="/ proyecto"
            gradient="from-[#D6F050] to-[#9ACA3C]"
            onChooseModel={() => scrollToSection('contact')}
          />
        </div>

        <ComparisonSection />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3
            className="text-2xl md:text-3xl font-bold mb-6 text-white"
            className="font-montserrat font-bold"
          >
            ¿NO SABES CUÁL ELEGIR?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y te ayudamos a determinar cuál modelo se adapta mejor a tus necesidades y
            objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black font-bold rounded-full text-lg hover:from-[#D6F050] hover:to-[#9ACA3C] transition-all transform hover:scale-105"
            >
              Consulta gratuita
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-transparent border-2 border-[#9ACA3C] text-[#9ACA3C] font-bold rounded-full text-lg hover:bg-[#9ACA3C] hover:text-black transition-all"
            >
              Ver casos de éxito
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
