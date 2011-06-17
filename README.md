#node-session
node-session was a project started by @Joe_Wegner to handle simple HTTP sessions in Node.js.  While node-session may not be the most feature heavy module for handling sessions, it's extremely lightweight and easy to use.  Feel free to fork your own version and send in some pull requests!  
  
##Warning
I want to make it very clear up front that node-session is NOT fool-proof.  I can only say for certain that I've tested it, and not found any security holes.  That is not to say that other people won't.  I encourage you to dig into the code yourself and make sure you feel comfortable before using node-session in a production environment.  I will be deeply sorry, but cannot be held responsible for any security flaws that result from using node-session.  
  
##Use
node-session is stupid simple to use.  As long as you've got a HTTP server running, it's really just two lines to grab the current session.  
`var session = require('./node-session.js');

//Start your http server however you like. Imagine the code below is inside of your server loop

var yourSession = session.start(response, request); //response and request are the res/req variables passed from http.createServer()

yourSession.testValue = "A session variable" //Create a session variable called testValue
`  
As you can see, it's very simple.  As expected, the session variables you created (like testValue) will be available the next time the user loads your page.  Sessions timeout after 30 minutes by default.

##Testing
I've provided a test file that you can use to make sure that node-session really is working.  You'll have to make some quick edits, because of Cloud9IDE's HTTP server requirements.
Change these two lines to reflect your actual server setup.
`var host = "0.0.0.0"; //Change these values to match your own test server
var port = process.env.C9_PORT;//Unfortunately, Cloud9IDE forces these values`

Then load up your HTTP server.  You should get a message telling you to reload the page.  Once you reload it you should see that the session variable testValue has been sucessfully set.

##Todo

-Allow different session time-out lengths.

##Contributors

-Joe Wegner (@Joe_Wegner) ~ Blog at: http://www.wegnerdesign.com