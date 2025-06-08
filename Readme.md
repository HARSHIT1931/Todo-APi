## config/

database.js: Handles MongoDB connection using Mongoose.

## controllers/

auth.controller.js: Contains authentication logic (register/login) and handles password encryption using bcrypt.

todo.controller.js: Contains logic to perform CRUD operations on todos.

## models/

Defines Mongoose schemas:

user.model.js: User schema with authentication fields.

todo.model.js: Todo schema with title, description, timestamps, etc.

## routes/

Defines API endpoints and maps them to controller functions:

auth.routes.js: Routes for user authentication.

todo.routes.js: Routes for todo operations.

 ## app.js

Initializes the Express app, middleware, and routes.

 ## server.js
 
Entry point of the application. Loads environment variables, connects to MongoDB, and starts the Express server.

 ## Features
 
 User Registration & Login (with bcrypt password hashing)

 JWT-based Authentication (if included)

 Create, Read, Update, and Delete Todos

 Mongoose for MongoDB modeling

 Modular folder structure for scalability