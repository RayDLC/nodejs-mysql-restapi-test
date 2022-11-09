import {config} from 'dotenv'

config()

//* Puerto del servidor de la aplicacion mas no de la BD
export const PORT = process.env.PORT || 3000

//* Variables de entorno para la conexion con la BD
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root'
export const DB_HOST = process.env.DB_HOST || '127.0.0.1'
export const DB_DATABASE = process.env.DB_DATABASE || 'recetasforyou'
export const DB_PORT = process.env.DB_PORT || '3306'