"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

type TestimonialProps = {
  videoUrl: string
  quote: string
  name: string
  company: string
  position: string
}

const testimonials: TestimonialProps[] = [
  {
    videoUrl: "https://expertos-tematicos-papeleo.s3.us-east-2.amazonaws.com/WhatsApp+Video+2025-03-14+at+18.21.38.mp4",
    quote:
      "King Kong transformó completamente nuestro negocio. Aumentamos nuestros ingresos en un 300% en solo 6 meses. Su enfoque estratégico y su atención al detalle son incomparables.",
    name: "Carlos Rodríguez",
    company: "TechSolutions",
    position: "CEO",
  },
  {
    videoUrl: "https://expertos-tematicos-papeleo.s3.us-east-2.amazonaws.com/WhatsApp+Video+2025-03-14+at+18.21.38.mp4",
    quote:
      "Nunca pensé que podríamos escalar tan rápido. King Kong nos ayudó a optimizar nuestras campañas y ahora estamos generando más leads de los que podemos manejar.",
    name: "María González",
    company: "InnovateMKT",
    position: "Directora de Marketing",
  },
  {
    videoUrl: "https://expertos-tematicos-papeleo.s3.us-east-2.amazonaws.com/WhatsApp+Video+2025-03-14+at+18.21.38.mp4",
    quote:
      "El ROI que hemos obtenido trabajando con King Kong ha superado todas nuestras expectativas. Su equipo realmente entiende cómo hacer crecer un negocio de manera sostenible.",
    name: "Alejandro Méndez",
    company: "GrowthPartners",
    position: "Fundador",
  },
]

function TestimonialCard({ videoUrl, quote, name, company, position }: TestimonialProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-zinc-900 rounded-xl overflow-hidden shadow-xl"
    >
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          onClick={togglePlay}
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                togglePlay()
              }}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              {isPlaying ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white" />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleMute()
              }}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              {isMuted ? <VolumeX className="h-6 w-6 text-white" /> : <Volume2 className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <blockquote className="mb-4 text-lg text-gray-200 italic">"{quote}"</blockquote>
        <div className="flex items-center">
          <div
            className="h-12 w-12 rounded-full bg-[#9ACA3C] flex items-center justify-center text-black font-bold"
            style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
          >
            {name.charAt(0)}
          </div>
          <div className="ml-4">
            <p
              className="font-bold text-white"
              style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
            >
              {name}
            </p>
            <p className="text-sm text-gray-400">
              {position}, {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
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
            CASOS<span className="text-[#9ACA3C]">*</span> DE ÉXITO
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestros clientes están viendo un crecimiento exponencial. Escucha sus historias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              videoUrl={testimonial.videoUrl}
              quote={testimonial.quote}
              name={testimonial.name}
              company={testimonial.company}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

