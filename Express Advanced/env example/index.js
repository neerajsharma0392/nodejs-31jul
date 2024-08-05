// const portNumber = process.env.PORT || 3000;
// console.log(portNumber);

const dotEnv = require("dotenv");
dotEnv.config();

console.log(process.env.PAYMENT_API);
