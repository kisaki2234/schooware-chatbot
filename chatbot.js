// chatbot.js
document.addEventListener('DOMContentLoaded', function() {
  const closeButton = document.getElementById('close-chat');
  const chatbot = document.getElementById('chatbot');
  
  closeButton.addEventListener('click', function() {
    chatbot.style.display = 'none';
    
  });
});

const responses = {
    "how many students": "We have 476 students for the current term.",
    "how many teachers": "There are 48 teachers in total.",
    "how many alumni": "There are 279 alumni records.",
    "add a student": "Navigate to Student Management > Add New Student.",
    "download newsletter": "You can download it from the Newsletters section.",
    "switch term": "Go to General Settings > Academic Term.",
    "class list": "There are 6 classes currently registered.",
    "help": "You can ask me about students, teachers, newsletters, class info, or how to use dashboard features.",
  };
  
  document.getElementById("chat-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const input = e.target.value.toLowerCase().trim();
      const reply = responses[input] || "Sorry, I didn’t get that. Try asking something else or type 'help'.";
      
      document.getElementById("chat-body").innerHTML += `
        <div class="user-msg">${input}</div>
        <div class="bot-msg">${reply}</div>
      `;
      
      e.target.value = "";
      document.getElementById("chat-body").scrollTop = document.getElementById("chat-body").scrollHeight;
    }
  });
  