const Discord = require("discord.js")
const isaping = require("./server")
const client = new Discord.Client()

var advtimer = "on"
var sidestimer = "on"


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

//turning advtimer on or off
client.on("message", msg => {
  if (msg.content.startsWith("$advtimerset")) {
    if (msg.content === "on" || "off") {
      advsetting = msg.content.split("$advtimerset ")[1]
      advtimer = advsetting
      if (!advtimer) {
        advtimer = "on"
      }
      if (advtimer != "on") {
        if (advtimer != "off") {
          advtimer = "on"
        }
      }
      msg.channel.send(`Adventure Timer is ${advtimer}`)
    }
  }
})

//displaying the value of advtimer
client.on("message", msg => {
  if (msg.content === "$advtimer") {
    msg.reply(`Advtimer is ${advtimer}`)
  }
})

//turning sidestimer on or off
client.on("message", msg => {
  if (msg.content.startsWith("$sidestimerset")) {
    if (msg.content === "on" || "off") {
      sidessetting = msg.content.split("$sidestimerset ")[1]
      sidestimer = sidessetting
      if (!sidestimer) {
        sidestimer = "on"
      }
      if (sidestimer != "on") {
        if (sidestimer != "off") {
          sidestimer = "on"
        }
      }
      msg.channel.send(`Sides timer set to ${sidestimer}`)
    }
  }
})

//displaying the value of sidestimer
client.on("message", msg => {
  if (msg.content === "$sidestimer") {
    msg.reply(`Sidestimer is ${sidestimer}`)
  }
})

//Adventure Time!
client.on("message", msg => {
  if (msg.content === ";adv") {
    if (advtimer == "on") {
      setTimeout(() => {
        msg.reply('Adventure Time!')
      }, 15000)
    }
  }
})

//Sides Are Ready!
client.on("message", msg => {
  //forage
  if (msg.content === ";forage") {
    if (sidestimer == "on") {
      setTimeout(() => {
        msg.reply("Forage Is Ready!")
      }, 300000)
    }
  }
  //chop
  if (msg.content === ";chop") {
    if (sidestimer == "on") {
      setTimeout(() => {
        msg.reply("Chop Is Ready!")
      }, 300000)
    }
  }
  //mine
  if (msg.content === ";mine") {
    if (sidestimer == "on") {
      setTimeout(() => {
        msg.reply("Mine Is Ready!")
      }, 300000)
    }
  }
})

//why are you reading this far down

//starting server
isaping()
//logging into discord
client.login(process.env.TOKEN)
//haha you  will not find my discord  login  token here