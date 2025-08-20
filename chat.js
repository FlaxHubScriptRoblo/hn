const friendsList = document.getElementById("friendsList");
const addFriendInput = document.getElementById("addFriendInput");
const addFriendBtn = document.getElementById("addFriendBtn");
const messages = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

addFriendBtn.addEventListener("click", () => {
  const name = addFriendInput.value.trim();
  if (name) {
    const li = document.createElement("li");
    li.textContent = name;
    li.addEventListener("click", () => {
      document.getElementById("chatWith").textContent = name;
      messages.innerHTML = "";
    });
    friendsList.appendChild(li);
    addFriendInput.value = "";
  }
});

sendBtn.addEventListener("click", () => {
  const text = messageInput.value.trim();
  if (text) {
    const div = document.createElement("div");
    div.textContent = text;
    div.style.background = "#444";
    div.style.margin = "5px";
    div.style.padding = "5px";
    messages.appendChild(div);
    messageInput.value = "";
  }
});