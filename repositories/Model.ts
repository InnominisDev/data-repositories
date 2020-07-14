import {Collection} from './Collecton'
//import {Entity} from './Entity'


interface MyTestInterface
{
    name: string,
    age: number
}

class Test<Data>
{
    public data:Data
    constructor (data:Data)
    {
        this.data = data
    }
}





export class Model<Repository, Entity>
{
    public repository: Repository
    public Entity: new (data:MyTestInterface) => Entity

    constructor (repository: Repository, Entity: new (data:MyTestInterface) => Entity)// вариант с обратной зависимостью
    {
        this.repository = repository
        this.Entity = Entity
    }

    public where(): Collection<Repository, Entity>
    {
        let collection = new Collection(this)
        return collection
    }

    public get(): Entity
    {
        return new this.Entity({name: 'one', age:99})
    }


}

const test = new Test<MyTestInterface>({name: 'sdf', age:12})

const model = new Model<Test<MyTestInterface>, Test<MyTestInterface>>(test, Test)

const entity = model.get()

entity.data.name
