var fs = require("fs");
var buffer = Buffer.alloc(2147483647);
fs.writeFileSync("./mb.dat",buffer);
