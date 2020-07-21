import axios from 'axios'
import { Collection } from './Collection'

export class FakeDbRepository<Entity>
{

    #collections: Array<Collection<Entity>> = []
    #store: any = {}

    constructor (private _server: string, private _db:string, private _table: string, private _Entity: new (data?: any) => Entity)
    {
        
    }

    private get url()
    {
        return `${this._server}/${this._db}/${this._table}/`
    }

    public getEntity(key: string): Entity
    {
        if (!this.#store[key]) {

            this.#store[key] = new this._Entity()

            axios.get(this.url + key).then(({data}) => {
                setTimeout(() => { this.#store[key].setData(data) }, 2000)
                
            })
        }
        
        return this.#store[key]
    }


    public getCollection(): Collection<Entity>
    {

        let lastKey = this.#collections.push(new Collection<Entity>(this)) - 1 
        return this.#collections[lastKey]

    }


    public loadCollectionData(collection: Collection<Entity>, query: any) //for collection
    {
        axios.get(this.url, {params: {body: query}}).then(({data}) => {
            //collection.content = []//update collection content
            data.forEach((entityData: any) => {
                let key = entityData._id
                if (this.#store[key]) {this.#store[key].reload(entityData)} else { this.#store[key] = new this._Entity(entityData) }
                collection.content.push(key)
            })
            console.log(collection)
        })
    }





    // public getOne(key: string)
    // {
    //     axios.get(this.url + key).then(({data}) => {
    //         let entity = this.#store[data._id] = 
    //         return data
    //     })
    // }

    // public getMany(query: any)
    // {
    //     axios.get(this.url, {params: {body: query}}).then(({data}) => {
    //         return data
    //     })
    // }
}