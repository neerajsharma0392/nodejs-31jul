//// ************************* Buffer ********************************
const fs = require("fs"); // CommonJs Module system
// import fs from "fs";

for (let i = 0; i < 10; i++) {
  console.log(i++);
}
fs.readFile("./Sample.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.readFile("./Sample.txt", (err, data) => {
  console.log(data);
});

// const buffer = new Buffer.alloc(10);
// // console.log(buffer);
// const buf2 = new Buffer.from([10, 20, 30, 40, 45]);
// // console.log(buf2);
// const buf3 = new Buffer.alloc(5, "hello", "utf-8");
// // console.log(buf3);

// const buf4 = new Buffer.alloc(5, "hello", "utf-8");
// let str = buf4.subarray(2, 4);
// // console.log(str.toString());

// const buf5 = new Buffer.alloc(5, "hello", "utf-8");
// str = buf5.toString("utf-8", 0, buf5.length);
// // console.log(str);

// const buf6 = new Buffer.alloc(5, "hello", "utf-8");
// const buf7 = new Buffer.alloc(5);
// // console.log(buf6);
// // console.log(buf7);
// buf6.copy(buf7);
// console.log(buf7);
// // console.log(buf7.toString());
//// ************************* Buffer ********************************

/////***************************** URL *******************************/
// const url = require("url");
// const urlString =
//   "https://www.example.com/path/to/page?param1=value&param2=value2#section";
// const parsedURL = url.parse(urlString);
// // console.log(parsedURL);
// console.log(parsedURL.query);
// console.log(parsedURL.host);
// console.log(parsedURL.protocol);
// console.log(parsedURL.pathname);
// console.log(parsedURL.hash);

// const urlObject = {
//   protocol: "https",
//   slashes: true,
//   host: "www.example.com",
//   hash: "#section",
//   search: "?param=value",
//   pathname: "/path/to/file",
// };
// const urlString2 = url.format(urlObject);
// // console.log(urlString2);

// const formUrl = "https://www.example/com/path/to/file";
// const toUrl = "../other/file";
// const resolvedUrl = url.resolve(formUrl, toUrl);
// console.log(resolvedUrl);
/////***************************** URL *******************************/

// const math = require("./math");

// console.log(math.add(2, 3));

//// ************************** Chalk ****************************
// import chalk from "chalk";

// console.log("Simple log");
// console.log(chalk.blue("Blue color log"));
// console.log(chalk.red("This is a error log"));
// console.log(chalk.greenBright("This is a success log"));
// console.log(chalk.bgGreen("This is a success log"));

//// ************************** Chalk ****************************

/// ********************* local Node Module ***************
const math = require("mynodemodule");

math.add(5, 6);
