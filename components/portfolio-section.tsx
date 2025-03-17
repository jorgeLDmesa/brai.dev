"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Smartphone, Globe, Database, BrainCircuit } from "lucide-react"

// Categorías de proyectos
type ProjectCategory = "todos" | "web" | "mobile" | "ai" | "backend"

// Interfaz para los proyectos
interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  category: ProjectCategory[]
  technologies: string[]
  link?: string
}

// Datos de ejemplo para los proyectos
const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión Hospitalaria",
    description:
      "Plataforma integral para la gestión de pacientes, citas y expedientes médicos. Redujo el tiempo de atención en un 40%.",
    imageUrl: "/placeholder.svg?height=600&width=800&text=Sistema+Hospitalario",
    category: ["web", "backend"],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "#",
  },
  {
    id: 2,
    title: "App de Delivery para Restaurantes",
    description:
      "Aplicación móvil que permitió a restaurantes locales aumentar sus ventas en un 60% durante la pandemia.",
    imageUrl: "/placeholder.svg?height=600&width=800&text=App+Delivery",
    category: ["mobile"],
    technologies: ["React Native", "Firebase", "Stripe", "Google Maps API"],
    link: "#",
  },
  {
    id: 3,
    title: "Plataforma de E-learning",
    description:
      "Sistema completo de aprendizaje en línea con cursos, evaluaciones y certificaciones. Más de 10,000 usuarios activos.",
    imageUrl: "/placeholder.svg?height=600&width=800&text=E-learning",
    category: ["web", "backend"],
    technologies: ["Vue.js", "Django", "PostgreSQL", "AWS"],
    link: "#",
  },
  {
    id: 4,
    title: "Asistente Virtual con IA",
    description:
      "Chatbot inteligente para atención al cliente que resuelve el 85% de las consultas sin intervención humana.",
    imageUrl: "/placeholder.svg?height=600&width=800&text=Asistente+IA",
    category: ["ai", "web"],
    technologies: ["Python", "TensorFlow", "NLP", "WebSockets"],
    link: "#",
  },
  {
    id: 5,
    title: "Sistema de Inventario RFID",
    description: "Solución para gestión de inventario en tiempo real con tecnología RFID. Redujo pérdidas en un 30%.",
    imageUrl: "/placeholder.svg?height=600&width=800&text=Sistema+RFID",
    category: ["backend", "web"],
    technologies: ["C#", ".NET", "SQL Server", "Angular"],
    link: "#",
  },
  {
    id: 6,
    title: "App de Finanzas Personales",
    description:
      "Aplicación móvil para control de gastos e inversiones con análisis predictivo. 4.8/5 estrellas en App Store.",
    imageUrl: "/placeholder.svg?height=600&width=800&text=Finanzas+App",
    category: ["mobile", "ai"],
    technologies: ["Flutter", "Firebase", "ML Kit", "Plaid API"],
    link: "#",
  },
]

// Componente para cada proyecto individual
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#9ACA3C] transition-colors"
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <h3
          className="text-2xl font-bold mb-2 text-white"
          style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
        >
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-black/50 backdrop-blur-sm text-[#D6F050] px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            className="inline-flex items-center text-[#9ACA3C] hover:text-[#D6F050] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  )
}

// Componente para el filtro de categorías
function CategoryFilter({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: ProjectCategory
  setActiveCategory: (category: ProjectCategory) => void
}) {
  const categories = [
    { id: "todos", label: "Todos", icon: <Globe className="h-4 w-4 mr-1" /> },
    { id: "web", label: "Web", icon: <Globe className="h-4 w-4 mr-1" /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="h-4 w-4 mr-1" /> },
    { id: "backend", label: "Backend", icon: <Database className="h-4 w-4 mr-1" /> },
    { id: "ai", label: "IA", icon: <BrainCircuit className="h-4 w-4 mr-1" /> },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(category.id as ProjectCategory)}
          className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category.id ? "bg-[#9ACA3C] text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"
          }`}
        >
          {category.icon}
          {category.label}
        </motion.button>
      ))}
    </div>
  )
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("todos")

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects =
    activeCategory === "todos" ? projects : projects.filter((project) => project.category.includes(activeCategory))

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
            NUESTROS<span className="text-[#9ACA3C]">*</span> PROYECTOS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones tecnológicas que han transformado negocios y generado resultados reales.
          </p>
        </motion.div>

        <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 mb-8">
            ¿Tienes un proyecto en mente? Podemos ayudarte a hacerlo realidad.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black font-bold rounded-full text-lg hover:from-[#D6F050] hover:to-[#9ACA3C] transition-all transform hover:scale-105">
            Contáctanos para un presupuesto
          </button>
        </motion.div>
      </div>
    </section>
  )
}

