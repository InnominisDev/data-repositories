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
        //return this.content
    }

    public get ()
    {
        this.#repository.loadCollectionData(this, {})
    }

    //найти все с [id] в pivot#field
    //Pivot.find(field in [id]) || [default_pivot].find(field in [id])
    //сортируем и делаем массовый resolve()
    //tarte
    //...

}