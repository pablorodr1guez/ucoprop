'use client'

import Image from 'next/image'
import { Home, Phone, Mail, MapPin, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactMePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center">
          {/* Envuelve el logo y el título con el componente Link */}
          <Link href="/" passHref>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Home className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-2xl font-bold">UcoProp</h1>
            </div>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Publica tu propiedad</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="flex items-center">
                  <Phone className="mr-2" aria-hidden="true" /> +54 9 261 2541365
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2" aria-hidden="true" /> ucoprop.arg@gmail.com
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2" aria-hidden="true" /> Rio Diamante 426, Tunuyán, Mendoza
                </p>
                <Button
                  asChild
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <a
                    href="https://wa.me/5492612541365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <MessageSquare className="mr-2" /> Contactar por WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>¿Por qué publicar con nosotros?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Amplia visibilidad en el Valle de Uco</li>
                  <li>Asesoramiento personalizado</li>
                  <li>Fotografía profesional de tu propiedad</li>
                  <li>Gestión de visitas y negociaciones</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-muted mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 UcoProp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
