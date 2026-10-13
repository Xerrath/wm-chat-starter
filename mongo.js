// mongo.js: sets up the chat's database, chatDB, on MongoDB.
// YOU write both functions on Day 1. Replace each throw line with your code.
import { MongoClient } from "mongodb";
import { getMongoURI } from "./setup/practice-server.js";

const DB_NAME = "chatDB";

// ---------- Day 1: Connect ----------
// Gets the connection string, connects a MongoClient to it,
// and gives back (a promise for) the chatDB database.
export async function connectDB() {
  throw new Error("connectDB() is not built yet (Day 1)");
}

// ---------- Day 1: Set up the collections ----------
// Runs every time the server starts, but only fills chatDB when it's empty.
// Puts in the first user (WM Bot), the first chat (West-MEC Lounge), and the first message.
export async function seedDatabase(db) {
  const users = db.collection("users");
  const chats = db.collection("chats");
  const messages = db.collection("messages");
  const now = new Date();
  const welcome = "Welcome to WM Chat! Everyone who signs up joins the Lounge. Say hi!";

  throw new Error("seedDatabase() is not built yet (Day 1)");
}
