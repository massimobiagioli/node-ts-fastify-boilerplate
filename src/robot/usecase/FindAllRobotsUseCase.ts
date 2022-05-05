import RobotGateway from '../gateway/RobotGateway'

const FindAllRobotsUseCase = (robotGateway: RobotGateway) => async () => await robotGateway.getAll()

export default FindAllRobotsUseCase
