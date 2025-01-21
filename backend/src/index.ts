import express from "express";

const app = express();
const PORT = 8080;

//HTTP requests
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
