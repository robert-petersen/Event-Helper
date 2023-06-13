require("dotenv").config();
const {Client, GatewayIntentBits} = require("discord.js");
const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
  if(message.content == "hi") {
    message.reply("Hello World!");
  }
})

client.login(TOKEN);