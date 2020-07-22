import { UserEntity } from './UserEntity'
import { Entity } from '../common/Entity'
import { FakeDbRepository } from '../common/FakeDbRepository'

export class PostEntity extends Entity 
{
    public title?:string
    public text?:string
    public author?: PostEntity

    constructor (repository: FakeDbRepository<PostEntity>, data?:any)
    {
        super(repository, data)
    }

    public setData(data:any)
    {
        this.title = data.title
        this.text = data.text
    }


}