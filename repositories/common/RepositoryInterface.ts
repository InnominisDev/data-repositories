import { Collection } from "../common/Collection";

export interface Repository
{
    getEntity: (key: string) => any
    getCollection: () => Collection
    loadCollectionData: (collection:Collection, query?:any) => void
}