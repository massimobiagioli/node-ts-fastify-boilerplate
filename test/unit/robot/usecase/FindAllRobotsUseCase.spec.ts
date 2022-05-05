import { StubbedInstance, stubInterface } from 'ts-sinon'

import { NewRobot } from '../../../../src/robot/entity/Robot'
import RobotGateway from '../../../../src/robot/gateway/RobotGateway'
import FindAllRobotsUseCase from '../../../../src/robot/usecase/FindAllRobotsUseCase'

describe('FindAllRobotsUseCase', () => {
    it('should invoke use case', async () => {
        const fakeRobots = [NewRobot('1', 'Robot 1'), NewRobot('2', 'Robot 2')]

        const stubRobotGateway: StubbedInstance<RobotGateway> = stubInterface<RobotGateway>()
        stubRobotGateway.getAll.resolves(fakeRobots)

        const useCase = FindAllRobotsUseCase(stubRobotGateway)

        const result = await useCase()

        expect(result).toStrictEqual(fakeRobots)
    })
})
