import 'fastify'

declare module 'fastify' {
    interface FastifyInstance {
        config: {
            JWT_SECRET: string
        }
        authenticate: (request: FastifyRequest, reply: FastifyReply) => void
    }
}
