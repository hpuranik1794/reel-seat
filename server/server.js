require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors");
const verifyJWT = require("./middleware/verifyJWT");
const PORT = process.env.PORT || 3500;
const { User, sequelize } = require("./models/userModel");

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Credentials', true);
  }
  next();
}

const allowedOrigins = [
  'http://localhost:3000'
];


const corsOptions = {
  origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true)
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  optionsSuccessStatus: 200
}

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


console.log(User);


app.use("/auth", require("./routes/authJWT"));


app.use(verifyJWT);
app.use("/movies", require("./routes/movies"));

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
  sequelize.sync();
  console.log("Initialized tables");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (err) {
  console.log(err);
}

