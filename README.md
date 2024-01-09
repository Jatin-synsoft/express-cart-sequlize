# Express Shopping Cart Project with Sequelize ORM

Welcome to the Express Shopping Cart project powered by Sequelize ORM for MySQL! 🛒 This project is designed to provide a robust shopping experience with a user-friendly interface.

## Features

### 1. Admin Management

#### - Product and Category Management

Admins have the authority to create or remove products and categories effortlessly. Keep your inventory organized and up-to-date.

#### - User Role Assignment

Admins can promote users to admin status by changing their roles, ensuring smooth collaboration and management.

#### - User Management

Admins can remove users , ensuring smooth management.

### 2. User Authentication

#### - Signup and Login

Users can easily create accounts through signup and securely log in to explore and shop.

#### - Profile Management

Users have the ability to update their profiles for a personalized experience.

#### - Password Reset via Email Link

Forgot your password? Users can initiate a password reset process miail sent with token.

### 3. Admin-Protected Routes

#### - Exclusive Access

Admins enjoy protected routes, ensuring that only authorized personnel can access and manage critical features.

### 4. Order Placement

#### - Seamless Checkout

Users can effortlessly place orders, making the shopping experience convenient and efficient.

### 5. Validation System

#### - Signup and Login Validations

User inputs are validated during signup and login to ensure data integrity and security.

### 6. Product Search and Filtering

#### - Keyword and Category-based Search

Users can search and filter products based on keywords or categories, making it easy to find desired items.

## Getting Started
#### Before start setup your mysql Database
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/express-shopping-cart.git
   ```

2. **Install Dependencies:**
   ```bash
   cd express-shopping-cart
   npm install
   ```

3. **Configure Database:**
   Create a MySQL database and update the configuration in `.env` based on the provided `.env.example`.

4. **Run Migrations:**
   ```bash
   npx sequelize-cli db:migrate // if dont run use it otherwiae dont need this 
   ```

5. **Start the Application:**
   ```bash
   npm start or nodemon index.js
   ```

6. **Explore and Enjoy!**

## Contributions

Contributions are welcomed to enhance this shopping cart project. Feel free to open issues, submit pull requests, or provide feedback.

Happy shopping! 🛍️✨
