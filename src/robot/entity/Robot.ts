type Robot = {
    id: string
    name: string
}

export const NewRobot = (id: string, name: string): Robot => ({
    id,
    name,
})

export default Robot
