<template lang="pug">
    .Test 
        input(placeholder="value" v-model="val")
        button(@click="setValue") Set
        button(@click="getValue") Get
        .Test-list
            item.Test-listItem(v-for="item in list.table" :itemData="item")
</template>

<script lang="ts">
    import Vue from 'vue'

    import Item from '@/components/TestItem.vue'

    import { FakeDbRepository as Repository } from '@/repositories/FakeDbRepository'
    import {TestEntity as Entity} from "@/repositories/TestEntity"



    let repository = new Repository('http://localhost:8077','test_db','my_table', Entity)

    export default Vue.extend({

        data () {
            return {
                list: repository.read({}),
                val: "",
                //repository: new Repository('my_table')
            }
        },

        // mounted () {
        //     this.repository = new Repository('my_table')
        // },

        methods: {
            getValue() {
                this.list = repository.read({})
            },
            setValue() {
                repository.create({name: this.val})
            }
        },

        components: {
            Item
        }
    })
</script>

<style scoped>

</style>