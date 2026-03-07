import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "../../data");
const FILE = path.join(DATA_DIR, "submissions.json");

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readSubmissions(): ContactSubmission[] {
  ensureDataDir();
  if (!fs.existsSync(FILE)) {
    return [];
  }
  const raw = fs.readFileSync(FILE, "utf-8");
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeSubmissions(data: ContactSubmission[]): void {
  ensureDataDir();
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2), "utf-8");
}

export function appendSubmission(
  name: string,
  email: string,
  message: string
): ContactSubmission {
  const submissions = readSubmissions();
  const submission: ContactSubmission = {
    id: crypto.randomUUID(),
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };
  submissions.push(submission);
  writeSubmissions(submissions);
  return submission;
}
