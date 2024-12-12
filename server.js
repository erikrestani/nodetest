import { createServer } from 'node:http'

const server = createServer((request,response) => {
    response.write('Hello World')

    return response.end()
})

server.listen(3333)

// POST localhost:3333/videos
// DELETE localhost:333/videos/1