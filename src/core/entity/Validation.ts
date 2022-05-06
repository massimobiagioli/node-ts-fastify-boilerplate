import addFormats from 'ajv-formats'
import Ajv, { ErrorObject } from 'ajv/dist/2019'

export const MSG_VALIDATION_FAILED = 'validation failed'

export const compiler = addFormats(new Ajv({}), [
    'date-time',
    'time',
    'date',
    'email',
    'hostname',
    'ipv4',
    'ipv6',
    'uri',
    'uri-reference',
    'uuid',
    'uri-template',
    'json-pointer',
    'relative-json-pointer',
    'regex',
])
    .addKeyword('kind')
    .addKeyword('modifier')

export const errorString = (errors: ErrorObject[] | null | undefined): string => {
    if (errors === null || errors === undefined) {
        return MSG_VALIDATION_FAILED
    }
    return errors.reduce((acc, cur) => `${acc}${cur.instancePath} ${cur.message}\n`, '').trimEnd()
}
