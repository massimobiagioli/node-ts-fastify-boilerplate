import { Robot } from '../entity/Robot'

interface RobotGateway {
    getAll(): Promise<Robot[]>
}

export default RobotGateway
