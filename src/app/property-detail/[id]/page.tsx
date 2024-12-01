"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, MapPin, BedDouble, Bath, Square, Calendar, Phone, Mail } from "lucide-react";
import { fetchFeaturedProperties } from "@/app/services/propertiesService";
import Link from "next/link";



export default function PropertyDetail() {
  const { id } = useParams(); // Obtener el ID de la propiedad desde la URL
  const properties = fetchFeaturedProperties(); // Servicio para obtener propiedades
  const property = properties.find((prop) => prop.id === Number(id)); // Buscar propiedad por ID

  const [mainImage, setMainImage] = useState(property?.imagesurls[0] || "/placeholder.svg");

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold">Propiedad no encontrada</h1>
      </div>
    );
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
        <h2 className="text-3xl font-bold mb-6">{property.title}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Imagen principal de la propiedad"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="flex space-x-2 mb-6 overflow-x-auto">
              {property.imagesurls.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Imagen ${index + 1}`}
                  className="w-24 h-24 object-cover rounded cursor-pointer"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>

            <Tabs defaultValue="descripcion" className="mb-6">
              <TabsList>
                <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                <TabsTrigger value="caracteristicas">Características</TabsTrigger>
                <TabsTrigger value="ubicacion">Ubicación</TabsTrigger>
              </TabsList>
              <TabsContent value="descripcion">
                <Card>
                  <CardContent className="pt-6">
                    <p>{property.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="caracteristicas">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="grid grid-cols-2 gap-4">
                      <li className="flex items-center">
                        <BedDouble className="mr-2" /> {property.bedrooms} Habitaciones
                      </li>
                      <li className="flex items-center">
                        <Bath className="mr-2" /> {property.bathrooms} Baños
                      </li>
                      <li className="flex items-center">
                        <Square className="mr-2" /> {property.area} m²
                      </li>
                      <li className="flex items-center">
                        <Calendar className="mr-2" /> Construida en {property.yearBuilt}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ubicacion">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="mr-2" />
                      <span>{property.location}</span>
                    </div>
                    <img
                      src="/placeholder.svg?height=300&width=600&text=Mapa"
                      alt="Mapa de ubicación"
                      className="w-full h-[300px] object-cover rounded"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">{property.price}</h3>
                <Button className="w-full mb-2">Contactar al vendedor</Button>
                <Button variant="outline" className="w-full">
                  Agendar visita
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Información del vendedor</h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Phone className="mr-2" /> {property.contact.phone}
                  </p>
                  <p className="flex items-center">
                    <Mail className="mr-2" /> {property.contact.email}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-muted mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 InmobiliariaApp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
