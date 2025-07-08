"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecentUpdates() {
  return (
    <Card className="border-gray-800 bg-gray-900 transition-all duration-300 hover:border-gray-700">
      <CardHeader className="border-b border-gray-800 pb-4">
        <CardTitle className="text-xl text-white">Actualizaciones Recientes</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-800/50 p-3">
            <p className="font-medium text-white">Esquema de base de datos finalizado</p>
            <p className="text-xs text-gray-400">hace 2 días</p>
          </div>
          <div className="rounded-lg bg-gray-800/50 p-3">
            <p className="font-medium text-white">Endpoints de API implementados</p>
            <p className="text-xs text-gray-400">hace 4 días</p>
          </div>
          <div className="rounded-lg bg-gray-800/50 p-3">
            <p className="font-medium text-white">Diseño de UI aprobado</p>
            <p className="text-xs text-gray-400">hace 1 semana</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 