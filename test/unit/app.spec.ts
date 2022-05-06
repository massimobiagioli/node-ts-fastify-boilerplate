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
        const expectedBody = JSON.stringify(expectedRobots)

        expect(response.statusCode).toBe(200)
        expect(response.body).toBe(expectedBody)
    })
})
