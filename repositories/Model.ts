import {Collection} from './Collecton'
import { Repository } from './Repository'


export class Model<Repository, Entity>
{

    constructor (public repository: Repository,  private Entity: new (data: object) => Entity)// вариант с обратной зависимостью
    {

    }

    public where(): Collection<Repository, Entity>
    {
        let collection = new Collection(this)
        return collection
    }

    public get(): Entity
    {
        return new this.Entity({name: 123, age:'sdfsd'})
    }

}



interface AbsEntity
{
    save: () => void
}

class someFild
{
    test (a:string) {

    }
}

class myEntity implements AbsEntity
{
    public olo: string = 'olo'
    public fild:someFild = new someFild()
    public save()
    {

    }
}

class T<Type>
{
    constructor (public a:Type) {}
}

let t = new T<myEntity>(new myEntity)

t.a.fild.test('sd')


class User
{
    //public name: string
    constructor ()
    {
        {
            avatar: $image.resolve()
            posts: $post.by('author')
            friends: $users.in('friends')
            favorites: $post.throw('likes', 'user', 'post');
            roles: $role.throw();
            
            

            skills: any('user', 'skills', 'type')  
            //<==> 
            workers: $users.find('type', 'lang', 'user')
        }
    }
}

/user/1/passport/3

/user/1/passports [3,4,5]

.relate(target, column, target, column)

.relate(table:column, table&key)


1. У нас есть поле с целевым id - нужно знать таблицу
2. Мы ищем по id записи в таблице с информацией - нужно знать таблицу и поле, которое должно содержать id записи
3. Мы ищем по id записи в таблице 


field.resolve()
field.find('table', 'field')
field.find('table', 'field').resolve()

user = {
    avatar.resolve() //images#523 from user.avatar
    posts = find('posts', 'autor') //self.id from user
    friends = find('friends', ['user1', 'user2']).resolve()
    favorites = find('likes', 'post').resolve()
    roles = find('user_roles', 'role').resolve()

    skills.find('skills').resolve
    //<==> 
    lang = { workers.find('users').resolve }
}


user = {
    avatar.resolve() //images#523 from user.avatar
    posts = find('posts', 'autor') //self.id from user
    friends = resolve('friends', ['user1', 'user2'])
    favorites = resolve('likes')
    roles = resolve('user_roles')

    skills.resolve('skills')
    //<==> 
    lang = { workers.resolve('users') }
}