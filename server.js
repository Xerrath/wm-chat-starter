// server.js: the chat's server. Express sends the chat page AND answers every /api request.
// Every message, chat, and user lives in MongoDB (chatDB), and the server has the final say.
// YOU write the routes, one day at a time. Each one answers 501 "not built yet" until you build it.
import express from "express";
import { ObjectId } from "mongodb";
import { connectDB, seedDatabase } from "./mongo.js";
import { setUpChat } from "./setup/chat.js";

const PORT = 3000;
const app = express();

// Sends the chat page (everything in the public folder) to the browser.
app.use(express.static("public"));

// ---------- Station U: read JSON bodies ----------


// ALREADY DONE: connects with your connectDB(), seeds with your seedDatabase(),
// adds GET /api/status and POST /api/reset.
const db = await setUpChat(app, connectDB, seedDatabase);

// ---------- Station U: Accounts ----------
// POST /api/users   body: { "username": "alan", "displayName": "Alan M." }
// Signs up a new user. 400 if the username breaks the rules, 409 if it's taken.
// Everyone who signs up joins the West-MEC Lounge.
app.post("/api/users", async (req, res) => {
  res.status(501).json({ error: "POST /api/users is not built yet (Station U)" });
});

// GET /api/users/:username: signs in. Sends back ONE user, or 404 if there's no one with that username.
app.get("/api/users/:username", async (req, res) => {
  res.status(501).json({ error: "GET /api/users/:username is not built yet (Station U)" });
});

// GET /api/users: sends back an array of every user, A to Z (the People list).
app.get("/api/users", async (req, res) => {
  res.status(501).json({ error: "GET /api/users is not built yet (Station U)" });
});

// ---------- Day 3: Conversations ----------
// GET /api/chats?user=alan: sends back every chat that user is a member of, newest first.
app.get("/api/chats", async (req, res) => {
  res.status(501).json({ error: "GET /api/chats is not built yet (Day 3)" });
});

// POST /api/chats/direct   body: { "from": "alan", "to": "maria" }
// Opens a direct message between two people. Already have one? Sends that one back (200).
// New one? 201. 400 if someone is missing or it's yourself, 404 if either user doesn't exist.
app.post("/api/chats/direct", async (req, res) => {
  res.status(501).json({ error: "POST /api/chats/direct is not built yet (Day 3)" });
});

// POST /api/chats/group   body: { "from": "alan", "name": "Study Group", "members": ["maria", "jay"] }
// Starts a group chat. The person who starts it is in it too.
// 400 if there's no name or no one else, 404 if anyone isn't a user.
app.post("/api/chats/group", async (req, res) => {
  res.status(501).json({ error: "POST /api/chats/group is not built yet (Day 3)" });
});

// ---------- Day 4: Messages ----------
// GET /api/chats/:id/messages?user=alan&after=2026-10-12T18:00:00.000Z
// Sends back the chat's messages, oldest first. With after: only the ones sent after that time.
// 400 bad id, 404 no chat, 403 if user isn't a member.
app.get("/api/chats/:id/messages", async (req, res) => {
  res.status(501).json({ error: "GET /api/chats/:id/messages is not built yet (Day 4)" });
});

// POST /api/chats/:id/messages   body: { "from": "alan", "text": "hey!" }
// Sends a message. Also saves it on the chat as lastMessage, so the chat list can show it.
// 400 bad id or bad text, 404 no chat, 403 if from isn't a member.
app.post("/api/chats/:id/messages", async (req, res) => {
  res.status(501).json({ error: "POST /api/chats/:id/messages is not built yet (Day 4)" });
});

// ---------- Day 3: Conversations (adding people) ----------
// ALREADY DONE (you use it in add people): saves a gray "system" line in the chat, like "alan added maria",
// and makes it the chat's lastMessage.
async function systemMessage(chatId, text) {
  const message = { chatId: chatId, from: "system", text: text, sentAt: new Date() };
  await db.collection("messages").insertOne(message);
  await db.collection("chats").updateOne(
    { _id: chatId },
    { $set: { updatedAt: message.sentAt, lastMessage: { from: "system", text: text, sentAt: message.sentAt } } }
  );
}

// PATCH /api/chats/:id/members   body: { "by": "alan", "username": "jay" }
// Adds someone to a group. 400 bad id or a direct message, 404 no chat or no user,
// 403 if by isn't a member, 409 if they're already in it.
app.patch("/api/chats/:id/members", async (req, res) => {
  res.status(501).json({ error: "PATCH /api/chats/:id/members is not built yet (Day 3)" });
});

// ---------- Extension (done early): Leave and Rename ----------
// DELETE /api/chats/:id/members/:username: leaves a group.
// The last one out deletes the chat AND its messages. 400 bad id or a direct message, 404 no chat or not a member.
app.delete("/api/chats/:id/members/:username", async (req, res) => {
  res.status(501).json({ error: "DELETE /api/chats/:id/members/:username is not built yet (Extension)" });
});

// PATCH /api/chats/:id   body: { "by": "alan", "name": "Study Squad" }
// Renames a group. 400 bad id, no name, or a direct message, 404 no chat, 403 if by isn't a member.
app.patch("/api/chats/:id", async (req, res) => {
  res.status(501).json({ error: "PATCH /api/chats/:id is not built yet (Extension)" });
});

// Starts the server. Already running in another terminal? You get EADDRINUSE: Ctrl+C there first.
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`WM Chat running at http://localhost:${PORT}`);
});
