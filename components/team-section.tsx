"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Github } from "lucide-react"

const teamMembers = [
  {
    name: "Jorge David",
    role: "Fundador & CEO",
    imageUrl: "/jorge.jpeg",
    bio: "Físico Teórico con especialización en Machine Learning y Deep Learning. Más de 2 años desarrollando soluciones de IA para empresas. Su enfoque científico riguroso garantiza que cada proyecto esté respaldado por fundamentos sólidos y metodologías probadas.",
    linkedin: "https://www.linkedin.com/in/jorge-luis-david-mesa/",
    github: "https://github.com/jorgeLDmesa",
  },
  {
    name: "Santiago Cañola",
    role: "Director de Proyectos & Operaciones",
    imageUrl: "/pele.jpeg",
    bio: "Ingeniero Civil con más de 5 años de experiencia en formulación y gestión de proyectos de gran escala. Diplomado en metodologías ágiles y Scrum Master certificado. Su expertise en planificación estratégica y ejecución garantiza entregas puntuales y dentro del presupuesto.",
    linkedin: "https://www.linkedin.com/in/santiago-ca%C3%B1ola-25a962292/",
  },
  {
    name: "Anderson Medina",
    role: "Director de Ingeniería de Software",
    imageUrl: "/anderson.jpeg",
    bio: "Ingeniero de Software especializado en logística con amplia experiencia en empresas líderes como Mercado Libre. Experto en arquitecturas escalables y sistemas de alto rendimiento que soportan millones de transacciones diarias.",
    linkedin: "https://www.linkedin.com/in/anderson-medina-arango-7b8b671b6/",
    github: "https://github.com/Anders1718",
  },
]

export default function TeamSection() {
  return (
    <section className="w-full py-20 bg-black" id="team">
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
            NUESTRO EQUIPO<span className="text-[#9ACA3C]">*</span> DE ÉLITE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            El talento y la experiencia detrás de cada solución inteligente que construimos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="w-full h-full rounded-full object-cover object-center border-4 border-zinc-800 group-hover:border-[#9ACA3C] transition-colors duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-[#9ACA3C] font-semibold mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm mb-4 px-4">{member.bio}</p>
              <div className="flex gap-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9ACA3C]">
                  <Linkedin size={20} />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9ACA3C]">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 