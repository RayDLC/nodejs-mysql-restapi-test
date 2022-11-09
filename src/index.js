import app from './app.js'
import { PORT } from './config.js'

//* Definimos el puerto donde estara esuchando nuestra app
app.listen(PORT)

//* Mensaje de confirmacion, servidor corriendo
console.log('Server corriendo en el puerto', PORT)