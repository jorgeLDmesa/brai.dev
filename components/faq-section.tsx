"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

type FAQItemProps = {
  question: string
  answer: string
}

const faqs: FAQItemProps[] = [
  {
    question: "¿Qué incluye la auditoría gratuita?",
    answer:
      "La auditoría incluye: análisis completo de tus procesos actuales, identificación de oportunidades de automatización, matrices de ROI detalladas, proyección de ahorros en tiempo y dinero, y un plan de implementación personalizado. Todo esto sin compromiso y con resultados entregados en 48 horas.",
  },
  {
    question: "¿Cuál es la diferencia entre BRAI Partner y BRAI AaaS?",
    answer:
      "BRAI Partner es un modelo integral donde nos convertimos en tu socio estratégico por mínimo 18 meses, incluyendo múltiples automatizaciones, consultoría continua y soporte 24/7. BRAI AaaS es para automatizaciones específicas con pago 50% inicio + 50% entrega + mensualidad de mantenimiento.",
  },
  {
    question: "¿Realmente puedo ahorrar más del 70% del tiempo?",
    answer:
      "Sí, es nuestra garantía. Nuestras automatizaciones están diseñadas para eliminar tareas repetitivas y optimizar workflows. Si no alcanzas mínimo 70% de ahorro de tiempo en el proceso automatizado, trabajamos hasta lograrlo sin costo adicional.",
  },
  {
    question: "¿Cuánto tiempo toma implementar una automatización?",
    answer:
      "Después de la auditoría y aprobación, la implementación típica toma entre 2-6 semanas dependiendo de la complejidad. Usamos metodología ágil con entregas parciales, para que veas progreso constantemente y puedas dar feedback durante el proceso.",
  },
  {
    question: "¿Qué pasa si mi equipo no sabe usar la automatización?",
    answer:
      "Incluimos capacitación completa de tu equipo como parte del servicio. Además, proporcionamos documentación detallada, videos tutoriales y soporte técnico continuo. Nuestro objetivo es que tu equipo se sienta cómodo y confiado usando las nuevas herramientas.",
  },
  {
    question: "¿Pueden integrarse con nuestros sistemas actuales?",
    answer:
      "Sí, nuestras automatizaciones se diseñan para integrarse perfectamente con tus sistemas existentes (CRM, ERP, bases de datos, etc.). Realizamos un análisis técnico durante la auditoría para asegurar compatibilidad total sin interrumpir tus operaciones actuales.",
  },
  {
    question: "¿Qué garantías ofrecen en sus servicios?",
    answer:
      "Garantizamos mínimo 70% ahorro de tiempo y 50% reducción de costos en procesos automatizados. Ofrecemos soporte técnico incluido, actualizaciones gratuitas por el primer año, y una garantía de funcionamiento. Si no cumplimos las expectativas, trabajamos hasta lograrlo.",
  },
]

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-b border-zinc-800 py-6"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left">
        <h3
          className="text-xl md:text-2xl font-bold text-white"
          style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-[#9ACA3C] to-[#D6F050] rounded-full p-1 flex items-center justify-center"
        >
          <ChevronDown className="h-5 w-5 text-black" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section className="w-full py-20 bg-black overflow-hidden" id="faq">
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
            PREGUNTAS<span className="text-[#9ACA3C]">*</span> FRECUENTES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resolvemos tus dudas para que puedas tomar la mejor decisión para tu negocio.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  )
}

