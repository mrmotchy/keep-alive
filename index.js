  
const { Client } = require("discord.js");
const keepAlive = require('./server.js');
 
const client = new Client({
  disableEveryone: true
});
 
keepAlive();
client.login(process.env.TOKEN);