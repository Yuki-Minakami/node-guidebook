const dns = require('dns');

dns.resolve4('baidu.com', (err, addresses) => {
  if (err) throw err;
  console.log(`addresses: ${JSON.stringify(addresses)}`);
});