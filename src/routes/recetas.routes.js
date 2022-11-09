import {Router} from 'express'
import {getRecetas,getReceta, createReceta, updateReceta, deleteReceta} from '../controller/recetas.controller.js'

const router = Router()

router.get('/recetas', getRecetas)

router.get('/recetas/:id', getReceta)

router.post('/recetas', createReceta)

//* Podemos usar PATCH o PUT para actualizar parcialmente o todo el objeto
router.patch('/recetas/:id', updateReceta)

router.delete('/recetas/:id', deleteReceta)

export default router