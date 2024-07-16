document.getElementById('send-button').addEventListener('click', sendMessage);

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;

    if (!userInput) return; // Prevent sending empty messages

    const response = await fetch('https://ai-chatbot-lyart-ten.vercel.app/chat', { // Updated URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();

    // Display the response in the chat output
    const chatOutput = document.getElementById('chat-output');
    chatOutput.innerHTML += `<div>User: ${userInput}</div>`;
    chatOutput.innerHTML += `<div>Bot: ${data.reply || 'No response'}</div>`;

    // Clear the input field
    document.getElementById('user-input').value = '';
}
