import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("list of products");
}
export function getProductById(req: Request, res: Response) {
  res.send("one products");
}
export function createProduct(req: Request, res: Response) {
  res.send("create of products");
}
export function updateOneProduct(req: Request, res: Response) {
  res.send("update of pro");
}
export function deleteProduct(req: Request, res: Response) {
  res.send("delete of one pro");
}
