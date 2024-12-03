export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: string;
  mainimage: string;
  imagesurls: string[];
  yearBuilt: number;
  type: "sale" | "rent"; // El tipo puede ser "sale" o "rent"
  contact: {
    phone: string;
    email: string;
  };
}

const propertiesSale: Property[] = [
  {
    id: "casa-a-estrenar-barrio-fenca",
    title: "Casa a estrenar en barrio Fenca",
    description: `✨ Superficie Cubierta: 87 m²
✨ Superficie Total: 220 m²
🛏️ 2 Dormitorios
🍳 Cocina
🍽️ Comedor
🛋️ Living
🌿 Patio Interno
🚿 Baño
🚻 Ante Baño
🚗 Garage
⚡ Todos los servicios (Agua, Luz, Gas, Cloacas)

💰 Precio: $110.000 USD`,
    imagesurls: [
      "https://i.ibb.co/LgLm6WS/Whats-App-Image-2024-11-26-at-12-14-49.jpg",
      "https://i.ibb.co/XzkPwwD/Whats-App-Image-2024-11-26-at-12-14-51.jpg",
      "https://i.ibb.co/0VXmTzK/Whats-App-Image-2024-11-26-at-12-14-49-2.jpg",
      "https://i.ibb.co/RQYGv5b/Whats-App-Image-2024-11-26-at-12-14-51-2.jpg",
      "https://i.ibb.co/4KWv8tN/Whats-App-Image-2024-11-26-at-12-56-01.jpg"
    ],
    mainimage: "https://i.ibb.co/LgLm6WS/Whats-App-Image-2024-11-26-at-12-14-49.jpg",
    bedrooms: 2,
    bathrooms: 1,
    area: 220,
    yearBuilt: 2024,
    location: "Rio Diamante, Tunuyan",
    price: "USD 110,000",
    type: "sale",
    contact: {
      phone: "2612541365",
      email: "pablo_rodr1guez@hotmail.com",
    }
  },

];

const propertiesRent: Property[] = [
 
];
// Función que devuelve todas las propiedades combinadas en una sola lista
export const fetchFeaturedProperties = () => {

  // Combina ambas listas en una sola y la devuelve
  return [...propertiesSale, ...propertiesRent];
};


export const fetchFeaturedPropertiesRent = () => {
  return [...propertiesRent];
};

export const fetchFeaturedPropertiesSale = () => {
  return [...propertiesSale];
};
