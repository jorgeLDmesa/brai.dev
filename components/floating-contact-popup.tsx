"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Phone, Mail } from "lucide-react"

export default function FloatingContactPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isDismissed, setIsDismissed] = useState(false)
  const [contactType, setContactType] = useState<'email' | 'phone'>('email')

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show popup after scrolling down 40% of viewport height and not dismissed
      if (scrolled > windowHeight * 0.4 && !isDismissed) {
        setIsVisible(true)
      }
    }

    // Check if popup was already dismissed in this session
    const dismissed = sessionStorage.getItem('popup-dismissed')
    if (dismissed) {
      setIsDismissed(true)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    sessionStorage.setItem('popup-dismissed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    const contact = formData.get('contact') as string
    
    const data = {
      contact,
      contactType,
      source: 'floating-popup'
    }

    try {
      const response = await fetch('/api/quick-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setTimeout(() => {
          handleDismiss()
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 400, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 400, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.6
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-[#9ACA3C]/30 rounded-2xl shadow-2xl max-w-sm w-80 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] p-4 relative">
              <button
                onClick={handleDismiss}
                className="absolute top-2 right-2 text-black/60 hover:text-black transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-black" />
                <div>
                  <h3
                    className="text-lg font-bold text-black leading-tight"
                    className="font-montserrat font-bold"
                  >
                    ¿NECESITAS AUTOMATIZAR?
                  </h3>
                  <p className="text-black/80 text-sm">Contáctanos en 5 segundos</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="text-[#9ACA3C] text-2xl mb-2">✓</div>
                  <p className="text-[#9ACA3C] font-semibold">¡Perfecto!</p>
                  <p className="text-gray-300 text-sm">Te contactaremos pronto</p>
                </motion.div>
              ) : (
                <>
                  <div className="flex gap-2 mb-4">
                    <button
                      type="button"
                      onClick={() => setContactType('email')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                        contactType === 'email'
                          ? 'bg-[#9ACA3C]/20 text-[#9ACA3C] border border-[#9ACA3C]/50'
                          : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
                      }`}
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactType('phone')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                        contactType === 'phone'
                          ? 'bg-[#9ACA3C]/20 text-[#9ACA3C] border border-[#9ACA3C]/50'
                          : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
                      }`}
                    >
                      <Phone className="h-4 w-4" />
                      Teléfono
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      name="contact"
                      type={contactType === 'email' ? 'email' : 'tel'}
                      placeholder={contactType === 'email' ? 'tu@empresa.com' : '+57 300 123 4567'}
                      className="w-full px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#9ACA3C] transition-colors text-sm"
                      required
                    />

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black font-bold py-2.5 rounded-lg transition-all hover:from-[#D6F050] hover:to-[#9ACA3C] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      className="font-montserrat font-bold"
                    >
                      {isSubmitting ? 'ENVIANDO...' : 'CONTACTAR AHORA'}
                    </motion.button>

                    {submitStatus === 'error' && (
                      <p className="text-red-400 text-xs text-center">Error al enviar. Intenta de nuevo.</p>
                    )}
                  </form>

                  <p className="text-gray-500 text-xs text-center mt-3">
                    Respuesta en menos de 24h • Sin spam
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}