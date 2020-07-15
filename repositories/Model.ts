import {Collection} from './Collecton'


export class Model<Repository, Entity>
{

    constructor (public repository: Repository,  private Entity: new (data: object) => Entity)// вариант с обратной зависимостью
    {

    }

    public where(): Collection<Repository, Entity>
    {
        let collection = new Collection(this)
        return collection
    }

    public get(): Entity
    {
        return new this.Entity({name: 123, age:'sdfsd'})
    }

}



interface AbsEntity
{
    save: () => void
}

class myEntity implements AbsEntity
{
    public save()
    {

    }
}

class T
{
    constructor (public a:AbsEntity) {}
}

let t = new T(new myEntity)

t.a.save