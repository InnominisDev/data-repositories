<template lang="pug">
    .Database
        .Database-existingRepositories
            .Database-repository(v-for="(repository, i) in repositories" 
                                @click="(repository.open)()" :key="i") {{repository.name}}
        Creator.Database-new
</template>

<script lang="ts">
    import Vue from 'vue'
    import Creator from "./DatabaseCreator.vue"

    import app from "@/DataView"
    import { Repository } from '~/DataView/Repository'

    export default Vue.extend({

        computed: {
            repositories ()
            {
                return app.repositories.filter(repositoriy => repositoriy.isActive === false)
            }
        },

        components: {
            Creator
        }
    })
</script>

<style lang="sass" scoped>

    .Database
        +block()
        color: #FFF
        &-repository
            

</style>