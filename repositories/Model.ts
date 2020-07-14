import {Collection} from './Collecton'
//import {Entity} from './Entity'


interface ITest
{
    hello:string
}

class Test implements ITest
{
    hello:string
    constructor ()
    {
        this.hello = 'sds'
    }
}

export class Model<Repository, Entity>
{
    public repository: Repository
    public Entity: new () => Entity

    constructor (repository: Repository, Entity: new () => Entity)
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
        return new this.Entity()
    }


}