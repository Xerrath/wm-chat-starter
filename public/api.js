// api.js: everything the PAGE says to the SERVER lives in this file.
// chat.js calls these functions. YOU write them, one day at a time.
// Each one throws "not built yet" until you replace that line with your code.

// ALREADY DONE: fetch does NOT throw on a 404 or a 500. readJSON() reads the server's answer.
// If the status is OK, it gives back the data. If not, it throws the server's error message.
async function readJSON(response) {
  const data = await response.json();
  if (!response.ok) {
    const error = new Error(data.error);
    error.name = `Error ${response.status}`;
    throw error;
  }
  return data;
}

// ALREADY DONE: the "not built yet" errors. chat.js shows them in gray, not red.
function notBuilt(text) {
  const error = new Error(text);
  error.notBuilt = true;
  return error;
}

// ALREADY DONE (your example): GET /api/status
// Gives back { database, where, collections, counts, seed } for the status line.
async function getStatus() {
  const response = await fetch("/api/status");
  return readJSON(response);
}

// ALREADY DONE: POST /api/reset empties chatDB and seeds it again (the Reset chat button).
async function resetChat() {
  const response = await fetch("/api/reset", { method: "POST" });
  return readJSON(response);
}

// ---------- Day 2: USERS ----------
// Signs up: POST /api/users with { username, displayName }. Gives back the new user.
async function signUp(username, displayName) {
  throw notBuilt("signUp() is not built yet (Day 2)");
}

// Signs in: GET /api/users/:username. Gives back that user (or throws the 404).
async function signIn(username) {
  throw notBuilt("signIn() is not built yet (Day 2)");
}

// Gives back an array of every user (GET /api/users).
async function getUsers() {
  throw notBuilt("getUsers() is not built yet (Day 2)");
}

// ---------- Day 3: CHATS ----------
// Gives back an array of every chat this user is in (GET /api/chats?user=...).
async function getChats(user) {
  throw notBuilt("getChats() is not built yet (Day 3)");
}

// Opens a direct message: POST /api/chats/direct with { from, to }. Gives back the chat.
async function startDirect(from, to) {
  throw notBuilt("startDirect() is not built yet (Day 3)");
}

// Starts a group: POST /api/chats/group with { from, name, members }. Gives back the chat.
async function startGroup(from, name, members) {
  throw notBuilt("startGroup() is not built yet (Day 3)");
}

// ---------- Day 4: MESSAGES ----------
// Gives back the chat's messages (GET /api/chats/:id/messages?user=...).
// If after has a value, add &after=... so the server only sends the new ones.
async function getMessages(chatId, user, after) {
  throw notBuilt("getMessages() is not built yet (Day 4)");
}

// Sends a message: POST /api/chats/:id/messages with { from, text }. Gives back the saved message.
async function sendMessage(chatId, from, text) {
  throw notBuilt("sendMessage() is not built yet (Day 4)");
}

// ---------- Day 5: GROUPS ----------
// Adds someone to a group: PATCH /api/chats/:id/members with { by, username }. Gives back the chat.
async function addMember(chatId, by, username) {
  throw notBuilt("addMember() is not built yet (Day 5)");
}

// Leaves a group: DELETE /api/chats/:id/members/:username (no body).
async function leaveChat(chatId, username) {
  throw notBuilt("leaveChat() is not built yet (Day 5)");
}

// Renames a group: PATCH /api/chats/:id with { by, name }. Gives back the chat.
async function renameChat(chatId, by, name) {
  throw notBuilt("renameChat() is not built yet (Day 5)");
}
