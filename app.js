const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
//Routes
const bootcamps = require("./routes/bootcamps");
//Load env vars
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();
//Initialize express server
const app = express();

// Body Parser
app.use(express.json());

if (process.env.ENV === "development") {
    app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);
app.use(errorHandler);

PORT = process.env.PORT || 5000;
const server = app.listen(
    PORT,
    console.log(`Server is running in ${process.env.ENV} mode at ${PORT} port`),
);

//Handle unhandled rejections globally
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error : ${err.message}`);
    server.close(() => process.exit(1));
});
