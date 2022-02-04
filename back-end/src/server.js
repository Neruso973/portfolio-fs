// Setup application port depending on environment variables
const port = process.env.PORT || 3001;

// Load .env file if not in production environment
if (process.env.ENV !== "prod") {
  require("dotenv").config();
}

const session = require('express-session')
const cors = require("cors");
const express = require("express");
const setupRoutes = require("./routes");
const app = express();


// Gestion des sessions
app.use(session({
  name: '',
  secret: "mlskjflkdsmf@sldkjflskj===sdflksjf",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60,
  }
}))

// Permet de récupérer le body sur les requêtes POST / PUT
app.use(express.json());

// Handle CORS requests
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// Configure routes
setupRoutes(app);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Your project API is listening at http://localhost:${port}`);
});
