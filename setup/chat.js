// setup/chat.js: ALREADY DONE. You don't need to change this file.
// Connects with YOUR connectDB(), fills chatDB with YOUR seedDatabase(), and adds two routes:
//   GET /api/status   the green line on the page
//   POST /api/reset   the Reset chat button: empties all three collections, then seeds them again
import { where } from "./practice-server.js";

const COLLECTIONS = ["users", "chats", "messages"];

export async function setUpChat(app, connectDB, seedDatabase) {
  let db = null;
  let problem = null;
  let seedProblem = null;

  try {
    db = await connectDB();
    console.log(`Connected to ${db.databaseName} on ${where()}`);
  } catch (error) {
    problem = error;
    db = null;
    console.log(`Database not connected: ${error.message}`);
  }

  async function seed() {
    try {
      const added = await seedDatabase(db);
      seedProblem = null;
      if (added) console.log("Seeded chatDB: WM Bot, the West-MEC Lounge, and a welcome message");
    } catch (error) {
      seedProblem = error;
      console.log(`Not seeded: ${error.message}`);
    }
  }
  if (db) await seed();

  app.get("/api/status", async (req, res) => {
    if (!db) {
      return res.status(500).json({ error: problem.message });
    }
    try {
      const collections = await db.listCollections().toArray();
      const counts = {};
      for (const name of COLLECTIONS) {
        counts[name] = await db.collection(name).countDocuments();
      }
      res.json({
        database: db.databaseName,
        where: where(),
        collections: collections.map((c) => c.name).sort(),
        counts: counts,
        seed: seedProblem ? seedProblem.message : "done",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/reset", async (req, res) => {
    if (!db) {
      return res.status(500).json({ error: problem.message });
    }
    for (const name of COLLECTIONS) {
      await db.collection(name).deleteMany({});
    }
    await seed();
    if (seedProblem) {
      return res.status(500).json({ error: seedProblem.message });
    }
    res.json({ reset: true });
  });

  return db;
}
