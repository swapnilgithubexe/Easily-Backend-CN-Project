import express from "express";

const server = express();

server.get("/", (req, res) => {
  return res.send("<h1>Welcome!</h1>")
});

server.listen(5001, () => {
  console.log("Server is running on port number 5001");
});