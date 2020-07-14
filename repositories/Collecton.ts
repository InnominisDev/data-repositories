import {Model} from './Model' 

import Vue from 'vue'
//import { Repository } from './Repository'

export class Collection<Repository, Entity>
{
    private loading: boolean = false
    private content:any
    private model: Model<Repository, Entity>

    constructor(model: Model<Repository, Entity>)
    {
        this.model = model
        this.upadate()
    }

    public upadate()
    {
        Vue.set(this, 'content', this.model.fetch())
    }

}