const path = require('path')
const portfinder = require('portfinder')
const Fastify = require('fastify').default

module.exports = async function (indexHtml) {
    const fastify = Fastify({ logger: false })
    const fastifyStatic = require('fastify-static')

    const assetsPath = path.join(__dirname, '../assets')

    fastify.register(fastifyStatic, {
        root: assetsPath,
        wildcard: '**/!(*.html)',
    })

    fastify.get('/', (req, res) => {
        res.type('text/html').send(indexHtml)
    })

    try {
        let port = await portfinder.getPortPromise()
        await fastify.listen(port, '0.0.0.0')
        console.log(`server listening on http://localhost:${port}`)
    } catch (err) {
        fastify.log.error(err)
        // process.exit(1)
    }
}
