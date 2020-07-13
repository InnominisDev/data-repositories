import {Repository} from './Repository'
import {TestEntity} from './TestEntity'
import {Collection} from './Collecton'
import Vue from 'vue'
import axios from 'axios'

export class FakeDbRepository //extends Repository
{

    private serverUrl:string
    private dbName:string
    private tableName:string
    private table:any
    private collections: Array<Collection>

    constructor(server:string, db:string, table:string, Entity: any)
    {
        this.serverUrl = server
        this.dbName = db
        this.tableName = table
        let data:string
        this.collections = []

        

        //this.table = []
        axios.get(this.url).then(res => {
            this.table = res.data.map((data:any) => { return new TestEntity(this, data)})
            this.updateCollections()
            //Vue.set( this, 'table', res.data.map((data:any) => { return new TestEntity(this, data)}) )
        },
        e => {
            console.log('Error DB Connection!')
        })
        
    }

    private get url()
    {
        return `${this.serverUrl}/${this.dbName}/${this.tableName}/`
    }

    private updateCollections()
    {
        this.collections.forEach(collection => { collection.upadate() })
    }


    get()
    {
        let key = this.collections.push(new Collection(this)) - 1
        return this.collections[key]
    }


    read(params: object)//read one 
    {
        
    }

    fetch()//read many
    {
        return this.table
    }

    create(data: object)
    {
        axios.post(this.url, data).then(
            ({data}) => {
                this.table.push(new TestEntity(this, data))
                this.updateCollections()
            }
        )
    }

    update(key: string, data: object)
    {
        console.log('Update' + key)
        this.updateCollections()
    }

    delete(key: string)
    {
        this.table = this.table.filter((item:any) => item.key !== key)
        //console.log(this.table)
        axios.delete(this.url+key)
        this.updateCollections()
    }
}