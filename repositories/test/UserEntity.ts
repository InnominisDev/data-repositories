export class UserEntity
{
    public key:string = ''
    public name:string = ''

    constructor (data?:any)
    {
        if (data) this.setData(data)
    }

    public setData(data:any)
    {
        //console.log(data)
        this.key = data._id
        this.name = data.name
    }

    public reload(data:any)
    {
        this.name = data.name
    }

    public delete()
    {
        console.log(`DB: deleted ${this.key}`)
    }
}