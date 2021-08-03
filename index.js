const Discord = require("discord.js")
const client = new Discord.Client()

var advtimer = "on"
var sidestimer = "on"

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

//turning advtimer on or off
client.on("message", msg => {
  if(msg.content.startsWith("$advtimerset")) {
    if(msg.content === "on" || "off") {
    advsetting = msg.content.split("$advtimerset ")[1]
    advtimer = advsetting
    
    msg.channel.send("Value changed")
    }
  }
  if(!advtimer) {
    advtimer = "on"
  }
})

//displaying the value of advtimer
client.on("message", msg => {
  if(msg.content === "$advtimer") {
    msg.reply(`Advtimer is ${advtimer}`)
  }
})

//turning sidestimer on or off
client.on("message", msg => {
  if(msg.content.startsWith("$sidestimerset")) {
    if(msg.content === "on" || "off") {
      sidessetting = msg.content.split("$sidestimerset ")[1]
      sidestimer = sidessetting
      msg.channel.send("Value changed")
    }
  }
  if(!sidestimer) {
    sidestimer = "on"
  }
})

//displaying the value of sidestimer
client.on("message", msg => {
  if(msg.content === "$sidestimer") {
    msg.reply(`Sidestimer is ${sidestimer}`)
  }
})

//Adventure Time!
client.on("message", msg => {
  if(msg.content === ";adv"){
    if(advtimer == "on") {
      setTimeout(() => {
        msg.reply('Adventure Time!')}, 12000)
    }
  }
})

//Sides Are Ready!
//This is long because it was pinging it self
client.on("message", msg => {
  //forage
  if(msg.content === ";forage"){
    if(sidestimer == "on"){
      setTimeout(() => {
        msg.reply("Sides Are Ready!")}, 300000)
    }
  }
  //chop
   if(msg.content === ";chop"){
    if(sidestimer == "on"){
      setTimeout(() => {
        msg.reply("Sides Are Ready!")}, 300000)
    }
  }
  //mine
   if(msg.content === ";mine"){
    if(sidestimer == "on"){
      setTimeout(() => {
        msg.reply("Sides Are Ready!")}, 300000)
    }
  }
})

//logging into discord
client.login(process.env.TOKEN)