# Admin Panel

## Project Overview
This project aims to build an admin panel that allows users to register, sign in, and manage their profiles. After logging in, users are directed to a dashboard displaying a personalized welcome message with their name. The admin panel also includes a profile page where users can view their personal details.

## Technologies Used
- **Node.js**: Backend server
- **Express.js**: Web framework for building routes and handling requests
- **EJS**: Templating engine for rendering dynamic HTML pages
- **MongoDB/Mongoose**: Database for storing user information
- **Cookie-Parser**: Middleware for handling cookies to manage sessions
- **Body-Parser**: Middleware to parse incoming request bodies
- **Bcrypt.js**: For password encryption and user authentication

## Features
- **User Registration**: Users can register with encrypted passwords
- **User Login**: Session management using cookies ensures secure access to the system
- **Dashboard**: Displays a welcome message with the user’s name after login
- **Profile Page**: Allows users to view their personal information
- **MongoDB Integration**: Stores user information like email, password, and name

## Project Flow
1. **Registration Page**: Users can register by providing their email, password, and profile details.
2. **Login Page**: Users log in with their credentials. Cookies are used to manage the session.
3. **Dashboard**: After successful login, users are redirected to a personalized dashboard displaying a welcome message that includes their name.
4. **Profile Page**: Users can view their personal details on a profile page.

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v14+)
- MongoDB (Local or Cloud MongoDB Atlas)
  
## Setup

### 1. Clone the repository: 
```bash
   git clone https://github.com/Deeppatel-4032/admin_Panal_server_db.git
   cd admin-panel
```

### 2. Install dependencies :*

To run tests, run the following command
```bash 
    npm  install
```

- **Node.js**
- **Express.js** 
- **EJS**
- **nodemon**
- **dotenv**
- **multer**
- **MongoDB/Mongoose**
- **Cookie-Parser**
- **Body-Parser**
- **Bcrypt.js**


### 3. Running Tests

```bash
    npm start
```

### 4. Project Structure :*
```bash
    /admin-panel
    |-- /node_modules
    |-- /views
    |--   |-- /html
    |--   |-- |-- index.ejs
    |--   |-- |-- auth-login-basic.ejs
    |--   |-- |-- auth-register-basic.ejs
    |--   |-- |-- pages-profile.ejs
    |-- /public
    |   |-- /temp
    |-- /models
    |   |-- user_model.js
    |-- /middleware
    |   |-- admin_multer_middleware.js
    |-- /db
    |   |-- admin_db.js
    |-- /routes
    |   |-- index_routes.js
    |-- /controllers
    |   |-- controller.js
    |   |-- loginCon.js
    |   |-- registerCon.js
    |   |-- pages_con.js
    |-- index.js ( server file )
    |-- package.json
    |-- .env
```
### 5. Project Explanation :
- **admin-panel**: This is the main directory of the project.
- **node_modules**: This directory contains all the dependencies required by the project.
- **views**: This directory contains all the EJS templates used in the project.
- **public**: This directory contains all the static files required by the project.
- **models**: This directory contains all the models used in the project.
- **middleware**: This directory contains all the middleware functions used in the project.
- **db**: This directory contains all the database related files used in the project.
- **routes**: This directory contains all the routes used in the project.
- **controllers**: This directory contains all the controllers used in the project.
- **index.js**: This is the main server file of the project.
- **package.json**: This file contains all the dependencies and scripts required by the project.
- **.env**: This file contains all the environment variables required by the project.
### 6. Project Dependencies :
- **express**: This is the main framework used in the project.  
- **ejs**: This is the templating engine used in the project.
- **multer**: This is the middleware used for handling multipart/form-data requests.
- **mongoose**: This is the ORM used for interacting with the database.
### 7. Project Setup :
- **Step 1**: Install all the dependencies required by the project using the following command: `
npm install
`
- **Step 2**: Create a new database in MongoDB and update the **.env** file
- **Step 3**: Run the following command to start the server: `
node index.js
`
### 8. Project Usage :
- **Step 1**: Open a web browser and navigate to **http://localhost:3000
- **Step 2**: You will be redirected to the login page. Enter your credentials and login
- **Step 3**: You will be redirected to the dashboard page. You can view all the

### Contributing [ Deep patel ] 
Contributions are what make the open-source community such an amazing place to learn, inspire, and createFeel free to contribute by creating a pull request. Please ensure all code adheres to the project's coding standards and includes adequate tests.

## 🚀 About Me (https://github.com/Deeppatel-4032)
I'm Deep Patel, a passionate back-End developer. I'm interested in building scalable and efficient applications. I'm always eager to learn and improve my skills.

