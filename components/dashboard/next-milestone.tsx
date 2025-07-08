"use client"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NextMilestone() {
  return (
    <Card className="border-gray-800 bg-gray-900 transition-all duration-300 hover:border-gray-700">
      <CardHeader className="border-b border-gray-800 pb-4">
        <CardTitle className="text-xl text-white">Próximo Hito</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="rounded-lg bg-gray-800/50 p-4">
          <h3 className="text-lg font-semibold text-white">Prototipo Frontend</h3>
          <div className="mt-2 flex items-center text-sm text-gray-400">
            <span className="mr-2">Fecha límite:</span>
            <span className="font-medium text-white">5 de Julio, 2025</span>
            <span className="ml-auto rounded-full bg-yellow-900/30 px-2 py-1 text-xs font-medium text-yellow-400">
              En Progreso
            </span>
          </div>
          <Progress value={70} className="mt-4 h-2 bg-gray-700" indicatorClassName="bg-yellow-500" />
          <p className="mt-4 text-sm text-gray-400">
            Prototipo interactivo que muestra la funcionalidad central y los flujos de usuario.
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 