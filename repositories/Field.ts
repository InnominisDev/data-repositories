abstract class Field
{

    private location:any
    private name:any

    constructor (entity:any, name:string) 
    {
        this.name = name
        this.location = entity

    }

    public get() 
    {
        return this.location[this.name]
    }

    public set(value: any) 
    {
        this.location[this.name] = value
    }

}