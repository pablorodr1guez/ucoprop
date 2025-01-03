"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Home } from "lucide-react";
import { fetchFeaturedProperties } from "./services/propertiesService";
import Link from "next/link";

export default function PaginaPrincipal() {
  const properties = fetchFeaturedProperties();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Home className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">UcoProp</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
          <nav className="hidden md:flex space-x-4">
          <Link href={`/contact-me`}>
            <Button variant="ghost" className="font-bold bg-primary text-white">Publica tu propiedad</Button>
          </Link>
</nav>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
   
        <section className="relative flex items-center justify-start h-80 md:h-[70vh] bg-cover bg-center mb-8" style={{ backgroundImage: "url('https://elportaldemendoza.com/wp-content/uploads/2015/07/Vall-de-Uco-Mendoza.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-left text-white px-4 md:px-8 md:w-1/2 flex flex-col justify-center items-start">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a UcoProp</h2>
            <p className="text-xl md:text-2xl mb-8">Descubre tu hogar ideal en el Valle de Uco</p>
            <div className="flex flex-col items-start space-y-4">

            <Link href={`/properties-sale`}>
              <Button size="lg" className="w-full text-lg">Propiedades en venta</Button>
            </Link>
            <Link href={`/properties-rent`}>
              <Button size="lg" className="w-full text-lg">Propiedades en alquiler</Button>
            </Link>

            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Propiedades destacadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Card key={property.id}>
                <CardHeader>
                  <CardTitle>{property.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={property.mainimage}
                    alt={`Propiedad ${property.id}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-muted-foreground">
                    {property.bedrooms} habitaciones • {property.bathrooms} baños • {property.area}m²
                  </p>
                  <p className="font-bold text-lg mt-2">{property.price}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/property-detail/${property.id}`}>
                    <Button className="w-full">Ver detalles</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-muted mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 UcoProp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
