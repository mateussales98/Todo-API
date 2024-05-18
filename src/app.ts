import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";
import { errorResponse } from "./Routes/Middlewares/Error/errorResponse";

const app = express();

const PORT = 8000


app.use(express.json());

app.use(cors({origin:process.env.CORS}));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof errorResponse) {
    return res.status(err.code).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
