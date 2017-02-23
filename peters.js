var express = require('express');
var app = express();
const fetch = require("node-fetch");
const HipchatQueueClient = require("hipchat-webqueue-client");
const queue = new HipchatQueueClient({ 
  username: "petersbot", 
  password: "3626d5e4-38f5-4839-b180-0f2516fcb76c", 
  endpoint: "amqp.edamtoft.com", 
  queue: "petersbot"
});


app.use(express.static('main'));

var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log("Started server at port", port);
});

queue.messages.subscribe(msg => console.log(JSON.stringify(msg)));


queue.connect().then(() => console.log("Connected"));

