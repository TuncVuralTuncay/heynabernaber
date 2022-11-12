const { EmbedBuilder, PermissionsBitField, Embed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require('node:timers/promises').setTimeout;
const fetch = require("node-fetch")
module.exports  = async ={
  data: new SlashCommandBuilder()
    .setName("id")
    .setDescription("İdsi belirtilen kullanıcının bilgilerini atar.")
    .addStringOption(option =>
      option.setName('id')
        .setDescription('Kullanıcı idsi')
        .setRequired(true)
    )
    ,
    run: async (client, interaction) => {
      interaction.reply("YOK AGA YOK ")
    }
 };
