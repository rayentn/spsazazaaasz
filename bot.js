const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get('522823157204123648')
setInterval(function() {
channel.send(`**Spam4ver**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
