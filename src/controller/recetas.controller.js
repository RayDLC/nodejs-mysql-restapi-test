import {pool} from '../db.js'

//* Definimos las rutas para nuestros diferentes metodos y al mismo tiempo su funcionalidad

export const getRecetas = async (req, res) => {
    try{
        const [rows] = await pool.query('select * from recetas')
        res.json(rows)
    }catch (error){
        return res.status(500).json({
            message: "Algo fue mal, intentelo de nuevo"
        })
    }
}

export const getReceta = async (req, res) => {
    try{
        const [rows] = await pool.query('select * from recetas where id_receta = ?', [req.params.id])
    
        if(rows.length <= 0)
            return res.status(404).json({
                message: 'Receta no encontrada'
            })
    
        res.json(rows[0])
    }catch(error){
        return res.status(500).json({
            message: "Algo fue mal, intentelo de nuevo"
        })
    }
    
}

export const createReceta = async (req, res) => {
    try{
        const {rec_nombre, id_tipo, id_duracion, rec_ingredientes, rec_instrucciones} = (req.body)

        const [rows] = await pool.query('insert into recetas (rec_nombre, id_tipo, id_duracion, rec_ingredientes, rec_instrucciones) values (?, ?, ?, ?, ?)' , [rec_nombre, id_tipo, id_duracion, rec_ingredientes, rec_instrucciones])
    
        res.send({
            id: rows.insertId,
            rec_nombre, 
            id_tipo, 
            id_duracion, 
            rec_ingredientes, 
            rec_instrucciones,
        })
    }catch(error){
        return res.status(500).json({
            message: "Algo fue mal, intentelo de nuevo"
        })
    }
}

export const deleteReceta = async (req, res) => {
    try{
        const [result] = await pool.query('delete from recetas where id_receta = ?', [req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({
            message: "Receta no encontrada"
        })
    
        res.sendStatus(204)
    }catch(error){
        return res.status(500).json({
            message: "Algo fue mal, intentelo de nuevo"
        })
    }
}

export const updateReceta = async (req, res) => {
    
        
    try{

        const {id} = req.params
        const {rec_nombre, id_tipo, id_duracion, rec_ingredientes, rec_instrucciones} = req.body
        
        const [result] = await pool.query('update recetas set rec_nombre = ?, id_tipo = ?, id_duracion = ?, rec_ingredientes = IFNULL(?, rec_ingredientes), rec_instrucciones = IFNULL(?, rec_instrucciones) where id_receta = ?', [rec_nombre, id_tipo, id_duracion, rec_ingredientes, rec_instrucciones, id])
    
        if(result.affectedRows === 0) return res.status(404).json({
            message: "Receta no encontrada"
        })
    
        const [rows] = await pool.query('select * from recetas where id_receta = ?', [id])
    
    
        res.json(rows[0])
    }catch(error){
        return res.status(500).json({
            message: "Algo fue mal, intentelo de nuevo"
        })
    }
}

