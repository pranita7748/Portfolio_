import cors from "cors";
import express from "express";
import { contactRouter } from "./routes/contact.js";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "recruiter-ready-portfolio-api" });
});

app.use("/api/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
