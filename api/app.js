require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// imports
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler.js");
const authenticateUser = require('./middleware/authentication');

// packages
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: process.env.HOST_ORIGIN,
	})
);

// routers
const authRouter = require("./routes/auth");
const chatRouter = require('./routes/chat');

// routes
app.use("/auth", authRouter);
app.use('/chat', chatRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;
const start = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`Server is listening on port ${PORT}...`);
		});
	} catch (error) {
		console.error(error);
	}
};

start();
