const express = require("express");
const cors = require('cors');
const database = require("./db");
const userRoute = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 4000
database();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/api/users", userRoute);
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("Server is running");
});