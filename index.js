const express = require('express')
const app = express()
const port = 3000

const songs = [
"After You've Gone", 
"All My Tomorrows",
"Anything",
"Around the World",
"Bali Ha'i"
]

// 1- qo'shiqlar nomlari

app.get('/', (req, res) => {
    const randome_song = songs[Math.floor(Math.random()*songs.length-1)]
  res.send(randome_song)
})
// 2- tug'ilganvaqti
app.get('/birth_date', (req, res) => {
  res.send("<h1>December 12, 1915</h1>")
})

// 3 - tug'ilgan shaxri
app.get('/birth_city', (req, res) => {
    res.send("<h1>New Jersey</h1>")
  })

  // 4- ayollari
  app.get('/wives', (req, res) => {
    const wives = ['Nancy Barbato', 'Ava Gardner', 'Mia Farrow', 'Barbara Marx' ]
    res.send(wives.toString())
  })

  // 5- rasmi
  app.get('/picture', (req, res) => {
    res.redirect("https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg")
  })

  // 6 - /public => chiqishi kerak "Everybody can see this page"
  /*

    you code
  */

    // 7 - avtarizatsiya /protected => login: admin poro'l: admin => 
    /* Avtarizatsiyadan o'tsa chiqadi "Welcome, authenticated client"
    o'tmasa 401 Not authorized. chiqadi 
    */


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})