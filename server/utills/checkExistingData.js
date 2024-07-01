const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function checkExistingData() {
  // Check existing categories
  const existingCategories = await prisma.category.findMany();
  console.log("Existing categories:", existingCategories);

  // Check existing products
  const existingProducts = await prisma.product.findMany();
  console.log("Existing products:", existingProducts);
}

checkExistingData()
  .then(() => {
    console.log("Checked existing data successfully!");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error("Error checking existing data:", e);
    prisma.$disconnect();
  });
  