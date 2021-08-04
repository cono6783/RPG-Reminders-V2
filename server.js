const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Bot is running!")
})

function isaping() {
  server.listen(3000, () => {
    console.log("Server is Ready")
  })
}

module.exports = isaping