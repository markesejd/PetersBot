// npm install hipchat-webqueue-client node-fetch os
const os = require("os");
const fetch = require("node-fetch");
const HipchatQueueClient = require("hipchat-webqueue-client");
const queue = new HipchatQueueClient({ 
  username: "hipchat-pingpong", 
  password: "fd8d612b-9873-417d-98a3-8e877e636def", 
  endpoint: "amqp.edamtoft.com", 
  queue: "hipchat_messages_ping"
});
queue.messages.subscribe(msg => fetch(
  "https://dealeron.hipchat.com/v2/room/3612852/notification?auth_token=f75b3AkrG1Wd0ggRZC9qJ3xSOHNYY7uu0ohwgh5b",
  {
    method: "POST",
    body: JSON.stringify({
      color: "green",
      notify: true,
      message_format: "text",
      //message: `@${msg.item.message.from.mention_name} Pong from ${os.hostname()}`
      message: `${os.hostname()} has started a Peters Order. 10 minutes to add to order.`
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }));
queue.connect().then(() => console.log("Connected"));