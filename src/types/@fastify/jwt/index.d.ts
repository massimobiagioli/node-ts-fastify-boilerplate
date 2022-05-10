import '@fastify/jwt'

declare module '@fastify/jwt' {
    interface FastifyJWT {
        payload: { userId: string }
        user: { id: string }
    }
}
