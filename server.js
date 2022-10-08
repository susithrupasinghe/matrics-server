const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
//Connect Database
connectDB();

//Using Cors
app.use(cors());

//Init Middleware( include  bodyparser through express)
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Metrics Server Running"));

//Define Routes
app.use("/prometheus", require("./routes/promethus.route"));
app.use("/cpu", require("./routes/cpu_usage.route"));
app.use("/network", require("./routes/network_utilization.route"));
app.use("/memory", require("./routes/memory_utilization.route"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Metrics Server started on port ${PORT}`));
