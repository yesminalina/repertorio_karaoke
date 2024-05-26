import fs from 'fs'
import path from 'path'

const getHtml = (req, res) => {
  res.sendFile(path.resolve('index.html'))
}

const getSongs = (req, res) => {
  try {
    const songs = JSON.parse(fs.readFileSync('./src/data/repertorio.json', 'utf8'))
    res.status(200).json(songs)
  } catch (e) {
    res.status(500).send(`Hubo un error: ${e.message}`)
  }
}

const postSong = (req, res) => {
  try {
    const song = req.body
    const songs = JSON.parse(fs.readFileSync('./src/data/repertorio.json', 'utf8'))
    songs.push(song)
    fs.writeFileSync('./src/data/repertorio.json', JSON.stringify(songs))
    res.status(201).send('Canción agregada con éxito')
  } catch (e) {
    res.status(500).send(`Hubo un error: ${e.message}`)
  }
}

const deleteSong = (req, res) => {
  try {
    const songs = JSON.parse(fs.readFileSync('./src/data/repertorio.json', 'utf8'))
    const id = req.query.id
    const index = songs.findIndex(song => song.id === id)
    songs.splice(index, 1)
    fs.writeFileSync('./src/data/repertorio.json', JSON.stringify(songs))
    res.status(200).send('Canción eliminada con éxito')
  } catch (e) {
    res.status(500).send(`Hubo un error: ${e.message}`)
    console.log(e.message)
  }
}

const updateSong = (req, res) => {
  try {
    const songs = JSON.parse(fs.readFileSync('./src/data/repertorio.json', 'utf8'))
    const { id } = req.params
    const song = req.body
    const index = songs.findIndex(song => song.id.toString() === id)
    songs[index] = song
    fs.writeFileSync('./src/data/repertorio.json', JSON.stringify(songs))
    res.status(200).send('Canción actualizada con éxito')
  } catch (e) {
    res.status(500).send(`Hubo un error: ${e.message}`)
  }
}

export { getHtml, getSongs, postSong, deleteSong, updateSong }
