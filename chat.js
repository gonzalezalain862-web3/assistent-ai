// public/chat.js

// Función para alternar la visibilidad del chat
function toggleChat() {
const chatContainer = document.getElementById('chat-container');
chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
}

// Función para enviar el mensaje a la API de Gemini
async function enviarMensaje() {
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const mensaje = input.value.trim();

if (!mensaje) return;

// Mostrar mensaje del usuario en pantalla
chatBox.innerHTML += `<div style="text-align:right; margin-bottom:10px; color:#00d2ff;"><b>Tú:</b> ${mensaje}</div>`;
input.value = '';

try {
const response = await fetch('/api/chat', {
method: 'POST',
headers: { 'Content-Type': 'application/json'},
body: JSON.stringify({ mensaje: mensaje })
});

const data = await response.json();

// Mostrar respuesta de la IA
chatBox.innerHTML += `<div style="text-align:left; margin-bottom:10px; color:white;"><b>Asistente:</b> ${data.respuesta}</div>`;

// Auto-scroll al final
chatBox.scrollTop = chatBox.scrollHeight;
} catch (error) {
console.error("Error:", error);
chatBox.innerHTML += `<div style="color:red;">Error al conectar con el asistente.</div>`;
}
}
