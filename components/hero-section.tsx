"use client"

import { useState } from "react"
import { PhoneIcon } from "lucide-react"
import Link from "next/link"
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as reactSpring from '@react-spring/three'

export default function HeroSection() {
  const [email, setEmail] = useState("")

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
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
          <button className="flex flex-col justify-center items-center w-8 h-8">
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </header>

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
  Convertimos ideas en productos funcionales, listos para probarse rápido.  
  <br />
  No solo escribimos código, encontramos soluciones reales.  
</p>


        <div className="flex flex-col md:flex-row w-full max-w-2xl">
          <div className="relative flex-1 bg-white/30 rounded-l-full rounded-r-full md:rounded-r-none overflow-hidden mb-4 md:mb-0">
            <div className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none">
              <span className="text-yellow-300 text-xl">👋</span>
            </div>
            <input
              type="email"
              placeholder="Ingresa tu email y te enviaremos algo de 'magia'..."
              className="w-full h-14 bg-white/60 border-0 pl-12 pr-4 text-black placeholder-gray-600 focus:outline-none focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="h-14 px-8 bg-[#D6F050] hover:bg-[#c9e340] text-black font-extrabold text-lg rounded-full md:rounded-l-none md:rounded-r-full transition-colors shadow-md">
            ¡VAMOS! →
          </button>
        </div>
      </div>
    </div>
  )
}

