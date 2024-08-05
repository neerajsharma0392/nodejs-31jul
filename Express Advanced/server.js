// const express = require("express");
// const app = express();

// // app.use("/student", (req, res, next) => {
// //   console.log("Student middleware executed");
// //   next();
// // });

// app.use(express.static("public"));

// // app.use((req, res, next) => {
// //   console.log("Body before express json middleware", req.body);
// //   next();
// // });
// app.use(express.json());
// app.use(express.urlencoded());
// // app.use((req, res, next) => {
// //   console.log("Body after express json middleware", req.body);
// //   next();
// // });

// // autentication/authorization
// app.use((req, res, next) => {
//   //   console.log("Token: ", req.headers.authorization);
//   if (req.headers.authorization.includes("ABC123")) {
//     next();
//   } else {
//     res.status(403).json({ message: "Authorization failed" });
//   }
// });

// /// Check data type middleware
// // app.use((req, res, next) => {
// //   if (req.headers["content-type"] == "application/json") {
// //     next();
// //   } else {
// //     res.status(400).json({ message: "BadRequest" });
// //   }
// // });

// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("/ first middleware got executed");
//     res.status(200).json({ message: "/ get endpoint" });
//     //next();
//   },
//   (req, res, next) => {
//     console.log("/ second middleware got executed");
//     next();
//   },
//   (req, res, next) => {
//     console.log("/ third middleware got executed");
//     res.status(200).json({ message: "/ get endpoint" });
//   }
// );

// // app.get("/", (req, res) => {
// //   res.status(200).json({ message: "/ endpoint called" });
// // });

// app.post("/Student", (req, res) => {
//   console.log("Student endpoint body ", req.body);
//   res.status(201).json({ message: "created" });
// });

// app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });

///********************* Exception ************************************/
const express = require("express");
const app = express();

app.get("/SyncError", (req, res, next) => {
  try {
    throw new Error("Some error occured");
  } catch (ex) {
    next(ex);
  }
});

app.get("/AsyncError", (req, res, next) => {
  // mimicking async operation
  setTimeout(() => {
    try {
      throw new Error("Some error occured");
    } catch (ex) {
      next(ex);
    }
  }, 1000);
});

/// Error middleware
app.use((error, req, res, next) => {
  if (error) {
    res.status(500).json({ message: "Middleware - Server Error" });
  }
  next();
});

app.listen(3000, () => {
  console.log("listening port 3000");
});
///********************* Exception ************************************/
