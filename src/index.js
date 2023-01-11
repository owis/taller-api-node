import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static.module'
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

app.get('/static/*', serveStatic({ root: './' }))

export default app