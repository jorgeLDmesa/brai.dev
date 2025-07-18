"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-black" id="contact">
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
            HABLEMOS DE<span className="text-[#9ACA3C]">*</span> TU PROYECTO
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Listo para llevar tu negocio al siguiente nivel con IA? Completa el formulario o contáctanos directamente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6 bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre completo" className="bg-zinc-800 border-zinc-700 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input id="email" type="email" placeholder="Tu correo electrónico" className="bg-zinc-800 border-zinc-700 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-300">Asunto</Label>
                <Input id="subject" placeholder="¿En qué podemos ayudarte?" className="bg-zinc-800 border-zinc-700 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">Mensaje</Label>
                <Textarea id="message" placeholder="Describe tu proyecto o consulta aquí..." className="bg-zinc-800 border-zinc-700 text-white" rows={5} />
              </div>
              <Button type="submit" className="w-full bg-[#9ACA3C] text-black font-bold text-lg py-6 hover:bg-white transition-colors">
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white space-y-8 pt-8"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-8 h-8 text-[#9ACA3C] mt-1" />
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-gray-400">Nuestro canal de comunicación preferido.</p>
                <a href="mailto:hola@brai.dev" className="text-[#9ACA3C] hover:underline">hola@brai.dev</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-[#9ACA3C] mt-1" />
              <div>
                <h3 className="text-xl font-bold">Teléfono</h3>
                <p className="text-gray-400">Para consultas urgentes, llámanos.</p>
                <a href="tel:+573182243673" className="text-[#9ACA3C] hover:underline">+57 318 224 36 73</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-[#9ACA3C] mt-1" />
              <div>
                <h3 className="text-xl font-bold">Oficina</h3>
                <p className="text-gray-400">Medellín, Colombia</p>
                <p className="text-gray-500">(Solo visitas con cita previa)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 