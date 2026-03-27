const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
    { id: 1, name: "Docker", description: "Container platform" },
    { id: 2, name: "Nginx", description: "Web server" },
    { id: 3, name: "Express", description: "Node.js framework" },
];

app.get("/api/items", (req, res) => {
    res.json(items);
});

app.get("/api/health", (req, res) => {
     res.json({ status: "ok", container: require("os").hostname() });
});

app.post("/api/items", (req, res) => {
    const item = { id: items.length + 1, ...req.body };
    items.push(item);
    res.status(201).json(item);
});

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});