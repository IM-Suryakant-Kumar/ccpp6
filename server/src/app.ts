import "dotenv/config";
import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
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
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({message: "hello"})
})

// error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// app start
(async () => {
	try {
		app.listen(PORT, () => console.log(`App is running at http://localhost:${PORT}`));
	} catch (error) {
		console.error(error);
	}
})();
