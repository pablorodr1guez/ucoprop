'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Home, Phone, Mail, MapPin } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import Link from 'next/link'

export default function ContactMePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    })
    // Resetear el formulario
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

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
          <Card>
            <CardHeader>
              <CardTitle>Formulario de Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center"><Phone className="mr-2" aria-hidden="true" /> +54 9 261 2541365</p>
                <p className="flex items-center"><Mail className="mr-2" aria-hidden="true" /> contacto@ucoprop.com</p>
                <p className="flex items-center"><MapPin className="mr-2" aria-hidden="true" /> Rio Diamante 426, Tunuyán, Mendoza</p>
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