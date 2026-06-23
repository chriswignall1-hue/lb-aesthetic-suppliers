import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.enum([
      'Gloves & PPE',
      'Skincare & Retail',
      'Equipment & Tools',
      'Waxing & Hair Removal',
      'Lash & Brow',
      'Hygiene & Sterilisation',
    ]),
    price: z.number(),
    priceTBC: z.boolean().default(true),
    image1: z.string().optional(),
    image2: z.string().optional(),
    hasVariants: z.boolean().default(false),
    variantName: z.string().optional(),
    variantOptions: z.array(z.string()).optional(),
    stockStatus: z.enum(['In Stock', 'Out of Stock', 'Low Stock']).default('In Stock'),
    featured: z.boolean().default(false),
    sku: z.string().optional(),
  }),
});

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    businessName: z.string(),
    tagline: z.string().optional(),
    email: z.string(),
    phone: z.string().optional(),
    address: z.string().optional(),
    bankName: z.string().optional(),
    bankSortCode: z.string().optional(),
    bankAccountNumber: z.string().optional(),
    bankAccountName: z.string().optional(),
    dispatchTimeframe: z.string().optional(),
    instagramUrl: z.string().optional(),
    facebookUrl: z.string().optional(),
    tiktokUrl: z.string().optional(),
  }),
});

export const collections = { products, settings };
