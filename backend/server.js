const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const admissionRoutes = require("./routes/admissionRoutes");
const tcRoutes = require("./routes/tcRoutes");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/tcs", tcRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
