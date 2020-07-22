import { Entity } from '../common/Entity'
import { FakeDbRepository } from '../common/FakeDbRepository'

export class UserEntity extends Entity
{
    public name?:string

    constructor (repository: FakeDbRepository<UserEntity>, data?:any)
    {
        super(repository, data)
        if (data) this.setData(data)
    }

    public setData(data:any)
    {
        this.name = data.name
    }

    

}