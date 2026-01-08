// Sample chatbot script
const chatbot = {
    greeting: "Hello! How can I assist you today?",
    responses: {
        "hello": "Hi there!",
        "services": "We offer web development and digital marketing services. How can I help you with that?",
        "pricing": "For pricing information, please visit our Pricing page.",
        "default": "I'm sorry, I don't understand. Please ask another question or type 'help' for assistance."
    },
    getResponse: function(userMessage) {
        userMessage = userMessage.toLowerCase();
        if (this.responses.hasOwnProperty(userMessage)) {
            return this.responses[userMessage];
        } else {
            return this.responses["default"];
        }
    }
};

// Sample chatbot logic
const chatInput = document.getElementById("chat-input");
const chatOutput = document.getElementById("chat-output");

chatInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const userMessage = chatInput.value;
        chatInput.value = "";
        chatOutput.innerHTML += `<div class="user-message">You: ${userMessage}</div>`;
        chatOutput.innerHTML += `<div class="bot-message">Bot: ${chatbot.getResponse(userMessage)}</div>`;
    }
});
