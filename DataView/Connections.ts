import { Repository } from "./Repository"
import serverConstroctor from './serverConstructor'
import { AxiosInstance } from "axios"

export class Connections
{
    private server: AxiosInstance
    public repositories: Array<Repository>
    public current_repository: Repository | null = null

    public get active()
    {
        return this.current_repository
    }

    public set active(connection)
    {
        if (this.current_repository) this.current_repository.isActive = false
        this.current_repository = connection
    }

    constructor ()
    {
        this.server = serverConstroctor()
        this.repositories = []

        this.server.get('repositories').then(({data}) => {
            data.forEach((dbName:string) => {
                this.append(dbName)
            });
            //this.repositories = data
        }) 

    }

    public append(dbName: string) 
    {
        let repository = new Repository(this, dbName, serverConstroctor({path: dbName}))
        this.repositories.push(repository)
    }


}