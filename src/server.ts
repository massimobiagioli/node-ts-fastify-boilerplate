import pino from 'pino'

import createApp from './app'

const server = createApp({
    logger: pino({
        level: 'info',
    }),
})

server.listen(8080, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    server.log.info(`Server listening at ${address}`)
})
