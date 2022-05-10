import { Static, Type } from '@sinclair/typebox'
import { FastifyReply } from 'fastify'
import { FastifyRequest } from 'fastify'
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

    server.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            await request.jwtVerify()
        } catch (err) {
            reply.send(err)
        }
    })
}
export default fp(AuthRoutes)
