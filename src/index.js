import { Hono } from 'hono'
import datos from './recepcion.json'

const app = new Hono()

app.get('/', (c) => {
	return c.json([
		{
		endpoint: '/',
		description: 'estas aca'
		}
	])
})

app.get('/hola', (c) => {
	return c.json(datos)
})

export default app