// TODO 1: Import and Create express app instance
// TODO 1: Define server port
   import express from "express";
   const app = express();
   const PORT = process.env.PORT || 3000;


// TODO 4: Import and Apply CORS middleware
   import cors from "cors";
   app.use(cors());

// TODO 5: Import and apply Morgan middleware
   import morgan from "morgan";
   app.use(morgan("dev"));


// TODO 6.1: Create root route "/"
import  {getRandomQuote } from "./quotes.js";
   app.get("/", (req, res) => {
     res.send("Welcome to the Quote API!");
   });
   

// TODO 6.2: Create "/api/quote" route
   app.get("/api/quote", (req, res) => {
     res.json({ quote: getRandomQuote() });
   });

// TODO 7: Start server using app.listen
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});