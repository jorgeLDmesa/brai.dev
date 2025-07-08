"use client"

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import ProjectProgress from "@/components/dashboard/project-progress"
import NextMilestone from "@/components/dashboard/next-milestone"
import RecentUpdates from "@/components/dashboard/recent-updates"
import EconomicProposal from "@/components/dashboard/economic-proposal"
import SupportTickets from "@/components/dashboard/support-ticket"
import BillingInformation from "@/components/dashboard/billing-information"

export default function Dashboard() {
  return (
    <div className="min-h-screen text-gray-100 relative">
      {/* ShaderGradient Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <ShaderGradientCanvas
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
          }}
        >
          <ShaderGradient
            control='query'
            urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false&zoomOut=false'
          />
        </ShaderGradientCanvas>
      </div>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Panel de Proyecto</h1>
            <div className="text-right">
              <h2 className="text-xl font-semibold text-white">Cliente: Acme Corporation</h2>
              <p className="text-gray-400">Proyecto: Rediseño del Sitio Web</p>
            </div>
          </div>
        </header>

        <main className="space-y-8">
          {/* Progress Section with Components */}
          <section className="space-y-6">
            <ProjectProgress />

            <div className="grid gap-6 md:grid-cols-2">
              <NextMilestone />
              <RecentUpdates />
            </div>
          </section>

          {/* Economic Proposal Section */}
          <section>
            <EconomicProposal />
          </section>

          <section>
            <SupportTickets />
          </section>

          {/* Billing Section */}
          <section>
            <BillingInformation />
          </section>
        </main>

        <footer className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© 2025 DevAgency. Todos los derechos reservados.</p>
          <p className="mt-1">Última actualización: 28 de Junio, 2025</p>
        </footer>
      </div>
    </div>
  )
}

