import { NewRobot } from '../../../../src/robot/entity/Robot'

describe('Robot', () => {
    it('should create new robot', async () => {
        const robot = NewRobot('R1', 'Robot 1')

        expect(robot.id).toBe('R1')
        expect(robot.name).toBe('Robot 1')
    })
})
