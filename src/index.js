require("dotenv").config();
const {Client, IntentsBitField, EmbedBuilder} = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

client.on("ready", (c) => {
  console.log(`Logged in as ${c.user.tag}`);
});

client.on("interactionCreate", (interaction) => {
  if(!interaction.isChatInputCommand()) return;
  if(interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;
    interaction.reply(`The sum is: ${num1 + num2}`);
  }
  if(interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Embed Title")
      .setDescription("This is an embed description")
      .setColor("Random")
      .addFields({ 
        name: "field title",
        value: "Some random value",
        inline: true,
      })
    interaction.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", (message) => {
  if(message.author.bot) {return;}
  if(message.content == "hi") {
    message.reply("Hello World!");
  }
});

client.login(process.env.TOKEN);