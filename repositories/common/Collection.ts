import { Repository } from './RepositoryInterface'

export class Collection
{
    content: Array<string> = []
    #repository: Repository
    constructor (repository:Repository)
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