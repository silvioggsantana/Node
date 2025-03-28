import {randomUUID} from 'node:crypto'
import { title } from 'node:process'

export class Databasememory {
 #videos = new Map()

 list(search){
    return Array.from(this.#videos.entries())
   .map((videoArray) => {
      const id = videoArray[0] 
      const data = videoArray[1]

      return {
         id,
         ...data,
      }
   })

   .filter(video => {
      if(search){
         return video.title.includes(search)
      }

      return true
   })

 }

 create(video){
    const videosId = randomUUID()

    this.#videos.set( videosId , video)
 }

 update(video, id) {
    this.#videos.set(id , video)
 }

 delete(id) {
    this.#videos.set(id)
 }
}