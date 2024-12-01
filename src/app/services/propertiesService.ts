export interface Property {
    id: number;
    title: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    price: string;
    imageUrl: string;
  }
  
  export const fetchFeaturedProperties = () => [
    {
        id: 1,
        title: "Casa Moderna en Ciudad 1",
        description: "Hermosa casa con amplios espacios y acabados modernos.",
        imagesurls: ["https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623066.jpg",
             "https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623069.jpg",
              "https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623061.jpg"],
        mainimage: "https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623067.jpg?isFirstImage=true",
        bedrooms: 3,
        bathrooms: 2,
        area: 150,
        yearBuilt: 2020,
        location: "Calle Principal 123, Ciudad, País",
        price: "USD 250,000",
        type:"sale",
        contact: {
          phone: "+1 234 567 890",
          email: "vendedor@ejemplo.com",
        },
      },


    {
        id: 2,
        title: "Casa Moderna en Ciudad 1",
        description: "Hermosa casa con amplios espacios y acabados modernos.",
        imagesurls: ["https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623066.jpg",
             "https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623069.jpg",
              "https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623061.jpg"],
        mainimage: "https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623067.jpg?isFirstImage=true",
        bedrooms: 3,
        bathrooms: 2,
        area: 150,
        yearBuilt: 2020,
        location: "Calle Principal 123, Ciudad, País",
        price: "$250,000",
        type:"sale",
        contact: {
          phone: "+1 234 567 890",
          email: "vendedor@ejemplo.com",
        },
      },

      {
        id: 3,
        title: "Casa Moderna en Ciudad 1",
        description: "Hermosa casa con amplios espacios y acabados modernos.",
        imagesurls: ["https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623066.jpg",
             "https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623069.jpg",
              "https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623061.jpg"],
        mainimage: "https://imgar.zonapropcdn.com/avisos/resize/1/00/52/69/34/12/1200x1200/1895623067.jpg?isFirstImage=true",
        bedrooms: 3,
        bathrooms: 2,
        area: 150,
        yearBuilt: 2020,
        location: "Calle Principal 123, Ciudad, País",
        price: "$250,000",
        type:"sale",
        contact: {
          phone: "+1 234 567 890",
          email: "vendedor@ejemplo.com",
        },
      },

    // Más propiedades
  ];