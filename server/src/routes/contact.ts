import { Router, type Request, type Response } from "express";
import { z } from "zod";
import { appendSubmission } from "../lib/store.js";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(5000),
});

export const contactRouter = Router();

contactRouter.post("/", (req: Request, res: Response) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const msg = first.name?.[0] ?? first.email?.[0] ?? first.message?.[0] ?? "Invalid input";
    return res.status(400).json({ success: false, error: msg });
  }
  const { name, email, message } = parsed.data;
  try {
    const submission = appendSubmission(name, email, message);
    return res.status(201).json({ success: true, id: submission.id });
  } catch (e) {
    console.error("Contact submission error:", e);
    return res.status(500).json({ success: false, error: "Failed to save message. Please try again." });
  }
});
