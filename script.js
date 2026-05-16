async function sendMessage() {
  const input = document.querySelector("input");
  const chatBox = document.querySelector(".chat-box");

  const message = input.value;

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message,
    }),
  });

  const data = await response.json();

  const reply =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response";

  chatBox.innerHTML += `
    <p><strong>You:</strong> ${message}</p>
    <p><strong>AI:</strong> ${reply}</p>
  `;

  input.value = "";
}