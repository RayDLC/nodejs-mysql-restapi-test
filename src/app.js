import express from 'express'
import recetasRoutes from './routes/recetas.routes.js'
import indexRoutes from './routes/index.routes.js'

//* Con esto inicializamos la aplicacion
const app = express()

//* Metodo para poder leer/transformar la data enviada a JSON
app.use(express.json())

app.use(indexRoutes)
app.use('/api', recetasRoutes)

//* Manejar las rutas que no existen
app.use((req, res, next) =>{
    res.status(404).json({
        message: "Pagina no encontrada"
    })
})

export default app;