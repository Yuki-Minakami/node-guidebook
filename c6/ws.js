const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });
wss.on('connection', (ws)=> {
    //监听消息
    ws.on('message', (message)=>{
        console.log( `received:${message}`); 
        //一个小恶作剧
        message = message.replace("吗","").replace("?","").replace("？","!");
        ws.send(`Server : ${message}`);
    });
    //连接成功
    console.log("Connected");
});


// var server = http.createServer(app);
// var wss = new WebSocket.Server({server:server});

// wss.on('connection', (ws) => {
//     ws.on('message', (message)=> {
//     });
//     ws.send('Connected');
// });

// server.listen(3000);
