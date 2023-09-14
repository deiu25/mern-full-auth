require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleware/errorMiddleware");
const helmet = require("helmet");

const app = express();

// Middleware pentru configurarea politicii COOP
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginOpenerPolicy: "same-origin",
    crossOriginEmbedderPolicy: false,
  })
);

// Alte middleware-uri
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mernd-full-auth.vercel.app"],
    credentials: true,
  })
);

// Routes
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
