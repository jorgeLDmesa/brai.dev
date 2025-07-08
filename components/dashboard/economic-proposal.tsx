"use client"

import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EconomicProposal() {
  return (
    <Card className="border-gray-800 bg-gray-900">
      <CardHeader className="border-b border-gray-800 pb-4">
        <CardTitle className="text-2xl text-white">Propuesta Económica</CardTitle>
        <CardDescription className="text-gray-400">
          Accede a la propuesta económica y documentos relacionados de tu proyecto
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-800/30 p-4 transition-all duration-300 hover:bg-gray-800/70">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-900/30">
            <FileText className="h-6 w-6 text-indigo-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium text-white">Propuesta Económica del Proyecto</h3>
            <p className="text-sm text-gray-400">Desglose financiero completo y calendario de pagos</p>
          </div>
          <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700">
            <Download className="h-4 w-4" />
            Descargar PDF
          </Button>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-800 bg-gray-800/30 p-4 transition-all duration-300 hover:bg-gray-800/70">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30">
                <FileText className="h-5 w-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-white">Documento de Contrato</h4>
                <p className="text-xs text-gray-400">PDF • 1.2 MB</p>
              </div>
              <Button variant="ghost" size="sm" className="h-8 gap-1 text-gray-400 hover:text-white">
                <Download className="h-4 w-4" />
                <span>Ver</span>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-800/30 p-4 transition-all duration-300 hover:bg-gray-800/70">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900/30">
                <FileText className="h-5 w-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-white">Especificaciones del Proyecto</h4>
                <p className="text-xs text-gray-400">PDF • 3.8 MB</p>
              </div>
              <Button variant="ghost" size="sm" className="h-8 gap-1 text-gray-400 hover:text-white">
                <Download className="h-4 w-4" />
                <span>Ver</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 