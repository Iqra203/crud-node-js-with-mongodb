const bodyParser = require("body-parser");
const express = require("express");
const itemRoutes = require("./routes/itemRoutes");
const connectDB = require("./db/itemsdatabase");
var cors = require('cors')
const app = express();
const PORT = 8000;

connectDB();

app.use(cors())
// Middleware
// app.use(bodyParser.json());
app.use(express.json());

// Use Routes
app.use("/", itemRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
