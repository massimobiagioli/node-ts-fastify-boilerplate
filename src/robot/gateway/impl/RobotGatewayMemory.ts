import Robot from '../../entity/Robot'

const RobotGatewayMemory = {
    async getAll(): Promise<Robot[]> {
        return [
            {
                id: '1',
                name: 'Robot 1',
            },
            {
                id: '2',
                name: 'Robot 2',
            },
            {
                id: '3',
                name: 'Robot 3',
            },
        ]
    },
}

export default RobotGatewayMemory
