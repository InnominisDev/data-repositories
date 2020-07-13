<template lang="pug">
    .Test 
        input(placeholder="value" v-model="val")
        button(@click="setValue") Set
        .Test-list
            item.Test-listItem(v-for="item in list.content" :itemData="item")
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
                list: repository.get(),
                val: "",
            }
        },

        methods: {
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