import "dotenv/config";
import cors from "cors";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import path from "path";
import { contactRouter } from "./routes/contact.js";

const app = express();
const PORT = Number(process.env.PORT) || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "recruiter-ready-portfolio-api" });
});

app.use("/api/contact", contactRouter);

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../../dist')));

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
