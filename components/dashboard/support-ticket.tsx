"use client"

import type React from "react"

import { useState } from "react"
import { TicketIcon, Plus, MessageSquare, AlertCircle, CheckCircle2, Clock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"

interface Ticket {
  id: string
  subject: string
  message: string
  status: "open" | "in-progress" | "resolved"
  priority: "low" | "medium" | "high"
  date: string
}

export default function SupportTickets() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium")

  // Sample existing tickets
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: "TKT-001",
      subject: "Problema de inicio de sesión en dispositivos móviles",
      message: "No puedo iniciar sesión usando mi iPhone. El botón de inicio de sesión no responde al tocarlo.",
      status: "in-progress",
      priority: "high",
      date: "25 Junio, 2025",
    },
    {
      id: "TKT-002",
      subject: "Solicitud de función: Alternador de modo oscuro",
      message: "¿Sería posible añadir un interruptor para cambiar entre modo claro y oscuro?",
      status: "open",
      priority: "low",
      date: "20 Junio, 2025",
    },
    {
      id: "TKT-003",
      subject: "Los datos del panel no se actualizan",
      message: "Los porcentajes de progreso en el panel no se han actualizado en 2 días.",
      status: "resolved",
      priority: "medium",
      date: "15 Junio, 2025",
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create new ticket
    const newTicket: Ticket = {
      id: `TKT-00${tickets.length + 1}`,
      subject,
      message,
      status: "open",
      priority,
      date: new Date().toLocaleDateString("es-ES", { month: "long", day: "numeric", year: "numeric" }),
    }

    // Add to tickets array
    setTickets([newTicket, ...tickets])

    // Reset form
    setSubject("")
    setMessage("")
    setPriority("medium")
    setIsFormOpen(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <Badge variant="outline" className="border-blue-500 bg-blue-500/10 text-blue-500">
            <Clock className="mr-1 h-3 w-3" />
            Abierto
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="outline" className="border-yellow-500 bg-yellow-500/10 text-yellow-500">
            <AlertCircle className="mr-1 h-3 w-3" />
            En Progreso
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="outline" className="border-green-500 bg-green-500/10 text-green-500">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Resuelto
          </Badge>
        )
      default:
        return null
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "low":
        return (
          <Badge variant="outline" className="border-gray-500 bg-gray-500/10 text-gray-400">
            Baja
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="border-blue-500 bg-blue-500/10 text-blue-500">
            Media
          </Badge>
        )
      case "high":
        return (
          <Badge variant="outline" className="border-red-500 bg-red-500/10 text-red-500">
            Alta
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <section>
      <Card className="border-gray-800 bg-gray-900">
        <CardHeader className="border-b border-gray-800 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-2xl text-white">
                <TicketIcon className="h-5 w-5 text-indigo-400" />
                Tickets de Soporte
              </CardTitle>
              <CardDescription className="text-gray-400">Envía y realiza seguimiento de solicitudes de soporte</CardDescription>
            </div>
            <Button onClick={() => setIsFormOpen(!isFormOpen)} className="gap-1 bg-indigo-600 hover:bg-indigo-700">
              <Plus className="h-4 w-4" />
              Nuevo Ticket
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {/* New Ticket Form */}
          <Collapsible open={isFormOpen} onOpenChange={setIsFormOpen}>
            <CollapsibleContent className="mb-6 space-y-4">
              <div className="rounded-lg border border-gray-800 bg-gray-800/30 p-4">
                <h3 className="mb-4 text-lg font-medium text-white">Crear Nuevo Ticket de Soporte</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-400">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Breve descripción del problema"
                      required
                      className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Descripción detallada de tu problema o solicitud"
                      required
                      className="min-h-[120px] border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="priority" className="text-sm font-medium text-gray-400">
                      Prioridad
                    </label>
                    <Select value={priority} onValueChange={(value: "low" | "medium" | "high") => setPriority(value)}>
                      <SelectTrigger className="border-gray-700 bg-gray-800 text-white">
                        <SelectValue placeholder="Seleccionar prioridad" />
                      </SelectTrigger>
                      <SelectContent className="border-gray-700 bg-gray-800 text-white">
                        <SelectItem value="low">Baja</SelectItem>
                        <SelectItem value="medium">Media</SelectItem>
                        <SelectItem value="high">Alta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsFormOpen(false)}
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Cancelar
                    </Button>
                    <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                      Enviar Ticket
                    </Button>
                  </div>
                </form>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Tickets List */}
          <div className="space-y-4">
            {tickets.length === 0 ? (
              <div className="rounded-lg border border-dashed border-gray-700 bg-gray-800/30 p-8 text-center">
                <MessageSquare className="mx-auto h-10 w-10 text-gray-500" />
                <h3 className="mt-4 text-lg font-medium text-white">No hay tickets aún</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Crea tu primer ticket de soporte para obtener ayuda de nuestro equipo.
                </p>
                <Button onClick={() => setIsFormOpen(true)} className="mt-4 gap-1 bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="h-4 w-4" />
                  Nuevo Ticket
                </Button>
              </div>
            ) : (
              tickets.map((ticket) => (
                <Collapsible key={ticket.id} className="rounded-lg border border-gray-800 bg-gray-800/30">
                  <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-800/50">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-900/30">
                        <TicketIcon className="h-5 w-5 text-indigo-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-400">{ticket.id}</span>
                          {getStatusBadge(ticket.status)}
                        </div>
                        <h4 className="font-medium text-white">{ticket.subject}</h4>
                      </div>
                    </div>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="border-t border-gray-800 p-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">{ticket.date}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">Prioridad:</span>
                          {getPriorityBadge(ticket.priority)}
                        </div>
                      </div>
                      <p className="mt-3 text-white">{ticket.message}</p>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                          Responder
                        </Button>
                        {ticket.status !== "resolved" && (
                          <Button className="bg-green-600 hover:bg-green-700">Marcar como Resuelto</Button>
                        )}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))
            )}
          </div>

          {tickets.length > 0 && (
            <div className="mt-6 flex justify-center">
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                Ver todos los tickets
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}

