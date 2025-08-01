"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "COPALG", logo: "/copalg-logo.png" },
  { name: "Nutrinor", logo: "/nutrinor-logo.png" },
  { name: "GIO", logo: "/gio-logo.png" },
  { name: "Guayacanes", logo: "/guayacanes-logo.png" },
  { name: "Nubesti", logo: "/nubesti-logo.png" },
  { name: "Ancla", logo: "/ancla-logo.png" },
]

export default function ClientsCarousel() {
  // Duplicamos los clientes para hacer el scroll infinito más fluido
  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <section className="w-full py-20 bg-zinc-950 overflow-hidden">
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
            EMPRESAS QUE<span className="text-[#9ACA3C]">*</span> CONFÍAN EN NOSOTROS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            +50 empresas han automatizado sus procesos y ahorrado más del 70% de su tiempo operativo
          </p>
        </motion.div>

        {/* Estadísticas destacadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div
              className="text-4xl md:text-5xl font-bold text-[#9ACA3C] mb-2"
              style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
            >
              +50
            </div>
            <p className="text-gray-300">Empresas Automatizadas</p>
          </div>
          <div className="text-center">
            <div
              className="text-4xl md:text-5xl font-bold text-[#D6F050] mb-2"
              style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
            >
              70%
            </div>
            <p className="text-gray-300">Ahorro de Tiempo Promedio</p>
          </div>
          <div className="text-center">
            <div
              className="text-4xl md:text-5xl font-bold text-[#9ACA3C] mb-2"
              style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
            >
              24/7
            </div>
            <p className="text-gray-300">Soporte Continuo</p>
          </div>
        </motion.div>

        {/* Carrusel de logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-20 w-40 group"
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    className="max-h-16 max-w-36 w-auto h-auto object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradientes laterales para fade effect */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-10"></div>
        </motion.div>

        {/* Llamado a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-8">¿Quieres ser la próxima empresa en transformar sus procesos?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black font-bold rounded-full text-lg hover:from-[#D6F050] hover:to-[#9ACA3C] transition-all"
            style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
          >
            Únete a Nuestros Clientes
          </motion.button>
        </motion.div>
      </div>

      {/* CSS Animation para scroll infinito fluido */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
