const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function clearExistingData() {
  // Clear existing products
  await prisma.product.deleteMany({});
  console.log("Deleted existing products.");

  // Clear existing categories
  await prisma.category.deleteMany({});
  console.log("Deleted existing categories.");
}

clearExistingData()
  .then(() => {
    console.log("Cleared existing data successfully!");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error("Error clearing existing data:", e);
    prisma.$disconnect();
  });