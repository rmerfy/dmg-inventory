import express from "express";
import BigCommerce from "node-bigcommerce";
import { config } from "dotenv";
import { createInventoryProduct } from '../sync-products/inventory-manager.js';

config();

const router = express.Router();

const clientId = process.env.BIGCOMMERCE_CLIENT_ID;
const accessToken = process.env.BIGCOMMERCE_ACCESS_TOKEN;
const storeHash = process.env.BIGCOMMERCE_STORE_HASH;

export const bigCommerce = new BigCommerce({
  clientId: clientId,
  accessToken: accessToken,
  storeHash: storeHash,
  responseType: "json",
  callback: "https://localhost:3001/auth",
  headers: { "Accept-Encoding": "*", "Content-Type": "application/json" },
  apiVersion: "v3",
});

router.get("/list", (req, res) => {
  bigCommerce
    .get("/catalog/products")
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/categories", (req, res) => {
  const queryParams = new URLSearchParams(req.query);
  bigCommerce
    .get(`/catalog/categories?${queryParams}`)
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/create", (req, res) => {
  let product = req.body;
  bigCommerce
    .post("/catalog/products", product)
    .then((message) => {
      createInventoryProduct(product, message, 'Created');
      res.json(message);
    })
    .catch((err) => {
      res.json(err);
    });
});

export { router as bigcommerceRouter };
