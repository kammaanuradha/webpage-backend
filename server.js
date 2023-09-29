const express = require("express");
const DbConnect = require("./config/db");
const app = express();
const Router = require("./routes/index");
const cors = require("cors")


const allowedOrigins = ['http://localhost:3000']; // Add your allowed origins here

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/v1",Router)
async function startServer() {
  try {
    let dbConnect = await DbConnect();
    app.listen(5000, () => console.log("Server running on port 5000"));
  } catch (error) {
    console.log(error);
  }
}

startServer();
