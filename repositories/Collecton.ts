import Vue from 'vue'

export class Collection
{
    private loading: boolean = false
    private content:any
    private repository: any

    constructor(repository: any)
    {
        this.repository = repository
        this.upadate()
    }

    public upadate()
    {
        Vue.set(this, 'content', this.repository.fetch())
    }

}