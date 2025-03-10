import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  listProducts,
  updateOneProduct,
} from "./productsController";

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateOneProduct);
router.delete("/:id", deleteProduct);

export default router;
