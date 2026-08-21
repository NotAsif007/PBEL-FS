const express = require("express");
const cors = require("cors");
require('dotenv').config()
const { GoogleGenAI } = require("@google/genai");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({apiKey:API_KEY});

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  console.log("Received prompt:", prompt);

  try {
    const response = await ai.models.generateContent({

      model: "gemini-3.5-flash",

      contents: prompt,
    });

    console.log("response", response)

    res.json({
      output: response.text || "No response",
    });

  } catch (error) {
    console.error("ERROR:", error.message);

    res.status(500).json({
      error: "Error generating content",
      details: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Gemini server running on http://localhost:5000");
});
