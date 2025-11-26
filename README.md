🚀 **WanderLust** - Explore the world, one destination at a time 🌏
==========================

📖 Description
================
WanderLust is a web application designed to help users discover and book their dream destinations. With a user-friendly interface and a vast collection of listings, users can easily find and reserve their perfect getaway. Whether you're looking for a relaxing beach vacation or an adventurous city break, WanderLust has got you covered.

The application allows users to create and manage their own listings, complete with detailed descriptions, images, and reviews. Users can also search for listings based on their preferences, such as location, price, and rating. With a robust review system, users can share their experiences and help others make informed decisions.

WanderLust is built using a combination of modern technologies, including Node.js, Express, and MongoDB. The application is designed to be scalable and secure, ensuring a seamless user experience. With a strong focus on user engagement, WanderLust aims to become the go-to platform for travelers and hosts alike.

📖 Additional Description
-------------------------
The application also features a robust user authentication system, allowing users to create accounts and log in securely. The system uses Passport.js and MongoDB to store user data, ensuring a seamless and secure experience. With a user-friendly dashboard, users can easily manage their listings, bookings, and reviews.

The application also includes a map view, allowing users to visualize listings and their locations. The map is integrated using the MapLibre GL, providing a seamless and interactive experience. With a robust search function, users can easily find listings based on their preferences, making it easy to discover new destinations.

✨ Features
================
The following are some of the key features of Wander Lust:
* **User Authentication**: Secure user authentication system using Passport.js and MongoDB
* **Listing Management**: Users can create, edit, and manage their own listings
* **Search Function**: Robust search function allowing users to find listings based on their preferences
* **Review System**: Users can leave reviews and ratings for listings, helping others make informed decisions
* **Map View**: Interactive map view allowing users to visualize listings and their locations
* **Booking System**: Users can book listings and manage their bookings
* **User Dashboard**: User-friendly dashboard for managing listings, bookings, and reviews
* **Image Upload**: Users can upload images for their listings, enhancing the user experience

🧰 Tech Stack Table
====================
| Technology | Description |
|------------|-------------|
| **Frontend** | HTML, CSS, JavaScript, EJS (for templating dynamic views) |
| **Backend** | Node.js with Express.js for building APIs and handling server-side logic |
| **Database** | MongoDB (NoSQL database for storing listings, users, and reviews) |
| **Authentication** | Passport.js with Session-based authentication |
| **Map API** | MapLibre GL (for interactive map integration and geolocation features) |
| **Image Upload** | Multer (for handling multipart form data) and Cloudinary (for cloud-based image storage and optimization) |
| **Templating Engine** | EJS (Embedded JavaScript templates for rendering dynamic pages) |
| **Validation** | Joi or Express-Validator (for validating user input before processing) |
| **Session Management** | Express-Session & Connect-Mongo (to store sessions in MongoDB for persistence) |
| **Deployment** | Render (for hosting the backend & frontend) |
| **Version Control** | Git & GitHub (for collaboration and version control) |
| **Package Management** | npm (for managing dependencies) |
| **Environment Management** | dotenv (for managing environment variables securely) |

The project is structured into the following folders:
* **models**: Contains database schema definitions for listings, users, and reviews
* **controllers**: Contains controller functions for handling user requests and interactions
* **middleware**: Contains middleware functions for authentication, validation, and error handling
* **utils**: Contains utility functions for tasks such as image upload and validation
* **data**: Contains sample data for testing and development purposes
* **public**: Contains static assets such as images, CSS, and JavaScript files
* **views**: Contains template files for rendering HTML pages

⚙️ How to Run
================
To run the application, follow these steps:
1. Clone the repository using `git clone`
2. Install dependencies using `npm install`
3. Create a MongoDB database and add the connection string to the `config` file
4. Start the application using `npm start`
5. Open a web browser and navigate to `http://localhost:3000`

To set up the environment, create a `.env` file with the following variables:
* **CLOUD_NAME**: Cloudinary cloud name
* **CLOUD_API_KEY**: Cloudinary API key
* **CLOUD_API_SECRET**: Cloudinary API secret
* **MAP_TOKEN**: MapLibre GL map token
* **DB_URL**: MongoDB connection string

To build and deploy the application, use the following scripts:
* **npm run build**: Builds the application for production
* **npm run deploy**: Deploys the application to a production environment

📸 Screenshots
================

### SignUp Page  
![SignUp Page](/public/screenshots/signup_page.png)

### Homepage  
![Homepage](/public/screenshots/homepage.png)

### Listing  
![Listing](/public/screenshots/listing.png)

### Create Listing  
![Create Listing](/public/screenshots/create_listing.png)

### Edit Listing  
![Edit Listing](/public/screenshots/edit_listing.png)


📦 API Reference
================
The application provides the following API endpoints:
* **GET /listings**: Retrieves a list of all listings
* **GET /listings/:id**: Retrieves a single listing by ID
* **POST /listings**: Creates a new listing
* **PUT /listings/:id**: Updates a single listing by ID
* **DELETE /listings/:id**: Deletes a single listing by ID

🌐 Live Demo
================
You can explore the live version of **WanderLust** here:  
👉 [Visit WanderLust](https://wanderlust-x8g4.onrender.com/listings)

👤 Author
================
The application was developed by [SAMRIDH PALLEDA](https://www.linkedin.com/in/samridh-palleda-048a312ba/).

