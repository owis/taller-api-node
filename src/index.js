/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/


export default {
	async fetch(request, env, ctx) {
		return new Response("Hello World!");
	},
};

*/
import { hono } from 'hono'
import datos from 'recepcion.json'

const app = new Hono()

app.get('/'), (c) => {
	return c.json([
		{
		endpoint: '/'
		description: 'estas aca'
		}
	])
}

app.get('/hola'), (c) => {
	return c.json( datos )
}

export default app