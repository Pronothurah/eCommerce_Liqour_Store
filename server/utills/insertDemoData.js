const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "Wine A",
    price: 20,
    rating: 4.5,
    description: "A fine wine with fruity flavors.",
    mainImage: "wine_a.jpg",
    slug: "wine-a",
    manufacturer: "Winery A",
    categoryId: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    inStock: 10,
  },
  {
    id: "2",
    title: "Whiskey B",
    price: 45,
    rating: 4.7,
    description: "A premium whiskey aged 12 years.",
    mainImage: "whiskey_b.jpg",
    slug: "whiskey-b",
    manufacturer: "Distillery B",
    categoryId: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    inStock: 5,
  },
  {
    id: "3",
    title: "Beer C",
    price: 15,
    rating: 4.2,
    description: "A refreshing lager beer.",
    mainImage: "beer_c.jpg",
    slug: "beer-c",
    manufacturer: "Brewery C",
    categoryId: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    inStock: 20,
  },
  {
    id: "4",
    title: "Vodka D",
    price: 30,
    rating: 4.6,
    description: "A smooth and clean vodka.",
    mainImage: "vodka_d.jpg",
    slug: "vodka-d",
    manufacturer: "Distillery D",
    categoryId: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
    inStock: 8,
  },
  {
    id: "5",
    title: "Tequila E",
    price: 50,
    rating: 4.8,
    description: "A top-shelf tequila with a smooth finish.",
    mainImage: "tequila_e.jpg",
    slug: "tequila-e",
    manufacturer: "Distillery E",
    categoryId: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
    inStock: 6,
  },
];

const demoCategories = [
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    name: "Wines",
  },
  {
    id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    name: "Whiskeys",
  },
  {
    id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    name: "Beers",
  },
  {
    id: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
    name: "Vodkas",
  },
  {
    id: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
    name: "Tequilas",
  },
];

async function insertDemoData() {
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");

  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");
}