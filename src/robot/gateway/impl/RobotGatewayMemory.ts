import { Robot } from '../../entity/Robot'

const RobotGatewayMemory = {
    async getAll(): Promise<Robot[]> {
        return [
            {
                id: '1',
                name: 'Robot 1',
                address: '10.10.10.1',
            },
            {
                id: '2',
                name: 'Robot 2',
                address: '10.10.10.2',
            },
            {
                id: '3',
                name: 'Robot 3',
                address: '10.10.10.3',
            },
        ]
    },
}

export default RobotGatewayMemory
