import express from 'express'
import { helloWorld } from './routes'

const app = express();

app.get('/', helloWorld)

app.listen(3000, () => {
    console.log('Listening on 3000')
})