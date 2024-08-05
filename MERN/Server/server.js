const express = require("express");
const app = express();
const todosRouter = require("./todos");

app.use(express.json());
app.use("/todos", todosRouter);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
