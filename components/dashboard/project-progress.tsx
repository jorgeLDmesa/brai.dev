"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Define types for progress data
type ProgressItem = {
  id: string;
  title: string;
  target: number;
  color: string;
  status: string;
  icon?: string;
  isOverall?: boolean;
}

type ProgressState = {
  [key: string]: number;
}

// Progress data structure
const progressData: ProgressItem[] = [
  {
    id: "overall",
    title: "Progreso General",
    target: 45,
    color: "bg-gradient-to-r from-indigo-500 to-purple-600",
    status: "",
    isOverall: true
  },
  {
    id: "planning",
    title: "Planificación",
    target: 100,
    color: "bg-green-500",
    status: "Completado el 15 de Mayo, 2025",
    icon: "bg-green-500"
  },
  {
    id: "design",
    title: "Diseño",
    target: 80,
    color: "bg-blue-500",
    status: "En revisión final",
    icon: "bg-green-500"
  },
  {
    id: "development",
    title: "Desarrollo",
    target: 35,
    color: "bg-yellow-500",
    status: "Fase activa",
    icon: "bg-yellow-500"
  },
  {
    id: "testing",
    title: "Pruebas",
    target: 10,
    color: "bg-orange-500",
    status: "Pruebas iniciales en progreso",
    icon: "bg-orange-500"
  },
  {
    id: "deployment",
    title: "Implementación",
    target: 0,
    color: "bg-purple-500",
    status: "Programado para Septiembre 2025",
    icon: "bg-gray-500"
  }
]

export default function ProjectProgress() {
  // Progress state as a unified object
  const [progress, setProgress] = useState<ProgressState>(
    progressData.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  )

  // Animate progress bars on load
  useEffect(() => {
    const animationDuration = 1500
    const steps = 60
    const interval = animationDuration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progressRate = currentStep / steps

      // Update all progress items at once
      setProgress(prev => {
        const newProgress = { ...prev }
        progressData.forEach(item => {
          newProgress[item.id] = Math.min(item.target * progressRate, item.target)
        })
        return newProgress
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="border-gray-800 bg-gray-900">
      <CardHeader className="border-b border-gray-800 pb-4">
        <CardTitle className="text-2xl text-white">Progreso del Proyecto</CardTitle>
        <CardDescription className="text-gray-400">
          Estado actual del desarrollo con actualizaciones en tiempo real
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Overall Progress */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="text-lg font-medium text-white">Progreso General</div>
              <div className="text-lg font-medium text-white">{Math.round(progress.overall)}%</div>
            </div>
            <Progress
              value={progress.overall}
              className="h-3 bg-gray-800"
              indicatorClassName="bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000 ease-out"
            />
          </div>

          {/* Individual Progress Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {progressData.filter(item => !item.isOverall).map(item => (
              <div key={item.id} className="space-y-2 rounded-lg bg-gray-800/50 p-4 transition-all duration-300 hover:bg-gray-800">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${item.icon}`}></div>
                    <span className="font-medium text-white">{item.title}</span>
                  </div>
                  <div className="font-medium text-white">{Math.round(progress[item.id])}%</div>
                </div>
                <Progress
                  value={progress[item.id]}
                  className="h-2 bg-gray-700"
                  indicatorClassName={`${item.color} transition-all duration-1000 ease-out`}
                />
                <p className="text-xs text-gray-400">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 