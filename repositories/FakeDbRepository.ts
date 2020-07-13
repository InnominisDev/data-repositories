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

    constructor(server:string, db:string, table:string, Entity: any)
    {
        this.serverUrl = server
        this.dbName = db
        this.tableName = table
        let data:string

        //this.table = []
        axios.get(this.url).then(res => {
            //this.table = res.data.map((data:any) => { return new TestEntity(this, data)})
            Vue.set( this, 'table', res.data.map((data:any) => { return new TestEntity(this, data)}) )
        },
        e => {
            console.log('Error DB Connection!')
        })
        
    }

    private get url()
    {
        return `${this.serverUrl}/${this.dbName}/${this.tableName}/`
    }


    read(params: object)//read one 
    {
        return this
    }

    fetch(params: object)//read many
    {
        let collection = new Collection()
        this.table.forEach(el => collection.push(el))
        return collection
    }

    create(data: object)
    {
        axios.post(this.url, data).then(
            ({data}) => {
                this.table.push(new TestEntity(this, data))
            }
        )
    }

    update(key: string, data: object)
    {
        console.log('Update' + key)
    }

    delete(key: string)
    {
        this.table = this.table.filter((item:any) => item.key !== key)
        console.log(this.table)
        axios.delete(this.url+key)
    }
}