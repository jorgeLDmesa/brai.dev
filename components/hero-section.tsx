"use client"

import { useState, useRef } from "react"
import { PhoneIcon, X } from "lucide-react"
import Link from "next/link"
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as reactSpring from '@react-spring/three'

export default function HeroSection() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [phoneError, setPhoneError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [manualApiKey, setManualApiKey] = useState("")
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)

  const validatePhoneNumber = (number: string) => {
    const digits = number.replace(/\D/g, '');
    return digits.length === 10;
  }

  const handleSubmit = () => {
    // Reset errors
    setPhoneError("")
    
    // Validate the phone number format
    const isValid = validatePhoneNumber(phoneNumber);
    
    if (!isValid) {
      setPhoneError("Por favor, ingresa un número de WhatsApp válido con 10 dígitos");
      return;
    }
    
    if (phoneNumber.trim()) {
      setIsDialogOpen(true)
    }
  }

  const handleSaveToSupabase = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);
    
    try {
      // Using the actual Supabase URL from the error message
      const SUPABASE_URL = 'https://hmqbawztffkliwwrqwjb.supabase.co';
      
      // Try to get the API key from environment variables or use the manually entered one
      let SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
      
      // Check if we have the key from environment variables
      if (!SUPABASE_ANON_KEY && !manualApiKey) {
        setShowApiKeyInput(true);
        setIsSubmitting(false);
        setSubmitError("La clave API no está configurada. Por favor, ingrese la clave API para continuar.");
        return;
      }

      // Use the manually entered key if available
      if (manualApiKey) {
        SUPABASE_ANON_KEY = manualApiKey;
      }
      
      if (!SUPABASE_ANON_KEY) {
        throw new Error('API key is required');
      }
      
      console.log("Using API key (first 5 chars):", SUPABASE_ANON_KEY.substring(0, 5) + "...");
      
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/numeros-clientes-pulpo`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            numero: phoneNumber.replace(/\D/g, '')
          })
        }
      );
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Supabase error response:', errorText);
        
        // Special handling for authentication errors
        if (response.status === 401) {
          setShowApiKeyInput(true);
          throw new Error("Error de autenticación: La clave API no es válida");
        }
        
        throw new Error(`Error al guardar el número: ${response.status}`);
      }
      
      setSubmitSuccess(true);
      setPhoneNumber(""); // Clear the input field
      setIsDialogOpen(false); // Close the dialog
    } catch (error) {
      console.error('Error saving phone number:', error);
      if (error instanceof Error) {
        setSubmitError(error.message || "Hubo un problema al guardar tu número. Por favor, intenta de nuevo.");
      } else {
        setSubmitError("Hubo un problema al guardar tu número. Por favor, intenta de nuevo.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'process', label: 'Proceso' },
    { id: 'portfolio', label: 'Portafolio' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'trust', label: 'Confianza' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden" id="hero">
      {/* Background image overlay */}
      {/* <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      /> */}

      {/* ShaderGradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
         <ShaderGradient
            control='query'
            urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false&zoomOut=false'
          />
        </ShaderGradientCanvas>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center">
          <PhoneIcon className="h-5 w-5 text-[#9ACA3C] mr-2" />
          <a href="tel:1-888-303-8580" className="text-white text-sm md:text-base">
            1-888-303-8580
          </a>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="text-[#9ACA3C] font-bold text-2xl md:text-3xl tracking-wider">
            PULPO
          </Link>
        </div>

        <div className="flex items-center">
          <span className="mr-2 text-sm md:text-base">menu</span>
          <button 
            className="flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="relative z-10 w-full max-w-md p-8">
            <button 
              className="absolute top-0 right-0 p-4 text-white/70 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col items-center">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-3xl font-extrabold my-3 py-2 text-white hover:text-[#D6F050] transition-colors duration-200 tracking-wider"
                  style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] px-4 text-center scale-105">
        <h1
          className="text-5xl md:text-7xl lg:text-9xl font-extrabold leading-none tracking-tight mb-4 max-w-5xl"
          style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
        >
          SOLUCIONES<sup>*</sup>
          <br />
          NO SOLO CÓDIGO
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-10 leading-relaxed">
  Creamos productos funcionales en poco tiempo, diseñados para usarse de inmediato.  
  <br />
  No solo programamos, resolvemos problemas reales.  
</p>

        <div className="flex flex-col md:flex-row w-full max-w-2xl">
          <div className="relative flex-1 bg-white/30 rounded-l-full rounded-r-full md:rounded-r-none overflow-hidden mb-4 md:mb-0">
            <div className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none">
              <span className="text-yellow-300 text-xl">👋</span>
            </div>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Compártenos tu WhatsApp y encontremos la mejor solución para ti.."
              className="w-full h-14 bg-white/60 border-0 pl-12 pr-4 text-black placeholder-gray-600 focus:outline-none focus:ring-0"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button 
            className="h-14 px-8 bg-[#D6F050] hover:bg-[#c9e340] text-black font-extrabold text-lg rounded-full md:rounded-l-none md:rounded-r-full transition-colors shadow-md"
            onClick={handleSubmit}
          >
            ¡VAMOS! →
          </button>
        </div>
        {phoneError && (
          <p className="text-red-400 mt-2 text-sm">{phoneError}</p>
        )}
        {submitError && (
          <p className="text-red-400 mt-2 text-sm">{submitError}</p>
        )}
        {submitSuccess && (
          <p className="text-green-400 mt-2 text-sm">¡Tu número ha sido guardado con éxito!</p>
        )}
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsDialogOpen(false)}></div>
          <div className="relative bg-black border border-[#9ACA3C]/50 rounded-2xl p-8 max-w-md w-full z-10 backdrop-blur-lg bg-opacity-80 shadow-xl">
            <button 
              className="absolute top-4 right-4 text-white/70 hover:text-white"
              onClick={() => setIsDialogOpen(false)}
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 text-[#D6F050]">¡Gracias por contactarnos!</h3>
              <p className="mb-6 text-lg leading-relaxed">
                Utilizaremos tu número de WhatsApp para ponernos en contacto contigo y discutir tu proyecto. 
                Nuestros servicios están diseñados para proyectos con presupuestos a partir de 5M COP (1250 USD), 
                aunque adaptamos nuestra propuesta a las necesidades específicas de cada cliente.
              </p>
              
              {showApiKeyInput && (
                <div className="mb-6">
                  <p className="mb-2 text-yellow-300">Para almacenar tu número, necesitamos la clave API (solo para fines de desarrollo):</p>
                  <input
                    type="password"
                    placeholder="Ingresa la clave API de Supabase"
                    className="w-full p-2 mb-2 border border-gray-600 bg-black/60 text-white rounded"
                    value={manualApiKey}
                    onChange={(e) => setManualApiKey(e.target.value)}
                  />
                </div>
              )}
              
              {submitError && (
                <p className="text-red-400 mb-4 text-sm">{submitError}</p>
              )}
              
              <div className="mt-8">
                <button 
                  className={`px-8 py-3 bg-[#D6F050] hover:bg-[#c9e340] text-black font-bold rounded-full transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  onClick={handleSaveToSupabase}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Guardando...' : 'Entendido'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

