<template lang="pug">
    .Database
        .Database-existingList
            .Database-connection(v-for="db in repositories" @click="open(db.name)")
        Creator.Database-new(@create="append")
</template>

<script lang="ts">
    import Vue from 'vue'
    import Creator from "./DatabaseCreator.vue"

    import server from "@/DataViewer"

    export default Vue.extend({

        data ()
        {
            return {
                repositories: []
            }
        },


        created () {

            //load DB list
            server.get('repositories').then(({data}) => {
                console.log(data)
            }) 

        },

        methods: {
            append(dbName:string) 
            {

            },
            open(dbName:string)
            {

            }
        },

        components: {
            Creator
        }
    })
</script>

<style lang="sass" scoped>

</style>