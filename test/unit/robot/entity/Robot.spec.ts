import * as E from 'fp-ts/lib/Either'

import { NewRobot } from '../../../../src/robot/entity/Robot'

describe('Robot', () => {
    it('should create new robot', async () => {
        const robot = NewRobot('R1', 'Robot 1', '10.10.10.1')

        expect(E.isRight(robot)).toBeTruthy()
    })

    it('should return validation error', async () => {
        const robot = NewRobot('R1', 'Robot 1', 'xyz')

        expect(E.isLeft(robot)).toBeTruthy()
        if (E.isLeft(robot)) {
            const error = robot.left
            expect(error.message).toBe('/address must match format "ipv4"')
        }
    })
})
