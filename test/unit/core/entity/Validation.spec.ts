import * as V from '../../../../src/core/entity/Validation'
import { Robot } from '../../../../src/robot/entity/Robot'

describe('Validation', () => {
    it('should return error message', () => {
        const validate = V.compiler.compile(Robot)
        const robot = { id: '1', name: 'Robot 1', address: 'xyz' }

        validate(robot)

        expect(V.errorString(validate.errors)).toBe('/address must match format "ipv4"')
    })

    it('should return unknown error message', () => {
        expect(V.errorString(null)).toBe('validation failed')
    })
})
