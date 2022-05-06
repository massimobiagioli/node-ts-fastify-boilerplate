import { asFunction, asValue } from 'awilix'
import fastify from 'fastify'
import { diContainer, fastifyAwilixPlugin } from 'fastify-awilix'

import UseCase from './core/usecase/UseCase'
import robotController from './robot/controller/RobotController'
import { Robot } from './robot/entity/Robot'
import RobotGateway from './robot/gateway/RobotGateway'
import RobotGatewayMemory from './robot/gateway/impl/RobotGatewayMemory'
import FindAllRobotsUseCase from './robot/usecase/FindAllRobotsUseCase'

const importDynamic = new Function('modulePath', 'return import(modulePath)')
const fastifyPrintRoutes = importDynamic('fastify-print-routes')

declare module 'fastify-awilix' {
    interface Cradle {
        robotGateway: RobotGateway
        findAllRobotsUseCase: UseCase<void, Promise<Robot[]>>
    }
}

const createApp = (opts = {}) => {
    const app = fastify(opts)

    app.register(fastifyPrintRoutes)
    app.register(fastifyAwilixPlugin, {})

    diContainer
        .register({
            robotGateway: asValue(RobotGatewayMemory),
        })
        .register({
            findAllRobotsUseCase: asFunction(({ robotGateway }) => FindAllRobotsUseCase(robotGateway)),
        })

    app.register(robotController)

    return app
}

export default createApp
