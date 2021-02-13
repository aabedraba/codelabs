import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello world!");
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log("listening on http://localhost:" + port);
});
