const envSchema = {
    type: 'object',
    required: ['JWT_SECRET'],
    properties: {
        JWT_SECRET: {
            type: 'string',
            default: 'secret',
        },
    },
}

export default envSchema
