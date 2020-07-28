import { Collection } from "../common/Collection";
import { AxiosResponse } from 'axios'

export interface Repository
{
    //Read
    //newEntity: () => any
    getEntity: (key: string) => any
    getCollection: () => Collection
    loadCollectionData: (collection:Collection, query?:any) => void
    //C*UD
    create: (data: any) => void//=> Promise<AxiosResponse<any>>
    update: (key: string, data:any) => void
    delete: (key: string) => void
}