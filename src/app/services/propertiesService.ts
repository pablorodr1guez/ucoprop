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
      "https://previews.dropbox.com/p/thumb/AChBSHQOILEHj13jn6k7WWahMNV_ebWF8ey-ZY69TSrQfyd3rBn8Z3GQu52W8kRsQKHMdJIJcQdVGZBNqGdGdrPFd6yAqe66PbqXRd7vFB72ZonK527NLwuLE7OsE_OEFabVnvTUcxu6i7Y1Ey7k2PTZjOa8YpbtDo1frBCBVqBzQV84L8qYVYPi1v9PB_LcTI-3d3fsbY-4dXGvBXMu8RtY2kPSKo3m808jDB2NRqDreJfpRbm3mXq33IrdgBUMprV9UQw-TMzL_iq8Yiccx7gC8N9BwG97leBahkJgiWQZKnvWi62XjK65pRa0ZvY5AdpTJyu1OL-v-mSPvusFhknZ/p.jpeg?is_prewarmed=true",
      "https://previews.dropbox.com/p/thumb/ACiOk-hGdIPymGoDtfv1njYI2PxY1JigmzN2jlt7HdCFxe-Xoub1YqT_NCab45SXSEyjCfyBqVTqlOiaKBQmTXT_nho6iF3Eji3OdqJxCmHKqpQE9idK7mLbZLOKsRLlyA0oNQ269eEHAq13ipzIIwBwrzTq6nxXosGeZso2woblrF5yV2gHn3N3snJX7DYgbcZ8e_xYrJECbMiZ7ygcvK8uuKFMVprJPoyM_ZFx1HKPjI6pyjpJWsXOalfCxwwFg0HU_DwUsInc8-29ETLO3jDUsEwuNKZA7RsdVCEqPivlnfI85KCmzMZBSLZpTTnAh6SMHMI87janHohr97T5cb3V/p.jpeg?is_prewarmed=true",
      "https://previews.dropbox.com/p/thumb/AChpbsDlRkgUWENfwsK2m6fgXoa2eqzl8uSbsJdD3VgJ_QzfJHpWPcVVovriq3iXOVNsoburjUQCrVDQxzVeIEX4QpOx-1-NJjO_vhFq_RRmoVu9noA3vz7orMoCyj4ZVHNATq1BptF6g0Rs_IjvlgMhvpiLf8o5O3ZLF6DyxH87j2uxaVj7FFyPyQcmElCpA0ZqRQmSsJWTWtNE2sYM_jCtYR84Ha9G_ScfhN8rIxPR5gorifamF-2vIU7Gv1zEbjnV1JqWHL9GAM7xs14OPWGaIDTb2PYdF2q-vYIpulrVaFbleRXiE7fh-fjuRSd0imM/p.jpeg",
      "https://previews.dropbox.com/p/thumb/ACi1PgnMH3vme2IKtKoVyqNiR5p3OP8_f1HaBLLAHCCBIuj59Rr0D3gRl3g7nDA82FyKyuNYEOh8RRSC8m-mPTT-LZy7vgKv7RgT7lXvjvB2T34Hh3xaWvfqYUzh3sZu1p9lszgROQFEJssGXiLZwpKqT8TZmHcxt_rQgNp0-KZgP6AO3aqKc-C4tp4uwO6VrB6ivic62PnUyjKG-gQmVlf3JFCINOpTo291V4u3ikqF20lh-tJ4D6J0Xr8tOhsqi6J0KOGi3-oshknUmKpFD_x0AOzJaentaftSxxnhkzsECY-s8VzLL5OD24OEZaSFHz8/p.jpeg",
      "https://previews.dropbox.com/p/thumb/ACi8uX35kFb7q5Gm0SqjlaMkK1hNRe0QBl7tqK3csZCGXYS8UrcwgtX7kFZMRj4as4dpXehTTl02xarwsrfAbmAoI7Qtav7Scb3V85ZuMQjBV-Ye4vK1VRA3ehP-Xe_4YXOSZdbE8MH0Fodjrj5a6gRYctkJNKAhfcWpSQAczJ4H-FmQmr_zuI_Wnh9Q9QLSyEbMDdUTOA6-2tow4Wg5o-amiPgn2Vima-XaXZFRFCPJ9TgTDedIGeGOZpJAogMkUM_vIUbSK9r0VSfVo4vNOdTfxWhrx2CyOdLq2-msRPaZunEzKnMYJ2lxxRsbCNDYaXraH4Cv4yixUtfBOnpW0ksC/p.jpeg?is_prewarmed=true"
    ],
    mainimage: "https://uc65b3cf36da17fd60d80ef58e6f.previews.dropboxusercontent.com/p/thumb/ACgLLWpHG1pZ-qaLf2g97D4pYTsxw2Q8dnQANZkNO8PsuDrdzbDkjUKEZo4GIxQDKNIkokGftSpuv21tjyRrvV-gfBQ2AJ5KOqLOGD7bOSuo5nOvdw1QO2Qc3WjllQm7l3HafJqI4_E2Kx8jwhu9JGnl_x-dfkfghvPARzyJ2AmaX9f1psG4Sd6SuBCruYqIm5735wg3oOyadMrt1TAoJakngMb-GgFUNqyzPe10B0G1NwgDpXOWb6bbMvGUEV_iBaye4k06AOZLPjLORZr8hjIMO5_KpMHk6XSE9WVrVvuTUt3Dp6X_WIl0LWNgy0OCxse2L3_6Afw_ruZnXgTBbTvVRjEOc5MZZvP0FtYzzcU_Sr2gNxHpxSmuq564PA327PUlVnFUOztRrTpqM_GJCIKc/p.jpeg?is_prewarmed=true",
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
