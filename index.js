const http = require("http");
const fs = require("fs");

// Create Server
const server = http.createServer((req, res) => {
    console.log("A new request received!");
    console.log(req.url);

    // ⭐ Proper added line (CORS support) ⭐
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url === "/photo") {
        fs.readFile("images.jpeg", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Error loading image");
            }
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            res.end(data);
        });

    } else if (req.url === "/website") {
        fs.readFile("index.html", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Error loading website");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

// Start Server
server.listen(3000, () => {
    console.log("My server is running at http://localhost:3000/");
});
