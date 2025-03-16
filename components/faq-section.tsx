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
    question: "¿Cuánto va a costar el desarrollo?",
    answer:
      "El costo varía según la complejidad del proyecto. Ofrecemos presupuestos personalizados basados en tus necesidades específicas. Además, contamos con facilidades de pago en cuotas según el avance del proyecto, aceptando transferencias bancarias, tarjetas de crédito y plataformas digitales.",
  },
  {
    question: "¿Cuánto tiempo va a tardar?",
    answer:
      "Nuestro enfoque ágil nos permite entregar MVPs funcionales en tiempos récord. La mayoría de nuestros clientes validan su MVP con éxito antes de los 3 meses. El tiempo exacto dependerá de la complejidad del proyecto, pero siempre trabajamos con iteraciones rápidas para que puedas ver resultados desde el principio.",
  },
  {
    question: "¿Realmente vale la pena esta inversión?",
    answer:
      "Absolutamente. Cada día que pasa sin una solución tecnológica efectiva, tu negocio pierde oportunidades. Un MVP rápido te permite validar tu idea antes de invertir más, y nuestro enfoque en UX mejora la adopción hasta en un 40%. Además, si no lo haces tú, otro competidor lo hará primero.",
  },
  {
    question: "¿Y si el software no cumple con mis expectativas?",
    answer:
      "Ofrecemos una póliza de garantía que cubre cualquier inconveniente con el producto entregado. Si algo no funciona como se especificó, lo arreglamos sin costo adicional. Nuestro proceso incluye iteraciones constantes basadas en tu feedback, asegurando que el producto final cumpla exactamente con tus expectativas.",
  },
  {
    question: "¿Qué incluye exactamente su servicio?",
    answer:
      "Nuestro servicio incluye: consultoría inicial y mesas de trabajo, diseño UX/UI con prototipado, desarrollo del MVP funcional, iteraciones y ajustes según feedback real, y acompañamiento en la implementación. No solo entregamos código, sino una solución completa a tu problema.",
  },
  {
    question: "¿Cómo se diferencian de otras empresas de desarrollo?",
    answer:
      "Nuestra mayor fortaleza es la velocidad y precisión en la entrega de soluciones. No solo desarrollamos software, sino que nos metemos en el problema del cliente y trabajamos desde la raíz. Ofrecemos MVPs rápidos y funcionales, UX bien pensada, mesas de trabajo en campo, y flexibilidad total para adaptarnos a tus necesidades específicas.",
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
          <p className="text-xl text-gray-300 mb-8">¿Tienes más preguntas? Estamos aquí para ayudarte.</p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black font-bold rounded-full text-lg hover:from-[#D6F050] hover:to-[#9ACA3C] transition-all transform hover:scale-105">
            Contáctanos ahora
          </button>
        </motion.div>
      </div>
    </section>
  )
}

