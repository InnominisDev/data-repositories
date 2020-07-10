abstract class Repository
{
    private data:Array<any>

    constructor(data:Array<any>)
    {
        this.data = data
    }

    public getAll():any 
    {
        return this.data
    }

}