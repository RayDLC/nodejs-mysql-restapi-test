import {createPool} from 'mysql2/promise'
import {DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER} from './config.js'

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

pool.getConnection((err) =>{
    if(err){
        console.log(`Error al conectar a la BD ${err}`)
    }else{
        console.log("Conectado a MYSQL CHECK")
    }
})