import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// Blog collection
const blogsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      date: z.date(),
      image: image(),
      imageAlt: z.string(),
      isFeatured: z.boolean().optional().default(false),
    }),
});

// Cars collection
const carsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/cars" }),
  schema: ({ image }) =>
    z.object({
      // basic identity
      make: z.string(),
      model: z.string(),
      year: z
        .number()
        .int()
        .min(1900)
        .max(new Date().getFullYear() + 1),
      price: z.number().positive(),

      // specs
      mileage: z.number().nonnegative().optional(),
      transmission: z.enum(["Automatic", "Manual"]),
      engineSize: z.string().optional(),
      fuelType: z.enum(["Petrol", "Diesel", "Electric", "Hybrid"]).optional(),

      // required short description (one-liner) used for cards/SEO
      description: z.string().optional(),
      // images
      heroImage: image(), // keeps the image helper
      heroImageAlt: z.string().optional(),
      galleryImages: z.array(image()).max(10).optional(),

      // optional fields
      condition: z.enum(["New", "Used"]).optional().default("Used"),
      location: z.string().optional(),
      featured: z.boolean().optional().default(false),

      // publishing metadata
      publishDate: z
        .date()
        .optional()
        .default(() => new Date()),
    }),
});

// Export collections
export const collections = {
  blog: blogsCollection,
  cars: carsCollection,
};
