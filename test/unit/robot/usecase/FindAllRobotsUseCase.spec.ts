import { StubbedInstance, stubInterface } from 'ts-sinon'

import RobotGateway from '../../../../src/robot/gateway/RobotGateway'
import FindAllRobotsUseCase from '../../../../src/robot/usecase/FindAllRobotsUseCase'

describe('FindAllRobotsUseCase', () => {
    it('should invoke use case', async () => {
        const fakeRobots = [
            { id: '1', name: 'Robot 1', address: '10.10.10.1' },
            { id: '2', name: 'Robot 2', address: '10.10.10.2' },
            { id: '3', name: 'Robot 3', address: '10.10.10.3' },
        ]

        const stubRobotGateway: StubbedInstance<RobotGateway> = stubInterface<RobotGateway>()
        stubRobotGateway.getAll.resolves(fakeRobots)

        const useCase = FindAllRobotsUseCase(stubRobotGateway)

        const result = await useCase()

        expect(result).toStrictEqual(fakeRobots)
    })
})
