function sendMessage() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += "<p><b>You:</b> " + input + "</p>";

    let reply = "";

    if (input === "hi" || input === "hello") {
        reply = "Hello! How can I help you?";
    }
    else if (input.includes("ai")) {
        reply = "AI stands for Artificial Intelligence.";
    }
    else if (input.includes("ml")) {
        reply = "ML stands for Machine Learning.";
    }
     else if (input === "internship.") {
        reply = "This chatbot is developed as part of an AI/ML internship project.";
    }
    else if (input === "bye") {
        reply = "Goodbye! Have a nice day 😊";  
    }
     else if (input === "nlp") {
        reply = "NLP means Natural Language Processing.";
    }
    else if (input === "how are you") {
        reply = "I am fine . How can I help you?";
    }
    else if (input === "thank") {
        reply = "You're welcome!.";
    }
    else {
        reply = "Sorry, I didn't understand that.";
    }

    chatbox.innerHTML += "<p><b>chatbox:</b> " + reply + "</p>";
    document.getElementById("userInput").value = "";
}
