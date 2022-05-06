import { Static, Type } from '@sinclair/typebox'
import * as E from 'fp-ts/lib/Either'

import * as V from '../../../src/core/entity/Validation'

export const Robot = Type.Object({
    id: Type.String(),
    name: Type.String(),
    address: Type.String({ format: 'ipv4' }),
})

export type Robot = Static<typeof Robot>

const validate = V.compiler.compile(Robot)

export const NewRobot = (id: string, name: string, address: string): E.Either<Error, Robot> => {
    const robot = { id, name, address }
    if (!validate(robot)) {
        return E.left(new Error(V.errorString(validate.errors)))
    }
    return E.right(robot)
}
