import { Static, Type } from '@sinclair/typebox'
import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from 'fastify'
import fp from 'fastify-plugin'

const LoginRequest = Type.Object({
    username: Type.String(),
    password: Type.String(),
})

type LoginRequest = Static<typeof LoginRequest>

const LoginResponse = Type.Object({
    token: Type.String(),
})

type LoginResponse = Static<typeof LoginResponse>

const AuthRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    server.post<{ Body: LoginRequest; Reply: LoginResponse }>(
        '/login',
        {
            schema: {
                body: LoginRequest,
                response: {
                    200: LoginResponse,
                },
            },
        },
        async (request, reply) => {
            //TODO: check username and password
            const token = await reply.jwtSign({ userId: '1' }, { expiresIn: '1h' })
            reply.send({ token })
        },
    )
}
export default fp(AuthRoutes)
