import {Collection} from './Collecton'
//import {Entity} from './Entity'


interface DataFromServer
{
    name: string,
    age: number
}

class AnyEntity
{
   
    public olo: string = "test"
    constructor (public data:DataFromServer)
    {
       
    }
}



interface Olo
{
    olo: string
}

export class Model<Repository, Entity extends Olo>
{

    constructor (public repository: Repository,  private Entity: new (data: DataFromServer) => Entity)// вариант с обратной зависимостью
    {

    }

    public where(): Collection<Repository, Entity>
    {
        let collection = new Collection(this)
        return collection
    }

    public get(): Entity
    {
        let fuck = new this.Entity({name: 123, age:'sdfsd'})
        fuck.olo
        return fuck
    }


}

const tipaRepository = new AnyEntity({name: 'sdf', age:12})

const model = new Model<AnyEntity, AnyEntity>(tipaRepository, AnyEntity)

model.get().data.age

//test proxy
interface A
{
    name: string
}

class B implements A
{
    constructor (public name:string)
    {}
}

let b = new B('sd')
let p = new Proxy(b, {
    get ()
    {

    },
})

p.name