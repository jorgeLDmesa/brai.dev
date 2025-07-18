"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Smartphone, Globe, Database, BrainCircuit, Play, X } from "lucide-react"

// Categorías de proyectos
type ProjectCategory = "todos" | "automatizacion" | "software" | "dashboard" | "ai"

// Interfaz para los proyectos
interface Project {
  id: number
  title: string
  description: string
  videoUrl: string
  thumbnailUrl?: string
  category: ProjectCategory[]
  technologies: string[]
  link?: string
  aiFeature?: string
}

// Datos de los nuevos proyectos
const projects: Project[] = [
  {
    id: 1,
    title: "Automatización de Formulación de Proyectos",
    description:
      "Sistema automatizado que genera formulaciones de proyectos basándose en plantillas inteligentes y datos de entrada, reduciendo el tiempo de formulación en un 80%.",
    videoUrl: "https://expertos-tematicos-papeleo.s3.us-east-2.amazonaws.com/Presentacio%CC%81n+papeleo.mp4",
    category: ["automatizacion", "ai"],
    technologies: ["Python", "NLP", "React", "PostgreSQL"],
    link: "#",
    aiFeature: "Generación Automática de Contenido"
  },
  {
    id: 2,
    title: "Automatización de Informe de Salud Laboral",
    description:
      "Plataforma que procesa automáticamente archivos Excel de datos de salud laboral y genera informes completos cumpliendo con normativas legales.",
    videoUrl: "https://expertos-tematicos-papeleo.s3.us-east-2.amazonaws.com/IPS-papeleo.mp4",
    category: ["automatizacion", "software"],
    technologies: ["Python", "Pandas", "Flask", "Excel API"],
    link: "#",
    aiFeature: "Procesamiento Inteligente de Datos"
  },
  {
    id: 3,
    title: "Software de Cálculo de Nómina con Identificación Facial",
    description:
      "Sistema de nómina que utiliza reconocimiento facial para validar la asistencia de empleados y calcular automáticamente salarios y deducciones.",
    videoUrl: "https://videos-pages.s3.us-east-1.amazonaws.com/videos/FaceMark.mp4",
    category: ["software", "ai"],
    technologies: ["OpenCV", "TensorFlow", "Node.js", "MySQL"],
    link: "#",
    aiFeature: "Reconocimiento Facial"
  },
  {
    id: 4,
    title: "Dashboard de Planes de Desarrollo Municipal",
    description:
      "Panel de control inteligente para municipios que monitorea el progreso de planes de desarrollo y genera alertas predictivas sobre posibles retrasos o problemas.",
    videoUrl: "https://expertos-tematicos-papeleo.s3.us-east-2.amazonaws.com/Papeleo+-+Plan+de+desarrollo+-+Banco+de+proyectos.mp4",
    category: ["dashboard", "ai"],
    technologies: ["Vue.js", "D3.js", "Python", "MongoDB"],
    link: "#",
    aiFeature: "Alertas Inteligentes Predictivas"
  },
  {
    id: 5,
    title: "Software de Logística PAE",
    description: "Sistema de gestión logística para operadores del Plan de Alimentación Escolar que optimiza rutas de entrega y controla inventarios en tiempo real.",
    videoUrl: "https://example-bucket.s3.amazonaws.com/pae-logistics.mp4",
    category: ["software", "automatizacion"],
    technologies: ["React", "Node.js", "Google Maps API", "PostgreSQL"],
    link: "#",
    aiFeature: "Optimización de Rutas"
  },
  {
    id: 6,
    title: "Automatización de Causación de Facturas",
    description:
      "Sistema que extrae automáticamente datos de facturas mediante IA y los registra en sistemas contables, eliminando la entrada manual de datos.",
    videoUrl: "https://example-bucket.s3.amazonaws.com/invoice-automation.mp4",
    category: ["automatizacion", "ai"],
    technologies: ["Python", "OCR", "Tesseract", "SAP API"],
    link: "#",
    aiFeature: "Extracción con IA"
  },
  {
    id: 7,
    title: "Automatización de Búsqueda Web con Agentes IA",
    description:
      "Agentes inteligentes que realizan web scraping automatizado para recopilar información específica de internet y generar reportes estructurados.",
    videoUrl: "https://example-bucket.s3.amazonaws.com/web-scraping-agents.mp4",
    category: ["automatizacion", "ai"],
    technologies: ["Python", "Selenium", "BeautifulSoup", "GPT API"],
    link: "#",
    aiFeature: "Agentes IA para Web Scraping"
  },
  {
    id: 8,
    title: "Software de Automatización de Etapas Contractuales",
    description:
      "Plataforma integral que automatiza todo el ciclo de vida contractual, desde la generación inteligente de contratos con IA hasta el seguimiento de cumplimiento y renovaciones automáticas.",
    videoUrl: "https://expertos-tematicos-papeleo.s3.us-east-2.amazonaws.com/contractual-papeleo.mp4",
    category: ["software", "automatizacion", "ai"],
    technologies: ["Python", "GPT-4", "React", "MongoDB", "DocuSign API"],
    link: "#",
    aiFeature: "Generación Inteligente de Contratos"
  },
]

// Componente Modal para el Video
function VideoModal({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: Project | null
  isOpen: boolean
  onClose: () => void 
}) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-zinc-900 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="aspect-video">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster={project.thumbnailUrl}
              >
                <source src={project.videoUrl} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            
            <div className="p-6">
              <h3
                className="text-2xl font-bold mb-2 text-white"
                style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
              >
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs bg-black/50 backdrop-blur-sm text-[#D6F050] px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.aiFeature && (
                <div className="flex items-center gap-2 text-[#9ACA3C]">
                  <BrainCircuit className="w-5 h-5" />
                  <span className="font-medium">IA: {project.aiFeature}</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Componente para cada proyecto individual
function ProjectCard({ 
  project, 
  onPlayVideo 
}: { 
  project: Project
  onPlayVideo: (project: Project) => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#9ACA3C] transition-colors cursor-pointer"
      onClick={() => onPlayVideo(project)}
    >
      <div className="aspect-video overflow-hidden relative">
        <video
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          poster={project.thumbnailUrl}
          muted
          preload="metadata"
        >
          <source src={project.videoUrl} type="video/mp4" />
        </video>
        
        {/* Overlay de play */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 bg-[#9ACA3C] rounded-full flex items-center justify-center shadow-lg"
          >
            <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
          </motion.div>
        </div>
        
        {project.aiFeature && (
          <div className="absolute top-4 right-4 bg-[#9ACA3C] text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <BrainCircuit className="w-4 h-4" />
            <span>IA: {project.aiFeature}</span>
          </div>
        )}
      </div>

      {/* Título siempre visible */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
        <h3
          className="text-xl font-bold text-white drop-shadow-lg"
          style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
        >
          {project.title}
        </h3>
      </div>

      {/* Información expandida al hacer hover */}
      <div className="absolute inset-0 p-6 z-20 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
        <h3
          className="text-2xl font-bold mb-4 text-white drop-shadow-lg"
          style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
        >
          {project.title}
        </h3>
        
        <p className="text-gray-200 mb-4 drop-shadow-md text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-black/70 backdrop-blur-sm text-[#D6F050] px-3 py-1 rounded-full border border-[#9ACA3C]/30">
              {tech}
            </span>
          ))}
        </div>

        {project.aiFeature && (
          <div className="flex items-center gap-2 text-[#9ACA3C] mt-2">
            <BrainCircuit className="w-4 h-4" />
            <span className="text-sm font-medium">IA: {project.aiFeature}</span>
          </div>
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
    { id: "automatizacion", label: "Automatización", icon: <BrainCircuit className="h-4 w-4 mr-1" /> },
    { id: "software", label: "Software", icon: <Database className="h-4 w-4 mr-1" /> },
    { id: "dashboard", label: "Dashboard", icon: <Globe className="h-4 w-4 mr-1" /> },
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si estamos en móvil
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 768
      setIsMobile(prev => {
        if (prev !== newIsMobile) {
          setShowAll(false) // Resetear cuando cambie el tamaño de pantalla
        }
        return newIsMobile
      })
    }
    
    // Verificación inicial
    checkMobile()
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects =
    activeCategory === "todos" ? projects : projects.filter((project) => project.category.includes(activeCategory))

  // Determinar cuántos proyectos mostrar
  const getProjectsToShow = () => {
    if (showAll) return filteredProjects
    
    // En móvil mostrar 3, en desktop mostrar 6
    const limit = isMobile ? 3 : 6
    return filteredProjects.slice(0, limit)
  }

  const projectsToShow = getProjectsToShow()
  const hasMoreProjects = filteredProjects.length > projectsToShow.length

  const handlePlayVideo = (project: Project) => {
    setSelectedProject(project)
    setIsVideoModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsVideoModalOpen(false)
    setSelectedProject(null)
  }

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category)
    setShowAll(false) // Resetear al cambiar categoría
  }

  const handleShowMore = () => {
    setShowAll(true)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full py-20 bg-zinc-950" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-lg text-[#9ACA3C] mb-4 font-medium">
            Algunos de nuestros proyectos
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
          >
            CASOS DE<span className="text-[#9ACA3C]"></span> ÉXITO
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora cómo hemos aplicado la inteligencia artificial y software para resolver problemas complejos y generar valor real.
          </p>
        </motion.div>

        <CategoryFilter activeCategory={activeCategory} setActiveCategory={handleCategoryChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project) => (
            <ProjectCard key={project.id} project={project} onPlayVideo={handlePlayVideo} />
          ))}
        </div>

        {/* Botón Ver más */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleShowMore}
              className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-full transition-colors border border-zinc-600 hover:border-[#9ACA3C]"
            >
              Ver más proyectos ({filteredProjects.length - projectsToShow.length} restantes)
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 mb-8">
          ¿Tareas repetitivas o procesos lentos? Podemos ayudarte a automatizarlos.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black font-bold rounded-full text-lg hover:from-[#D6F050] hover:to-[#9ACA3C] transition-all transform hover:scale-105"
          >
            Contáctanos 
          </button>
        </motion.div>
      </div>

      {/* Modal de Video */}
      <VideoModal 
        project={selectedProject}
        isOpen={isVideoModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

