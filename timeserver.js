const net = require('net');
const PORT = process.argv[2];

var date = new Date();
var yr = date.getFullYear();
var mn = ('00'+(date.getUTCMonth()+1)).slice(-2 );
var dy = ('00'+date.getDate()).slice(-2);
var hr = ('00'+date.getHours()).slice(-2);
var mi = ('00'+date.getMinutes()).slice(-2);

var outDate = yr + '-' + mn + '-' + dy + ' ' + hr + ':' + mi;

server = net.createServer( (socket) => {
  //socket.write(outDate);
  socket.end(outDate+"\n");
})
.on('error', (err) => {
  // handle errors here
  throw err;
});

server.listen(PORT);
