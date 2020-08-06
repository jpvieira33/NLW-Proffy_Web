//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso quer atualizar ou deletar
//Query Params: Listagem, Paginação, Filtros, Ordenação

import express from 'express'
import cors from 'cors'
import routes from './routes'


const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333, () => console.log('Conectado...'))

