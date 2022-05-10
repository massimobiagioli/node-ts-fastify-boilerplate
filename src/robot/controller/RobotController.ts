import { Static, Type } from '@sinclair/typebox'
import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from 'fastify'
import fp from 'fastify-plugin'

import { Robot } from '../entity/Robot'

const GetAllRobotsResponse = Type.Array(Robot)

type GetAllRobotsResponse = Static<typeof GetAllRobotsResponse>

const RobotRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    server.get<{ Reply: GetAllRobotsResponse }>(
        '/robot',
        {
            schema: {
                response: {
                    200: GetAllRobotsResponse,
                },
            },
            onRequest: [server.authenticate],
        },
        async (request, reply) => {
            const findAllRobotsUseCase = request.diScope.cradle.findAllRobotsUseCase
            const robots = await findAllRobotsUseCase()
            reply.send(robots)
        },
    )
}
export default fp(RobotRoutes)
