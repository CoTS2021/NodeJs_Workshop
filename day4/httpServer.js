// // index.js
// const { read } = require("fs");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req);
//   const { method, url } = req;

//   // Route: GET /
//   if (method === "GET" && url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello from Backend");
//   }

//   // Route: POST /api/todos
//   else if (method === "POST" && url === "/api/todos") {
//     res.writeHead(201, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Todo created", data: {} }));
//   }

//   // 404 route
//   else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Route not found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

const http = require("http");

const server = http.createServer((req, res) => {
  try {
    res.writeHead(201, { "content-type": "text/html" });
    res.write("<h1>Welcome to the backend</h1>");
    res.write("<p>This the paragraph tag</p>");
  } catch (error) {
    res.end("Internal server error");
  }
});

server.listen(4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});
