// ///// ********* Create Server using Core modules **************************
// const http = require("http");

// const processRequest = (req, res) => {
//   console.log("Request method is " + req.method);

//   if (req.method == "GET") {
//     res.end("Get request processed by the server");
//     return;
//   }

//   if (req.method == "POST") {
//     res.end("Post request processed by the server");
//     return;
//   }

//   res.end("Method not supported");
// };

// const server = http.createServer(processRequest);

// server.listen(3000, () => {
//   console.log("Listening to port no 3000");
// });

// ///// *************************************************

/////**********************************Express**********************************/
const express = require("express");
const app = express();
app.use(express.json()); // middleware

// Endpoint
// app.method("path", handler function for the request)
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Hello from Express app" });
// });

const data = [
  {
    id: 1,
    name: "Paulamee",
    city: "Delhi",
    age: 21,
    salary: 40000,
  },
  {
    id: 2,
    name: "Geeta",
    city: "Bangalore",
    age: 22,
    salary: 38000,
  },
];

// Employee is a resource
app.get("/employees", (req, res) => {
  res.status(200).json({ data: data });
});

app.get("/employees/:id", (req, res) => {
  const id = req.params.id;
  let employee = data.find((e) => e.id == id);

  if (employee) {
    res.status(200).json({ employee });
  } else {
    res.status(404).json({ message: "not found" });
  }
});

app.post("/employees", (req, res) => {
  let employee = req.body;

  // validate request
  for (let key in employee) {
    if (
      key == "name" ||
      key == "age" ||
      key == "city" ||
      key == "salary" ||
      key == "id"
    ) {
      continue;
    } else {
      res.status(400).json({ message: "BadRequest" });
    }
  }

  data.push(employee);
  res.status(201).json({ data: data.find((e) => e.id == req.body.id) });
});

app.put("/employees/:id", (req, res) => {
  let employee = req.body;

  // validation?
  if (data.find((e) => e.id == employee.id)) {
    data.splice(
      data.findIndex((e) => e.id == req.params.id),
      1
    );
    data.push(employee);
    res.status(200).json(employee);
  } else {
    res.status(404).json("not found");
  }
});

app.delete("/employees/:id", (req, res) => {
  if (data.find((e) => e.id == req.params.id)) {
    data.splice(
      data.findIndex((e) => e.id == req.params.id),
      1
    );

    res.status(204).json();
  } else {
    res.status(404).json("not found");
  }
});

// Patch operation?

app.listen(3000, () => {
  console.log("Server is listening on port no 3000");
});
