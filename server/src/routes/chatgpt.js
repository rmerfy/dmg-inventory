import express from "express";
import { OpenAIApi } from "openai";
import { gptInstance } from "../instances/index.js";

const router = express.Router();

router.get("/create-text", async (req, res) => {
  let input = req.query.s;
  try {
    const openai = new OpenAIApi(gptInstance);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      max_tokens: 200,
      temperature: 0,
    });
    res.json(response.data.choices[0].text);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router as chatgptRouter };
