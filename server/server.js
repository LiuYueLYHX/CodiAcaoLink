import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const sessions = {};

app.get("/scan", (req, res) => {
  const { sessionId } = req.query;

  sessions[sessionId] = true;

  res.send("扫码成功，可以回电脑了");
});

app.get("/check-scan", (req, res) => {
  const { sessionId } = req.query;

  res.json({
    scanned: !!sessions[sessionId],
  });
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});