import { Repository } from "./RepositoryInterface"

export abstract class Entity
{
    public key:string | null

    constructor (private repository: Repository, data?:any) {
        this.key = data ? data._id : null
        if (data) this.setData(data)
    }

    public setData(data:any) {}
    public reload(data:any)
    {
        this.setData(data)
    }

    public save()
    {
        if (this.key)
        {
            this.repository.update(this.key, this)
        } else {
            this.repository.create(this)
            // .then(({data}) => {
            //     this.key = data._id
            //     //this.setData(data)
            // })
        }
    }

    public delete()
    {
        if (this.key)
        {
            this.repository.delete(this.key)
            //console.log(`DB: deleted ${this.key}`)
        } else {
            console.log(`Has no created`)
        }
    }

}