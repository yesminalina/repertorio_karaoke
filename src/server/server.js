import express from 'express'
import repertorioRoutes from '../routes/repertorio.routes.js'

const PORT = 3000
const app = express()

app.use(express.json())
app.use('/', repertorioRoutes)

app.listen(PORT, console.log(`Servidor Encendido: http://localhost:${PORT} `))

export default app
