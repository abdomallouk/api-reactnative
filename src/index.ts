import express, { Router } from "express";
import productsRoutes from "../src/routes/products/index";

const app = express();
const port = 3000;

app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
