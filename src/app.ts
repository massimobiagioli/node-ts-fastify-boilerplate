import fastifyEnv from '@fastify/env'
import '@fastify/jwt'
import fastifyJwt from '@fastify/jwt'
import { asFunction, asValue } from 'awilix'
import fastify from 'fastify'
import { diContainer, fastifyAwilixPlugin } from 'fastify-awilix'

import authController from './auth/controller/AuthController'
import envSchema from './core/config/envSchema'
import robotController from './robot/controller/RobotController'
import RobotGatewayMemory from './robot/gateway/impl/RobotGatewayMemory'
import FindAllRobotsUseCase from './robot/usecase/FindAllRobotsUseCase'

const importDynamic = new Function('modulePath', 'return import(modulePath)')
const fastifyPrintRoutes = importDynamic('fastify-print-routes')

const createApp = (opts = {}) => {
    const app = fastify(opts)

    app.register(fastifyEnv, {
        schema: envSchema,
        dotenv: true,
    }).after(() => {
        app.register(fastifyPrintRoutes)
        app.register(fastifyAwilixPlugin, {})
        app.register(fastifyJwt, {
            secret: app.config.JWT_SECRET,
        })

        diContainer
            .register({
                robotGateway: asValue(RobotGatewayMemory),
            })
            .register({
                findAllRobotsUseCase: asFunction(({ robotGateway }) => FindAllRobotsUseCase(robotGateway)),
            })

        app.register(authController)
        app.register(robotController)
    })

    return app
}

export default createApp
