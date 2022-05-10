import 'fastify-awilix'

import UseCase from '../../src/core/usecase/UseCase'
import { Robot } from '../../src/robot/entity/Robot'
import RobotGateway from '../../src/robot/gateway/RobotGateway'

declare module 'fastify-awilix' {
    interface Cradle {
        robotGateway: RobotGateway
        findAllRobotsUseCase: UseCase<void, Promise<Robot[]>>
    }
}
