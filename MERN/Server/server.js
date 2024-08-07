const express = require("express");
const cors= require("cors");
const app = express();

app.use(cors());
const todosRouter = require("./todos");

app.use(express.json());
app.use("/todos", todosRouter);

app.listen(3001, () => {
  console.log("server listening on port 3001");
});
