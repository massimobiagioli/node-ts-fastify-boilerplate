type UseCase<Request, Response> = (request?: Request) => Response | Promise<Response>

export default UseCase
