import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from 'fastify'
import fp from 'fastify-plugin'

const RobotRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    server.get('/robot', {}, async (request, reply) => {
        const findAllRobotsUseCase = request.diScope.cradle.findAllRobotsUseCase
        return await findAllRobotsUseCase()
    })
}
export default fp(RobotRoutes)
