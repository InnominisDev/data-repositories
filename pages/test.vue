<template lang="pug">
    .Test 
        .Test-styles Test styles
        input(placeholder="value" v-model="val")
        button(@click="setValue") Set
        button(@click="query") TestQuery
        .Test-list
            item.Test-listItem(v-for="item in list.list" :itemData="item" :key="item.key")
</template>

<script lang="ts">
    import Vue from 'vue'

    import Item from '@/components/TestItem.vue'

    //import { FakeDbRepository as Repository } from '@/repositories/FakeDbRepository'
    //import {TestEntity as Entity} from "@/repositories/TestEntity"

    import axios from 'axios'



    //let repository = new Repository('http://localhost:8077','test_db','my_table', Entity)

    import { FakeDbRepository as Repository } from '@/repositories/common/FakeDbRepository'
    import { UserEntity } from '@/repositories/test/UserEntity'

    let $user = new Repository<UserEntity>('http://localhost:8077','test_db','my_table', UserEntity)

    // let newUser = $user.newEntity()
    // newUser.name = "Vasylisa"
    // newUser.save()
    // console.log(newUser)

    //let user = $user.getEntity("Fb3krW9dXbwURlCY")

    let users = $user.getCollection()
    users.get()


    export default Vue.extend({

        data () {
            return {
                list: users,//repository.get(),
                val: "",
            }
        },

        methods: {
            setValue() {
                let newUser = $user.newEntity()
                newUser.name = this.val
                newUser.save()
                this.val = ""
                console.log(users.list)
            },
            //"Fb3krW9dXbwURlCY"
            //"PfV4330VPsUhUfSk"
            query(){
                
                $user.getEntity("5fGro2OCFcArGnyl").name = "Two"
                //user.name = 'One'

                // axios.get('http://localhost:8077/test_db/my_table', {params: {body:{_id:{ $in: ["PfV4330VPsUhUfSk"] }} }}).then(({data}) => {
                //     console.log(data)
                // })
            }
        },

        components: {
            Item
        }
    })
</script>

<style lang="sass" scoped>

   .Test
        &-styles
            +setColor(green)

</style>