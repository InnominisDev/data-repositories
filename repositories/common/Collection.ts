import { FakeDbRepository } from './FakeDbRepository'

export class Collection<Entity>
{
    content: Array<string> = ['sdfsdg']
    #repository: FakeDbRepository<Entity>
    constructor (repository:FakeDbRepository<Entity>)
    {
        this.#repository = repository
    }
    get list()
    {
        return this.content.map(key => this.#repository.getEntity(key))
    }

    public get ()
    {
        this.#repository.loadCollectionData(this, {})
    }

}