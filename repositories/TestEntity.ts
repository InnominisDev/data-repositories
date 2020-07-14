interface Data
{
   _id: string
   name: string
   age: number
}

export class TestEntity
{
    private repository: any
    private key: string
    public name: string
    public age: number

    constructor (repository: any, {_id, name, age}:Data)
    {
        this.repository = repository
        this.key = _id
        this.name = name
        this.age = age
    }

    public save() 
    {
       this.repository.update(this.key, this)
    }

    public delete()
    {
        this.repository.delete(this.key)
    }

}