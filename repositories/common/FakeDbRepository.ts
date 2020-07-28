import axios from 'axios'
import { Collection } from './Collection'
import { Repository } from './RepositoryInterface'
import { Entity as AEntity } from './Entity'

import Vue from 'vue'
import { UserEntity } from '../test/UserEntity'

export class FakeDbRepository<Entity extends AEntity> implements Repository
{

    #collections: Array<Collection> = []
    #store: any = {}

    constructor (private _server: string, private _db:string, private _table: string, private _Entity: new (repository: FakeDbRepository<Entity>, data?: any) => Entity)
    {
        
    }

    private get url()
    {
        return `${this._server}/${this._db}/${this._table}/`
    }


    //найти все с this.id

    //найти все с [id] в pivot#field
    //сортируем и делаем массовый resolve()
    //...

    //new
    public newEntity (): Entity
    {
        return new this._Entity(this)
    }

    //resolve
    public getEntity(key: string): Entity
    {
        if (!this.#store[key]) {

            this.#store[key] = new this._Entity(this)

            axios.get(this.url + key).then(({data}) => {
                setTimeout(() => { this.#store[key].setData(data) }, 2000)         
            })
        }
        
        return this.#store[key]
    }


    //find
    //------getCollection + loadCollectionData(q='fild':'id')

    //all
    //where
    public getCollection(): Collection
    {

        let lastKey = this.#collections.push(new Collection(this)) - 1 
        return this.#collections[lastKey]

    }





    public loadCollectionData(collection: Collection, query: any = {}) //for collection
    {
        axios.get(this.url, {params: {body: query}}).then(({data}) => {
            //collection.content = []//update collection content
            Vue.set(collection, 'content', [])//update collection content
            data.forEach((entityData: any) => {
                let key = entityData._id
                if (this.#store[key]) {this.#store[key].reload(entityData)} else { this.#store[key] = new this._Entity(this, entityData) }
                collection.content.push(key)
            })
            //console.log(collection)
        })
    }


    public create(entity: Entity)
    {
        axios.post(this.url, entity).then(({data}) => {
            entity.key = data._id
            
            this.#collections.forEach(collection => {
                this.loadCollectionData(collection)
            })
        })
    }

    update(key: string, entity: Entity)
    {
        axios.put(this.url+key, entity)
        //this.updateCollections()
    }

    delete(key: string)
    {
        //this.table = this.table.filter((item:any) => item.key !== key)
        //console.log(this.table)
        axios.delete(this.url+key)
        delete this.#store[key]

        this.#collections.forEach(collection => {
            Vue.set(collection, 'content', collection.content.filter(k => k!==key))
        })
        //this.updateCollections()
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


