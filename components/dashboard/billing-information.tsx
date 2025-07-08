"use client"

import { Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function BillingInformation() {
  return (
    <Collapsible className="w-full">
      <Card className="border-gray-800 bg-gray-900">
        <CardHeader className="border-b border-gray-800 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl text-white">Información de Facturación</CardTitle>
              <CardDescription className="text-gray-400">
                Ver tus facturas e historial de pagos
              </CardDescription>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Alternar sección de facturación</span>
              </Button>
            </CollapsibleTrigger>
          </div>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="pt-6">
            <div className="mb-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-gray-800/50 p-4">
                <h3 className="text-sm font-medium text-gray-400">Valor Total del Proyecto</h3>
                <p className="mt-1 text-2xl font-bold text-white">$12,500.00</p>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-4">
                <h3 className="text-sm font-medium text-gray-400">Pagado hasta la Fecha</h3>
                <p className="mt-1 text-2xl font-bold text-green-400">$5,000.00</p>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-4">
                <h3 className="text-sm font-medium text-gray-400">Saldo Restante</h3>
                <p className="mt-1 text-2xl font-bold text-white">$7,500.00</p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900">
              <div className="border-b border-gray-800 p-4">
                <h3 className="font-medium text-white">Historial de Facturas</h3>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableHead className="text-gray-400">Factura #</TableHead>
                      <TableHead className="text-gray-400">Fecha</TableHead>
                      <TableHead className="text-gray-400">Monto</TableHead>
                      <TableHead className="text-gray-400">Estado</TableHead>
                      <TableHead className="text-right text-gray-400">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableCell className="font-medium text-white">FAC-001</TableCell>
                      <TableCell className="text-gray-400">1 Mayo, 2025</TableCell>
                      <TableCell className="text-white">$2,500.00</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-green-900/30 px-2 py-1 text-xs font-medium text-green-400">
                          Pagado
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 gap-1 text-gray-400 hover:text-white">
                          <Download className="h-4 w-4" />
                          <span>PDF</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableCell className="font-medium text-white">FAC-002</TableCell>
                      <TableCell className="text-gray-400">1 Junio, 2025</TableCell>
                      <TableCell className="text-white">$2,500.00</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-green-900/30 px-2 py-1 text-xs font-medium text-green-400">
                          Pagado
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 gap-1 text-gray-400 hover:text-white">
                          <Download className="h-4 w-4" />
                          <span>PDF</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableCell className="font-medium text-white">FAC-003</TableCell>
                      <TableCell className="text-gray-400">1 Julio, 2025</TableCell>
                      <TableCell className="text-white">$2,500.00</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-yellow-900/30 px-2 py-1 text-xs font-medium text-yellow-400">
                          Pendiente
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 gap-1 text-gray-400 hover:text-white">
                          <Download className="h-4 w-4" />
                          <span>PDF</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableCell className="font-medium text-white">FAC-004</TableCell>
                      <TableCell className="text-gray-400">1 Agosto, 2025</TableCell>
                      <TableCell className="text-white">$2,500.00</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-gray-800 px-2 py-1 text-xs font-medium text-gray-400">
                          Próximo
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" disabled className="h-8 gap-1 text-gray-600">
                          <Download className="h-4 w-4" />
                          <span>PDF</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableCell className="font-medium text-white">FAC-005</TableCell>
                      <TableCell className="text-gray-400">1 Septiembre, 2025</TableCell>
                      <TableCell className="text-white">$2,500.00</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-gray-800 px-2 py-1 text-xs font-medium text-gray-400">
                          Próximo
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" disabled className="h-8 gap-1 text-gray-600">
                          <Download className="h-4 w-4" />
                          <span>PDF</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="mt-6">
              <div className="rounded-lg border border-gray-800 bg-gray-800/30 p-4">
                <h3 className="mb-2 font-medium text-white">Próximo Pago</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Fecha de Vencimiento</p>
                    <p className="font-medium text-white">15 Julio, 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Monto</p>
                    <p className="font-medium text-white">$2,500.00</p>
                  </div>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">Realizar Pago</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
} 