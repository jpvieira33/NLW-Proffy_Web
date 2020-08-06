import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionController from './controllers/ConnectionsControllers'

const routes = express.Router()
const classesControllers = new ClassesController
const connectionControler = new ConnectionController

routes.post('/classes', classesControllers.create)
routes.get('/classes', classesControllers.index)

routes.post('/connections', connectionControler.create)
routes.get('/connections', connectionControler.index)


export default routes