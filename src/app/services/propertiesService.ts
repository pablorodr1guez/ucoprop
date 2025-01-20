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
      "https://lh3.googleusercontent.com/pw/AP1GczOKKgAXDTZYKNxQMSWBOh79Dx3jThz3DFcKcrRMHq_-CrYkO2M3u6wN4Zj_kl0AKpdoGei6Wu8oDL2oBvzVMCxJhJdRKFtPQs7SeAJQVqaZLWZq9-ExVu5QicDrioCqGpbsLlOewNJNSD_CiKebeY22=w1080-h1080-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOUXLG2ahEQERRybVM0xz5msO_H7Nerh8eymT5_C6tWzTgwJFLsZFWOACBRBh48njYAxbPc8itKFW0mOBvq-0pXV2bQ2AR8FJZw4UEZH1NaLx536nhrPzVqT20AlHVEMl_PLfDbyIVxoLcWIriZY3N4=w2880-h1620-s-no-gm",
      "https://lh3.googleusercontent.com/pw/AP1GczM8E2fShwCEoAPuC_kZWCxwi4aTb53TQ8fVT1k3SX2zbyhJ4rT2WdcH5HLlAcui6hT0MFbXIAwvfignWudniVJB9QJRi_RhICG4qdk37Qy3az4wwv8g6iN40olYndBqrUcV3l2mFhqP59xDQ9ACppdA=w2880-h1620-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczN4EmUjbzl0fBsX0GtaZdetBj6aPw3NoEIoDcYZxE9gge_HEVBEnIHlguHChMuBZOCXJlzX9RWKyPdYHgFUC5ItCVubU2saY5bhIQIOTL4OwnB3Zi1b1GHjF3MFM5CiZwwVWwr9YE0viyFwrH96csyr=w914-h1624-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOnf9dVZpaDG8BOMtkMJlMRsy7pwn5l8tpWcE_m14JNJVRRc0OrB5NM1aG7wDhy0Cr47Yw6HIwlIfmgBRaPL5CKZtnM2Sb1_KQDqO-sDfTegFG56tyeLDpY1fdfjrq-Jbij-d-L1YCEUMbrA0QQ1ebR=w914-h1624-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczP_wsIqf-xsjY0PByEuBRcXxYoQN2xl6LL1Zf_9i2GDchRUWYinEENQKkHrrrjB8zyHGjstVYS8F9neozuDnEC2jz-W3ra7eDC48OHAhyGrwys3TOk1UcF_JlJRWpRjRwekI5V5XUguuzD0H9X8C2Fi=w914-h1624-s-no-gm?authuser=0"
      
    ],
    mainimage: "https://lh3.googleusercontent.com/pw/AP1GczOUXLG2ahEQERRybVM0xz5msO_H7Nerh8eymT5_C6tWzTgwJFLsZFWOACBRBh48njYAxbPc8itKFW0mOBvq-0pXV2bQ2AR8FJZw4UEZH1NaLx536nhrPzVqT20AlHVEMl_PLfDbyIVxoLcWIriZY3N4=w2880-h1620-s-no-gm",
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
