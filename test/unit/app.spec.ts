import createApp from '../../src/app'

describe('app', () => {
    it('should find all robots', async () => {
        const app = createApp()

        const response = await app.inject({
            method: 'GET',
            url: '/robot',
        })

        const expectedRobots = [
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
        const expectedBody = JSON.stringify(expectedRobots)

        expect(response.statusCode).toBe(200)
        expect(response.body).toBe(expectedBody)
    })
})
