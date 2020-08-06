import { AxiosInstance } from "axios";
import { Connections } from "./Connections";

export class Repository
{
    public isActive: boolean = false

    constructor(private app: Connections, public name:string, private server: AxiosInstance)
    {

    }

    open () {
        this.isActive = true
        this.app.active = this
    }
}