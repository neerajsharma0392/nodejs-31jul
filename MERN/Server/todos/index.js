const express = require("express");
const router = express.Router();

// Get the list of all todos
router.get("/", (req, res) => {
  res.status(200).json({ message: "response from todos get /" });
});

// Get specific todo
router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `response from todos get /${req.params.id}` });
});

// Create a todo
router.post("/", (req, res) => {
  res.status(201).json({ message: "response from todos post /" });
});

// Update a todo
router.put("/:id", (req, res) => {
  res
    .status(204)
    .json({ message: `response from todos put /${req.params.id}` });
});

// Delete a todo
router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `response from todos delete /${req.params.id}` });
});

module.exports = router;
