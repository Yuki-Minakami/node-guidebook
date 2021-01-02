const fs = require('fs');
var kbData = Buffer.alloc(1024);
var mbData = Buffer.alloc(20*1024*1024);
var gbData = Buffer.alloc(1.5*1024*1024*1024);

fs.writeFileSync("kb.dat",kbData);
fs.writeFileSync("mb.dat",mbData);
fs.writeFileSync("gb.dat",gbData);
