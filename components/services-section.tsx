"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Bot, LineChart, Cpu, Lock, Layers } from "lucide-react"

const services = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-[#9ACA3C]" />,
    title: "Machine Learning y Modelos Predictivos",
    description: "Creamos modelos que aprenden de tus datos para predecir tendencias, optimizar inventarios, y personalizar experiencias de cliente.",
  },
  {
    icon: <Bot className="w-10 h-10 text-[#9ACA3C]" />,
    title: "Procesamiento de Lenguaje Natural (NLP)",
    description: "Desarrollamos asistentes virtuales, chatbots y sistemas que entienden y procesan el lenguaje humano para automatizar la comunicación.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-[#9ACA3C]" />,
    title: "Optimización y Simulación",
    description: "Aplicamos algoritmos avanzados para resolver problemas complejos de logística, planificación de recursos y eficiencia operativa.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-[#9ACA3C]" />,
    title: "Computer Vision",
    description: "Construimos sistemas que analizan imágenes y videos para control de calidad, seguridad, y extracción de información de forma automática.",
  },
  {
    icon: <Lock className="w-10 h-10 text-[#9ACA3C]" />,
    title: "Desarrollo de Software Robusto",
    description: "Diseñamos y construimos la infraestructura de software de alta calidad que soporta nuestras soluciones de IA, garantizando escalabilidad y seguridad.",
  },
  {
    icon: <Layers className="w-10 h-10 text-[#9ACA3C]" />,
    title: "Integración de IA en Sistemas Existentes",
    description: "Auditamos tu arquitectura actual y desarrollamos un plan para inyectar capacidades de inteligencia artificial sin interrumpir tu operación.",
  },
]

const technologies = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Rasa", "Spacy", "Pandas", "NumPy",
  "React", "Vue.js", "Node.js", "Django", "Flask", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS", "Google Cloud"
]

export default function ServicesSection() {
  return (
    <section className="w-full py-20 bg-zinc-950" id="services">
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
            SERVICIOS Y<span className="text-[#9ACA3C]">*</span> TECNOLOGÍAS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestro stack tecnológico y áreas de especialización para crear soluciones de IA de alto impacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-[#9ACA3C] transition-colors"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Tecnologías que Dominamos</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-zinc-800 text-gray-300 px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 