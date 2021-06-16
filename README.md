![Logo](https://static.wikia.nocookie.net/degta/images/c/c1/24-7-Logo.svg/revision/latest/scale-to-width-down/1120?cb=20130929212857)

<div align="center">

<br>![Windows](https://github.com/danielkrupinski/Osiris/workflows/Windows/badge.svg?branch=master&event=push)
[![Downloads](https://img.shields.io/github/downloads/jagrosh/MusicBot/total.svg)](https://discord.gg/9ZrzNkzeN4)
[![Discord](https://discordapp.com/api/guilds/147698382092238848/widget.png)](https://dsc.gg/dst74)<br>
[![PayPal](https://img.shields.io/badge/donate-PayPal-104098.svg?style=plastic&logo=PayPal)](https://paypal.me/mrmotchy)
  
  </div>

# Features
  * **Watch my YT video & host your [bot 24/7](https://dsc.gg/dst74)**
  * Easy to run
  * use my script to keep your bot alive


# 🔩 Installation
## Install [discord.js](https://discord.js.org/#/)
```
$ npm install discord.js
```

## Install [npm](https://www.npmjs.com)
```
$ npm install 
```

# 💻 Code example
This is a simple example of code using this package.

```js
const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`OK`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;

//keep alive script was made by cpt.motchy
```
&
```js
const { Client } = require("discord.js");
const keepAlive = require('./server.js');
 
const client = new Client({
  disableEveryone: true
});
 
keepAlive();
client.login(process.env.TOKEN);
```

<br/>
