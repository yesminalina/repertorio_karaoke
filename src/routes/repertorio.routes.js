import Router from 'express'
import { getHtml, getSongs, postSong, deleteSong, updateSong } from '../controllers/repertorioControllers.js'

const router = Router()

router.get('/', getHtml)
router.get('/canciones', getSongs)
router.post('/canciones', postSong)
// Ruta método delete que recibe id por query strings:
router.delete('/canciones', deleteSong)
// Ruta método put que recibe id por params:
router.put('/canciones/:id', updateSong)

export default router
