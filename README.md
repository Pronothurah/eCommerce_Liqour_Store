# Liquor Store eCommerce App

## Overview of the eCommerce Liquor Store App

## Introduction

Welcome to our eCommerce Liquor Store app! This application is designed to provide a seamless and enjoyable online shopping experience for purchasing liquor. Whether you're looking for a specific type of wine, whiskey, or any other alcoholic beverage, our app makes it easy to browse, select, and purchase your favorite drinks from the comfort of your home.

## Key Features

1. **User-Friendly Interface**: Our app is designed with simplicity and ease of use in mind. The intuitive layout ensures that even first-time users can navigate and find what they're looking for without any hassle.

2. **Extensive Product Catalogue**: We offer a wide range of liquor options, categorized for easy browsing. Whether you prefer red wine, craft beer, or aged whiskey, you'll find a comprehensive selection in our store.

3. **Secure Transactions**: Your security is our priority. We ensure that all transactions are securely processed, protecting your personal and payment information.

4. **Detailed Product Information**: Each product listing includes detailed descriptions, customer reviews, and high-quality images, helping you make informed purchasing decisions.

5. **Personalized Recommendations**: Based on your browsing and purchase history, the app suggests products that match your tastes, making your shopping experience more personalized.

## How It Works

1. **Browsing Products**: Start by exploring our extensive catalogue. Use the search bar or navigate through categories to find specific products.

2. **Product Details**: Click on any product to view its detailed information, including price, size, alcohol content, and customer reviews.

3. **Adding to Cart**: When you find a product you like, simply add it to your shopping cart. You can continue shopping and add more items or proceed to checkout.

4. **Secure Checkout**: When you're ready to make a purchase, go to your cart and follow the checkout process. You'll enter your shipping information, select a payment method, and confirm your order.

5. **Order Confirmation**: Once your order is placed, you'll receive an email confirmation with your order details. You can track your order status through the app until it arrives at your doorstep.

## Behind the Scenes

Our eCommerce Liquor Store app is built using the latest technologies to ensure a smooth and efficient experience for our users:

- **Next.js**: This framework helps us create fast and dynamic web pages. It ensures that our app is quick to load and highly responsive.

- **Node.js**: This technology runs the server-side of our application, handling everything from user authentication to processing orders.

- **MySQL**: Our robust database stores all product information, user data, and order details. It's reliable and ensures that your data is safe and accessible.

- **Prisma**: Prisma helps our app communicate with the database more easily and efficiently. Think of it as a bridge between our app and the database. It simplifies tasks like:
  - **Creating and Updating Data**: When you add a new product or update an existing one in your app, Prisma handles these changes in the database.
  - **Reading Data**: When you browse products or view order details, Prisma retrieves this information from the database for your app.
  - **Deleting Data**: If a product needs to be removed, Prisma manages the deletion from the database.
  - **Ease of Use**: It provides a simple and clear way to work with the database, making it easier for developers to write and maintain code.
  - **Consistency**: It ensures that the data operations (like adding, updating, reading, or deleting data) are performed consistently and reliably.
  - **Efficiency**: It optimizes database queries to make them faster and more efficient.

## Component Functionality

Our app is composed of various components, each serving a specific function to enhance the user experience:

- **AddToCartSingleProductBtn.tsx**: Button to add a single product to the cart.
- **AddToWishlistBtn.tsx**: Button to add a product to the wishlist.
- **AdminOrders.tsx**: Component to manage orders in the admin dashboard.
- **Breadcrumb.tsx**: Displays the breadcrumb navigation for easier navigation through the app.
- **BuyNowSingleProductBtn.tsx**: Button to immediately purchase a single product.
- **CartElement.tsx**: Displays the items in the user's cart.
- **CategoryItem.tsx**: Represents a single category item for browsing products.
- **CategoryMenu.tsx**: Menu for navigating through different product categories.
- **Checkbox.tsx**: Custom checkbox component used in forms.
- **ColorInput.tsx**: Input for selecting a color.
- **CustomButton.tsx**: Reusable button component.
- **DashboardProductTable.tsx**: Table displaying products in the admin dashboard.
- **DashboardSidebar.tsx**: Sidebar navigation for the admin dashboard.
- **Filters.tsx**: Component for filtering products based on various criteria.
- **Footer.tsx**: The footer section of the app.
- **HeaderTop.tsx**: Top section of the header with quick links and information.
- **Header.tsx**: Main header component of the app.
- **Heading.tsx**: Component for displaying headings in the app.
- **HeartElement.tsx**: Displays a heart icon for favoriting items.
- **Hero.tsx**: Hero section on the homepage.
- **Incentives.tsx**: Displays incentives for purchasing from the store.
- **IntroducingSection.tsx**: Section introducing new features or products.
- **Newsletter.tsx**: Section for subscribing to the newsletter.
- **OrderItem.tsx**: Represents a single item in an order.
- **Pagination.tsx**: Pagination controls for navigating through product lists.
- **ProductItemRating.tsx**: Displays the rating of a product.
- **ProductItem.tsx**: Represents a single product item.
- **ProductsSection.tsx**: Section displaying a list of products.
- **Products.tsx**: Main component for displaying products.
- **ProductTabs.tsx**: Tabs for navigating through different product details.
- **QuantityInputCart.tsx**: Input for adjusting the quantity of a product in the cart.
- **QuantityInput.tsx**: Input for adjusting the quantity of a product.
- **Range.tsx**: Range slider component.
- **RangeWithLabels.tsx**: Range slider with labels.
- **RatingPercentElement.tsx**: Displays the percentage of ratings.
- **SearchInput.tsx**: Input for searching products.
- **SectionTitle.tsx**: Title for different sections in the app.
- **SimpleSlider.tsx**: Simple image slider component.
- **SingleProductDynamicFields.tsx**: Displays dynamic fields for a single product.
- **SingleProductRating.tsx**: Displays the rating for a single product.
- **SingleReview.tsx**: Displays a single review for a product.
- **SortBy.tsx**: Component for sorting products.
- **StatsElement.tsx**: Displays statistical data.
- **StockAvailabillity.tsx**: Shows the availability status of a product.
- **UrgencyText.tsx**: Displays text indicating urgency (e.g., limited stock).
- **WishItem.tsx**: Represents a single item in the wishlist.

## Conclusion

Our eCommerce Liquor Store app combines a user-friendly interface, a vast product selection, and secure transactions to provide an excellent online shopping experience. We are committed to making it easy for you to find and purchase your favorite drinks. Thank you for choosing our app, and we hope you enjoy your shopping experience!


<h2>Step-by-step video instructions for running the app</h2>

[https://www.youtube.com/watch?v=Ry0aOMws0gE](https://www.youtube.com/watch?v=Ry0aOMws0gE)

<h2>Instructions</h2>
<ol>
  <li><p>To run the app you first need to download and install Node.js and npm on your computer. Here is a link to the tutorial that explains how to install them: <a href="https://www.youtube.com/watch?v=4FAtFwKVhn0" target="_blank">https://www.youtube.com/watch?v=4FAtFwKVhn0</a>. Also here is the link where you can download them: <a href="https://nodejs.org/en" target="_blank">https://nodejs.org/en</a></p></li>
  <li><p>When you install Node.js and npm on your computer you need to download and install MySQL on your computer. Here is another link to the tutorial which explains how you can download and install MySQL on your computer: <a target="_blank" href="https://www.youtube.com/watch?v=BxdSUGBs0gM&t=212s">https://www.youtube.com/watch?v=BxdSUGBs0gM&t=212s</a>. Here is a link where you can download MySQL: <a href="https://dev.mysql.com/downloads/installer/" target="_blank">https://dev.mysql.com/downloads/installer/</a></p></li>
  <li><p>This step is optional, but highly recommended if you don't have a database management app. Because HeidiSQL is beginner-friendly and very easy to use than other database management options. Here is a link to the tutorial which explains how to download and install HeidiSQL: <a href="https://www.youtube.com/watch?v=oJ24MyLeiPs" target="_blank">https://www.youtube.com/watch?v=oJ24MyLeiPs</a> and here is a link where you can download it: <a href="https://www.heidisql.com" target="_blank">https://www.heidisql.com</a></p></li>
  <li><p>When you install all the programs you need on your computer you need to download the project. When you download the project, you need to extract it.</p></li>
  <li><p>After you extract the project you need to open the project folder in your code editor and in the root create a file with the name .env.</p></li>
  <li><p>You need to put the following code in the .env file and instead of username and password put your MySQL username and password. yourdatabase_name is the name of your MySQL database  :</p></li>
</ol>

```
DATABASE_URL="mysql://username:password@localhost:3306/yourdatabase_name"
NEXTAUTH_SECRET=12D16C923BA17672F89B18C1DB22A
NEXTAUTH_URL=http://localhost:3000
```

<p>7. After you do it, you need to create another .env file in the server folder and put the same DATABASE_URL you used in the previous .env file:</p>

```
DATABASE_URL="mysql://username:password@localhost:3306/yourdatabase_name"
```

<p>8. Now you need to open your terminal of choice in the root folder of the project and write:</p>


```
npm install
```

<p>9. Now you need to navigate with the terminal in the server folder and install everything:</p>

```
cd server
npm install
```

<p>10. You will need to run the Prisma migration now. Make sure you are in the server folder and write:</p>

```
npx prisma migrate dev
npx prisma migrate reset
```

<p>11. Next is to insert demo data. To do it you need to go to the server/utills folder and call insertDemoData.js:</p>

```
cd utills
node insertDemoData.js
```

<p>12. Now you can go back to the server folder and run the backend:</p>

```
cd ..
node app.js
```

<p>13. Open another terminal with the server folder and run prisma studio. Make sure you are still in the server folder and run:</p>

```
npx prisma studio
```


<p>14. While your backend is running you need to open another terminal(don't stop the backend). In the second terminal, you need to make sure you are in your root project folder and run the following:</p>

```
npm run dev
```

<p>15. Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> and see it live!</p>


<h2>Project screenshots</h2>

<h3>Home page</h3>
![ROH and Barrels home page](https://github.com/Pronothurah/eCommerce_Liqour_Store/blob/main/assets/home-page.png)

<h3>Shop page</h3>
![ROH and Barrels shop page](https://github.com/Pronothurah/eCommerce_Liqour_Store/blob/main/assets/products-page.png)


<h3>Single product page</h3>
![ROH and Barrels product page](https://github.com/Pronothurah/eCommerce_Liqour_Store/blob/main/assets/sigle-product.png)


<h3>Register page</h3>
![ROH and Barrels register page](https://github.com/Pronothurah/eCommerce_Liqour_Store/blob/main/assets/register-page.png)


<h3>Login page</h3>
![ROH and Barrels login page](https://github.com/Pronothurah/eCommerce_Liqour_Store/blob/main/assets/login-page.png)


<h3>Search page</h3>
![ROH and Barrels search page]


<h3>Wishlist page</h3>
![ROH and Barrels wishlist page]


<h3>Cart page</h3>
![ROH and Barrels cart page](https://github.com/Pronothurah/eCommerce_Liqour_Store/blob/main/assets/cart-page.png)

<h3>Checkout page</h3>
![ROH and Barrels checkout page](https://github.com/Pronothurah/eCommerce_Liqour_Store/blob/main/assets/checkout-page.png)


<h3>Admin dashboard - All orders page</h3>


<h3>Admin dashboard - All products page</h3>


<h3>Admin dashboard - All categories page<h3>


<h3>Admin dashboard - All users page</h3>

