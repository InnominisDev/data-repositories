import {Repository} from './Repository'

export class LocalRepository //extends Repository
{

    private tableName:string
    private table:Array<object>

    constructor(table:string)
    {
        this.tableName = table
        let data:string

        if (data = localStorage.getItem(this.tableName) || "")
        {
            this.table = JSON.parse(data)
        } else {
            this.table = []
        }
    }

    save() 
    {
        localStorage.setItem(this.tableName, JSON.stringify(this.table))
    }


    read(params: object)//read one 
    {
        return this.table
    }

    fetch(params: object)//read many
    {

    }

    create(data: object)
    {
        this.table.push(data)
        this.save()
    }

    update(key: number, data: object)
    {

    }

    delete(key: number)
    {

    }
}