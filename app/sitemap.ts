import { MetadataRoute } from 'next'

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const restaurants = await fetch('https://your-api.com/restaurants').then(r => r.json())

//   return [
//     { url: 'https://jambofooddelivery.com', lastModified: new Date() },
//     ...restaurants.map((r: any) => ({
//       url: `https://jambofooddelivery.com/restaurant/${r.id}`,
//       lastModified: new Date(),
//     })),
//   ]
// }
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jambofooddelivery.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}