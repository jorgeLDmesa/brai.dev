"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Search, Lightbulb, Code, Repeat, Rocket } from "lucide-react"

const steps = [
  {
    icon: <Search className="h-10 w-10" />,
    title: "Inmersión y Diagnóstico Estratégico",
    description:
      "Nos sumergimos en tu negocio para entender el desafío real. Analizamos procesos y datos para definir juntos la solución tecnológica con el mayor retorno de inversión.",
    color: "from-[#9ACA3C] to-[#D6F050]",
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Arquitectura y Prototipado Rápido",
    description:
      "Diseñamos una arquitectura sólida y escalable. Creamos prototipos interactivos en tiempo récord para que puedas ver y sentir la solución antes de construirla.",
    color: "from-[#D6F050] to-[#9ACA3C]",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Desarrollo Acelerado",
    description:
      "Nuestro equipo de élite entra en acción. Construimos el software en ciclos cortos, integrando componentes a medida, APIs y, cuando es clave, modelos de IA.",
    color: "from-[#9ACA3C] to-[#D6F050]",
  },
  {
    icon: <Repeat className="h-10 w-10" />,
    title: "Iteración y Entrega de Valor",
    description:
      "No desaparecemos por meses. Entregamos valor de forma continua, ajustando la solución con tu feedback para asegurar que el producto final sea perfecto.",
    color: "from-[#D6F050] to-[#9ACA3C]",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Despliegue e Impacto",
    description:
      "Lanzamos la solución y te acompañamos para asegurar su adopción y medir el impacto en tu negocio. Tu éxito es nuestro éxito.",
    color: "from-[#9ACA3C] to-[#D6F050]",
  },
]

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="w-full py-20 bg-black overflow-hidden" id="process">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
          >
            NUESTRO PROCESO<span className="text-[#9ACA3C]">*</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desde la idea hasta el impacto. Una metodología probada para entregar la solución correcta, rápidamente.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Línea conectora */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9ACA3C] to-[#D6F050] transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4 text-white"
                    style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
                  >
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>

                <div className="relative flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-black z-20`}
                  >
                    {step.icon}
                  </motion.div>
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"} md:opacity-0`}>
                  {/* Espacio para mantener el layout en desktop */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

