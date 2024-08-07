const express = require("express");
const router = express.Router();
const connectToMongoDatabase = require("../mongo");
const { ObjectId } = require("mongodb");

/*
{
  description,
  responsible,
  priority,
  isCompleted
}
*/

// Get the list of all todos
router.get("/", async(req, res) => {
  let client = await connectToMongoDatabase();
  let data=await client.db("mernappdb").collection("todos").find({}).toArray();
  res.status(200).json(data);
});

// Get specific todo
router.get("/:id",async (req, res) => {
  let id = new ObjectId(req.params.id);
  let client = await connectToMongoDatabase();
  let data=await client.db("mernappdb").collection("todos").find({_id:id}).toArray();
  res.status(200).json(data);
});

// Create a todo
router.post("/", async (req, res) => {
  // validate request todo
  let client  = await connectToMongoDatabase();
  let result=await client.db("mernappdb").collection("todos").insertOne(req.body);
  // console.log(result);
  client.close();
  res.status(201).json(req.body);

});

// Update a todo
router.put("/:id", async(req, res) => {
  let client  = await connectToMongoDatabase();
let data= await client.db("mernappdb").collection("todos").findOneAndUpdate({_id: new ObjectId(req.params.id)},
{
  $set:{
    description: req.body.description,
    responsible: req.body.responsible,
    priority:req.body.priority,
    isCompleted:req.body.isCompleted
  }
},{
  returnDocument:'after'
}
)

res.status(200).send(data);

});

// Delete a todo
router.delete("/:id",async(req, res) => {
  let client  = await connectToMongoDatabase();
  await client.db("mernappdb").collection("todos").deleteOne({
    _id:new ObjectId(req.params.id)
  })
  res.status(204).send();
});

module.exports = router;
