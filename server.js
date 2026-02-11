const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("TU_API_KEY_DE_GEMINI");

async function manejarChat(pedidoUsuario, datosNegocio) {
// Aquí configuramos la personalidad del Bot
const model = genAI.getGenerativeModel({ 
model: "gemini-1.5-flash",
systemInstruction: `
Eres el Asistente Virtual Pro de ${datosNegocio.nombre || 'nuestra empresa'}.

Tus reglas de oro:
1. CONTACTOS: Si preguntan por contacto, dales SIEMPRE: 
WhatsApp: 584122664528 y Correo: gonzalezalain862@gmail.com.
2. PLANES: 1 mes por $20 y 3 meses por $50.
3. REDES: Usa estos links si preguntan: 
FB: ${datosNegocio.facebook}, IG: ${datosNegocio.instagram}, Web: ${datosNegocio.web}.
4. IDIOMA: Responde siempre en el mismo idioma que te hable el usuario (Traducción automática).
5. ESTILO: Elegante, profesional y servicial.

});

const chat = model.startChat();
const result = await chat.sendMessage(pedidoUsuario);
return result.response.text();
}
