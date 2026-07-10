const express = require("express");
const cors = require("cors");

const linkRoutes = require("./routes/linkRoutes");
const redirectRoutes = require("./routes/redirectRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/links", linkRoutes);
app.use("/r", redirectRoutes);
app.use("/api/analytics", analyticsRoutes);

module.exports = app;