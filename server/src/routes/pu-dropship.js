import express, { response } from "express";
import { puDropshipInstance } from "../instances/index.js";

const router = express.Router();

router.get("/orders/", async (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  const page = req.query.page;
  try {
    const orders = await puDropshipInstance.get(`/orders/dropship?date_start=${from}&date_end=${to}&page_num=1&order_type=DS`);
    res.json(orders.data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export { router as puDropshipRouter };
