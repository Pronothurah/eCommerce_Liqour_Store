const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "Ballantine's Whiskey",
    price: 35,
    rating: 5,
    description: "This is Ballantine's Whiskey description",
    mainImage: "ballantines.png",
    slug: "ballantines-whiskey",
    manufacturer: "Ballantine's",
    category: "whiskey",
    inStock: 1,
  },
  {
    id: "2",
    title: "Vodka",
    price: 20,
    rating: 4,
    description: "This is Vodka description",
    mainImage: "vodka.png",
    slug: "vodka",
    manufacturer: "Generic",
    category: "vodka",
    inStock: 1,
  },
  {
    id: "3",
    title: "Gin",
    price: 22,
    rating: 4,
    description: "This is Gin description",
    mainImage: "gin.png",
    slug: "gin",
    manufacturer: "Generic",
    category: "gin",
    inStock: 1,
  },
  {
    id: "4",
    title: "4th Street Wine",
    price: 18,
    rating: 5,
    description: "This is 4th Street Wine description",
    mainImage: "Wine_4Street.png",
    slug: "4th-street-wine",
    manufacturer: "4th Street",
    category: "wines",
    inStock: 1,
  },
  {
    id: "5",
    title: "Apple Beer",
    price: 15,
    rating: 3,
    description: "This is Apple Beer description",
    mainImage: "KO-Apple.png",
    slug: "apple-beer",
    manufacturer: "KO",
    category: "beer",
    inStock: 1,
  },
  {
    id: "6",
    title: "Bumbu Rum",
    price: 40,
    rating: 5,
    description: "This is Bumbu Rum description",
    mainImage: "bumbu_rum.png",
    slug: "bumbu-rum",
    manufacturer: "Bumbu",
    category: "rum",
    inStock: 1,
  },
  {
    id: "7",
    title: "Camino Real Gold Tequila",
    price: 50,
    rating: 5,
    description: "This is Camino Real Gold Tequila description",
    mainImage: "camino-real-gold.jpg",
    slug: "camino-real-gold-tequila",
    manufacturer: "Camino Real",
    category: "tequila",
    inStock: 1,
  },
  {
    id: "8",
    title: "Martell Cognac",
    price: 60,
    rating: 5,
    description: "This is Martell Cognac description",
    mainImage: "martel_cognac.png",
    slug: "martell-cognac",
    manufacturer: "Martell",
    category: "cognac",
    inStock: 1,
  },
  {
    id: "9",
    title: "Schweppes Tonic",
    price: 5,
    rating: 3,
    description: "A classic tonic water.",
    mainImage: "schweppes-tonic.jpg",
    slug: "schweppes-tonic",
    manufacturer: "Schweppes",
    category: "mixers",
    inStock: 50,
  },
  {
    id: "10",
    title: "Vape Accessories",
    price: 20,
    rating: 4,
    description: "Quality accessories for your vape.",
    mainImage: "vape.png",
    slug: "vape-accessories",
    manufacturer: "Various",
    category: "accessories",
    inStock: 25,
  },
];

const demoProductImages = [
  {
    imageID: "1",
    productID: "1",
    image: "ballantines.png",
  },
  {
    imageID: "2",
    productID: "2",
    image: "vodka.png",
  },
  {
    imageID: "3",
    productID: "3",
    image: "gin.png",
  },
  {
    imageID: "4",
    productID: "4",
    image: "Wine_4Street.png",
  },
  {
    imageID: "5",
    productID: "5",
    image: "KO-Apple.png",
  },
  {
    imageID: "6",
    productID: "6",
    image: "bumbu_rum.png",
  },
  {
    imageID: "7",
    productID: "7",
    image: "camino-real-gold.jpg",
  },
  {
    imageID: "8",
    productID: "8",
    image: "martel_cognac.png",
  },
  {
    imageID: "9",
    productID: "9",
    image: "schweppes-tonic.jpg",
  },
  {
    imageID: "10",
    productID: "10",
    image: "vape.png",
  },
];

const demoCategories = [
  { name: "whiskey" },
  { name: "vodka" },
  { name: "gin" },
  { name: "wines" },
  { name: "beer" },
  { name: "rum" },
  { name: "tequila" },
  { name: "cognac" },
  { name: "mixers" },
  { name: "accessories" },
];

async function insertDemoData() {
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");

  for (const image of demoProductImages) {
    await prisma.image.create({
      data: image,
    });
  }
  console.log("Demo images inserted successfully!");

  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
