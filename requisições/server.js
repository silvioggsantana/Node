
import { fastify } from 'fastify'  
import { Databasememory } from './databasememory.js'

const server = fastify()

const database = new Databasememory()

server.get('/videos', (request) => {
    const search = request.query.search

    const videos = database.list(search)

    return videos
})

server.post('/videos', async (request, response) => {
    
    const {title , description , duration} = request.body
    
    await database.create({
        title: title,
        description: description,
        duration: duration
    })

    return response.status(201).send()
})

server.put('/videos/:id', async (request ,response) => {
    const videoId = request.params.id
    const {title , description , duration} = request.body

    database.update(videoId, {
        title: title,
        description: description,
        duration: duration
    })

    return response.status(204).send()
})

server.delete('/videos/:id', (request, response) => {
    const videoId = request.params.id

    database.delete(videoId)

    return response.status(204).send()
})


server.listen({
    port: 3333,
})