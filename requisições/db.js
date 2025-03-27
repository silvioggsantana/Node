import randomUUID from "node:crypto"

export class DatabasePostgres{
    async list(search){
        let videos
        
        if(search){
            videos = await sql`select + from videos where title ilike "&{search}&"`
        }else{
            videos = await sql`select + from videos`
        }

        return videos
    }

    async create(video){
        const videoId = await randomUUID()

        await sql`insert into videos (id,title,descripition, durantion) VALUES ($(videoId), &(title) , $(description) , &(duration)  )`
    }

    update(id, video){

    }

    delete(id){

    }
}