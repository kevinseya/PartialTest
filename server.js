const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server running with a service queue.\n');
});

// Create a WebSocket server using the HTTP server
const wss = new WebSocket.Server({ server });

// Set of connected clients
const clients = new Set();

// Messages queue
let messageQueue = [];

// Process the message queue
function processQueue() {
  if (messageQueue.length > 0) {
    const { message, sender } = messageQueue.shift(); // Get the next message
    clients.forEach((client) => {
      // Ensure the client is ready to receive messages
      if (client.readyState === WebSocket.OPEN) {
        client.send(
            JSON.stringify({
              type: 'chat',
              message: message.toString() // Convert Buffer to String
            })
          ); // Send message to all clients
      }
    });
    setTimeout(processQueue, 1000); // Wait 1 second before processing the next message
  } else {
    setTimeout(processQueue, 500); // Check the queue again if empty
  }
}

// Start processing the message queue
processQueue();

// Handle new WebSocket connections
wss.on('connection', (ws) => {
  console.log('New client connected.');
  clients.add(ws);

  // Send a welcome message to the client
  ws.send(JSON.stringify({ type: 'info', message: 'Connected to the server with a service queue.' }));

  // Handle messages received from clients
  ws.on('message', (message) => {
    console.log(`Message received: ${message}`);
    messageQueue.push({ message, sender: ws }); // Add the message to the queue
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected.');
    clients.delete(ws);
  });

  // Handle WebSocket errors
  ws.on('error', (error) => {
    console.error(`WebSocket error: ${error}`);
  });
});

// Start the HTTP server
const PORT = 80;
server.listen(PORT, () => {
  console.log(`WebSocket server running at http://localhost:${PORT}`);
});
