var http = require('http');
var session = require('./node-session.js');

var host = "0.0.0.0"; //Change these values to match your own test server
var port = process.env.C9_PORT;//Unfortunately, Cloud9IDE forces these values

http.createServer(function (req, res) {

  var yourSession = session.start(res, req);
    
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  if(yourSession.testValue) {
    res.write("Session Test Value: " + yourSession.testValue);
  } else {
    res.write("Hey, you should refresh your page.  If all is well, you will be display a session variable!");   
  }
  
  res.end();
  
  yourSession.testValue = "It worked!";
  
  
}).listen(process.env.C9_PORT, "0.0.0.0");
console.log("Server running at http://" + host + ":" + port);