const { log } = require("console");
let os = require("os");

// Info bout user
let user = os.userInfo();

console.log(user);

// System uptime in secs

console.log(`The system is up ${os.uptime} seconds`);

let currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
