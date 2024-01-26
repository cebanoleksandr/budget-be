import express from "express";
import cors from "cors";
import { router as userRouter } from "./routes/user.route.js";
import { router as billRouter } from "./routes/bill.router.js";
import { router as categoryRouter } from "./routes/category.router.js";
import { router as recordRouter } from "./routes/record.router.js";

const app = express();
const PORT = 3005;

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Hello, world!</h1>')
});

app.use('/users', userRouter);
app.use('/bills', billRouter);
app.use('/categories', categoryRouter);
app.use('/records', recordRouter);

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
