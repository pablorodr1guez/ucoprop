'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Pagination from "@/components/pagination/pagination"
import { Home, BedDouble, Bath, Square } from 'lucide-react'
import { fetchFeaturedProperties } from '../services/propertiesService'

export default function PropertyListPage() {
  const [properties, setProperties] = useState<any[]>([]) // Estado para almacenar las propiedades
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 9

  // Llamar a la función fetchFeaturedProperties cuando se carga el componente
  useEffect(() => {
    const getProperties = async () => {
      try {
        const fetchedProperties = await fetchFeaturedProperties();
        setProperties(fetchedProperties); // Actualizar el estado con las propiedades obtenidas
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    }

    getProperties();
  }, []); // Se ejecuta solo una vez, al montar el componente

  // Calcular las propiedades para mostrar en la página actual
  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" passHref>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Home className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-2xl font-bold">UcoProp</h1>
          </div>
        </Link>
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
        <h1 className="text-3xl font-bold mb-6">Propiedades en venta</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProperties.map((property) => (
            <Card key={property.id}>
              <CardHeader>
                <CardTitle>{property.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={property.mainimage} // Aquí se usa la URL de la imagen obtenida del API
                  alt={property.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">{'Precio'}</span>
                  <span className="font-bold text-lg">{property.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="flex items-center"><BedDouble className="mr-1 h-4 w-4" /> {property.bedrooms}</span>
                  <span className="flex items-center"><Bath className="mr-1 h-4 w-4" /> {property.bathrooms}</span>
                  <span className="flex items-center"><Square className="mr-1 h-4 w-4" /> {property.area} m²</span>
                </div>
              </CardContent>
              <CardFooter>

              <Link className="w-full" href={`/property-detail/${property.id}`}>
                <Button className="w-full">Ver detalles</Button>
              </Link>
                
              </CardFooter>
            </Card>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalCount={properties.length}
          pageSize={propertiesPerPage}
          onPageChange={paginate}
        />
      </main>

      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 UcoProp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
