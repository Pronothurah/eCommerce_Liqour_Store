const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "Baron Philippe De Rothschild",
    price: 1999,
    rating: 4.5,
    description: "A fine wine with fruity flavors.",
    mainImage: "barron_phillippe.png",
    slug: "wine-a",
    manufacturer: "Winery A",
    categoryId: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    inStock: 10,
  },
  {
    id: "2",
    title: "Jack Daniels Apple whisky 1L",
    price: 3999,
    rating: 4.7,
    description: "A premium whiskey aged 12 years.",
    mainImage: "jd-apple-1l.png",
    slug: "whiskey-b",
    manufacturer: "Distillery B",
    categoryId: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    inStock: 5,
  },
  {
    id: "3",
    title: "Tusker Lager 500ml",
    price: 249,
    rating: 4.2,
    description: "A refreshing lager beer.",
    mainImage: "tusker-can.png",
    slug: "beer-c",
    manufacturer: "Brewery C",
    categoryId: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    inStock: 20,
  },
  {
    id: "4",
    title: "Leleshwa Vodka 750ml",
    price: 1700,
    rating: 4.6,
    description: "A smooth and clean vodka.",
    mainImage: "leleshwa.png",
    slug: "vodka-d",
    manufacturer: "Distillery D",
    categoryId: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
    inStock: 8,
  },
  {
    id: "5",
    title: "Jose Cuervo",
    price: 2999,
    rating: 4.8,
    description: "A top-shelf tequila with a smooth finish.",
    mainImage: "jose-cuervo-750.png",
    slug: "tequila-e",
    manufacturer: "Distillery E",
    categoryId: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
    inStock: 6,
  },
  {
    id: "6",
    title: "Rooiberg Cabernet Sauvignon Merlot 75cl",
    price: 1849,
    rating: 4.9,
    description: "A renowned Bordeaux wine.",
    mainImage: "cabernet.png",
    slug: "wine-f",
    manufacturer: "Winery F",
    categoryId: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    inStock: 12,
  },
  {
    id: "7",
    title: "Glenfiddich 12 Year Old 750ml",
    price: 7499,
    rating: 4.6,
    description: "An exceptional aged Scotch whisky.",
    mainImage: "glen-12.png",
    slug: "whiskey-g",
    manufacturer: "Distillery G",
    categoryId: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    inStock: 3,
  },
  {
    id: "8",
    title: "Heineken 330ml",
    price: 199,
    rating: 4.3,
    description: "A globally popular lager beer.",
    mainImage: "heineken-zero.jpg",
    slug: "beer-h",
    manufacturer: "Brewery H",
    categoryId: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    inStock: 15,
  },
  {
    id: "9",
    title: "Belvadere Mango Passion 750ml",
    price: 3999,
    rating: 4.7,
    description: "A premium Polish vodka.",
    mainImage: "Belvedere.png",
    slug: "vodka-i",
    manufacturer: "Distillery I",
    categoryId: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
    inStock: 7,
  },
  {
    id: "10",
    title: "Patron Reposado Tequila 750ml",
    price: 11329,
    rating: 4.8,
    description: "An ultra-premium tequila.",
    mainImage: "patron.png",
    slug: "tequila-j",
    manufacturer: "Distillery J",
    categoryId: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
    inStock: 4,
  },
];

const demoCategories = [
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    name: "Wines",
  },
  {
    id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    name: "Whiskey",
  },
  {
    id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    name: "Beer",
  },
  {
    id: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
    name: "Vodka",
  },
  {
    id: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
    name: "Tequila",
  },
  {
    id: "6f7g8h9i-0j1k-2l3m-4n5o6p7q8r9s0u",
    name: "Rum",
  },
  {
    id: "7g8h9i0j-1k2l-3m4n-5o6p7q8r9s0t1",
    name: "Gin",
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

insertDemoData()
  .then(() => {
    console.log("Demo data insertion completed!");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error("Error inserting demo data:", e);
    prisma.$disconnect();
  });