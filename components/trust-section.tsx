"use client"

import { motion } from "framer-motion"
import { Shield, Award, Clock, Zap, Users } from "lucide-react"

const trustFactors = [
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Póliza de garantía",
    description:
      "Ofrecemos una póliza que responde por cualquier inconveniente con el producto entregado, asegurando tu inversión y tranquilidad.",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Experiencia comprobada",
    description:
      "Más del 80% de nuestros clientes validan su MVP con éxito antes de los 3 meses, gracias a nuestra metodología ágil.",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Velocidad de entrega",
    description:
      "Reducimos el tiempo de desarrollo hasta en un 50% con nuestra metodología ágil, permitiéndote llegar al mercado más rápido.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Enfoque en UX",
    description:
      "Nuestras soluciones tienen un enfoque en UX que mejora la adopción hasta en un 40%, asegurando que tus usuarios amen tu producto.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Flexibilidad total",
    description:
      "No vendemos un producto genérico, sino una solución adaptada a la necesidad específica de tu negocio y tus usuarios.",
  },
]

export default function TrustSection() {
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
          >
            POR QUÉ<span className="text-[#9ACA3C]">*</span> CONFIAR EN NOSOTROS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No solo desarrollamos software, nos metemos en tu problema y trabajamos desde la raíz para encontrar la
            mejor solución.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-[#9ACA3C] transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9ACA3C] to-[#D6F050] flex items-center justify-center text-black mb-6">
                {factor.icon}
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
              >
                {factor.title}
              </h3>
              <p className="text-gray-300">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 md:p-12 rounded-2xl border border-zinc-700"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3">
              <h3
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
              >
                PÓLIZA DE GARANTÍA PARA TU PROYECTO
              </h3>
              <p className="text-gray-300 mb-6">
                Entendemos que invertir en desarrollo de software puede ser un riesgo. Por eso, ofrecemos una póliza de
                garantía que cubre cualquier inconveniente con el producto entregado. Si algo no funciona como se
                especificó, lo arreglamos sin costo adicional.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#9ACA3C] mr-2">✓</span>
                  <span>Garantía de funcionamiento según especificaciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9ACA3C] mr-2">✓</span>
                  <span>Soporte técnico prioritario</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9ACA3C] mr-2">✓</span>
                  <span>Correcciones sin costo adicional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9ACA3C] mr-2">✓</span>
                  <span>Tranquilidad para tu inversión</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="w-48 h-48 rounded-full bg-gradient-to-br from-[#9ACA3C] to-[#D6F050] flex items-center justify-center"
              >
                <Shield className="h-24 w-24 text-black" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

