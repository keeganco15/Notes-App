import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 4000;

// the middleware to parse JSON
app.use(cors());
app.use(express.json()); 

// health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// using GET to list all notes
app.get("/api/notes", async (_req, res) => {
  try {
    const notes = await prisma.note.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

// using GET by id to get a single note
app.get("/api/notes/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const note = await prisma.note.findUnique({ where: { id } });
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch note" });
  }
});

// using POST to create a new note
app.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    const note = await prisma.note.create({
      data: { title, content },
    });
    res.status(201).json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create note" });
  }
});

// using PUT by id to update a note
app.put("/api/notes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const note = await prisma.note.update({
      where: { id },
      data: { title, content },
    });
    res.json(note);
  } catch (err: any) {
    console.error(err);
    if (err.code === "P2025") {
      // Prisma “record not found”
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(500).json({ error: "Failed to update note" });
  }
});

// DELETE by id to delete a note
app.delete("/api/notes/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    await prisma.note.delete({ where: { id } });
    res.status(204).send();
  } catch (err: any) {
    console.error(err);
    if (err.code === "P2025") {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(500).json({ error: "Failed to delete note" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
