import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./db";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middlewares";

const app = express();

// constant
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: ".", credentials: true }));
app.use(morgan("tiny"));

// routes

// error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
// app start
(async () => {
	try {
		await connectDB(process.env.MONGO_URL as string);
		app.listen(PORT, () => console.log(`App is running at http://localhost:${PORT}`));
	} catch (error) {
		console.error(error);
	}
})();
