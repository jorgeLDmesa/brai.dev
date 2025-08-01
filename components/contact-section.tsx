"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, CheckCircle, Rocket } from "lucide-react"

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
            SOLICITA TU<span className="text-[#9ACA3C]">*</span> AUDITORÍA GRATUITA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre tu potencial de automatización en 48 horas. Sin compromiso, resultados garantizados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
              {/* Header del formulario */}
              <div className="bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] p-6 text-center">
                <h3
                  className="text-2xl font-bold text-black mb-2"
                  style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
                >
                  🚀 CONTÁCTANOS
                </h3>
                <p className="text-black/80">Auditoría gratuita o consulta general</p>
              </div>

              <div className="p-8">
                <form className="space-y-6">
                  {/* Tipo de consulta */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <label className="text-white font-semibold block">Tipo de consulta *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex items-center p-3 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-[#9ACA3C] transition-colors cursor-pointer">
                        <input
                          type="radio"
                          name="consultationType"
                          value="audit"
                          className="mr-3 text-[#9ACA3C]"
                          defaultChecked
                        />
                        <span className="text-white">Auditoría Gratuita</span>
                      </label>
                      <label className="flex items-center p-3 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-[#9ACA3C] transition-colors cursor-pointer">
                        <input type="radio" name="consultationType" value="general" className="mr-3 text-[#9ACA3C]" />
                        <span className="text-white">Consulta General</span>
                      </label>
                    </div>
                  </motion.div>

                  {/* Información personal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <label htmlFor="name" className="text-white font-semibold block">
                        Nombre Completo *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Tu nombre completo"
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#9ACA3C] transition-colors"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <label htmlFor="email" className="text-white font-semibold block">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="tu@empresa.com"
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#9ACA3C] transition-colors"
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <label htmlFor="company" className="text-white font-semibold block">
                        Empresa
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Nombre de tu empresa"
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#9ACA3C] transition-colors"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <label htmlFor="phone" className="text-white font-semibold block">
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+57 300 123 4567"
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#9ACA3C] transition-colors"
                      />
                    </motion.div>
                  </div>

                  {/* Mensaje */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <label htmlFor="message" className="text-white font-semibold block">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      placeholder="Para auditoría: describe el proceso que quieres automatizar. Para consulta general: cuéntanos en qué podemos ayudarte."
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#9ACA3C] transition-colors resize-none"
                      rows={5}
                      required
                    />
                  </motion.div>

                  {/* Botón de envío */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="pt-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black font-bold text-lg py-4 rounded-full transition-all hover:from-[#D6F050] hover:to-[#9ACA3C] shadow-lg hover:shadow-xl"
                      style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
                    >
                      ENVIAR SOLICITUD
                    </motion.button>
                  </motion.div>

                  {/* Información de respuesta */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center pt-2"
                  >
                    <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-[#9ACA3C]" />
                      Respuesta garantizada en menos de 24 horas
                    </p>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Información principal */}
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8">
              <h3
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
              >
                INFORMACIÓN<span className="text-[#9ACA3C]">*</span> DE CONTACTO
              </h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  <Mail className="w-8 h-8 text-[#9ACA3C] mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className="text-xl font-bold text-white mb-1"
                      style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
                    >
                      Email
                    </h4>
                    <p className="text-gray-400 mb-2">Nuestro canal de comunicación preferido</p>
                    <a href="mailto:hola@brai.dev" className="text-[#9ACA3C] hover:text-[#D6F050] transition-colors">
                      hola@brai.dev
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  <Phone className="w-8 h-8 text-[#9ACA3C] mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className="text-xl font-bold text-white mb-1"
                      style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
                    >
                      Teléfono
                    </h4>
                    <p className="text-gray-400 mb-2">Para consultas urgentes, llámanos</p>
                    <a href="tel:+573182243673" className="text-[#9ACA3C] hover:text-[#D6F050] transition-colors">
                      +57 318 224 36 73
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  <MapPin className="w-8 h-8 text-[#9ACA3C] mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className="text-xl font-bold text-white mb-1"
                      style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
                    >
                      Oficina
                    </h4>
                    <p className="text-gray-400 mb-2">Medellín, Colombia</p>
                    <p className="text-gray-500 text-sm">(Solo visitas con cita previa)</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Garantías */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-700 p-6"
            >
              <h4
                className="text-xl font-bold text-white mb-4 flex items-center gap-2"
                style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
              >
                <Rocket className="h-6 w-6 text-[#9ACA3C]" />
                NUESTRAS GARANTÍAS
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#9ACA3C] flex-shrink-0" />
                  <span className="text-gray-300">Respuesta en menos de 24 horas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#9ACA3C] flex-shrink-0" />
                  <span className="text-gray-300">Auditoría completamente gratuita</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#9ACA3C] flex-shrink-0" />
                  <span className="text-gray-300">Sin compromiso de contratación</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#9ACA3C] flex-shrink-0" />
                  <span className="text-gray-300">Análisis personalizado y detallado</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
