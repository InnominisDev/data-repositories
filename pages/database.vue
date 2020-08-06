<template lang="pug">
    .App
        database.App-databaseSelector
</template>

<script lang="ts">
    import Vue from 'vue'
    import Database from '@/components/data_viewer/Database/index.vue'
    

    export default Vue.extend({
        components: {
           Database
        }
    })
</script>

<style lang="sass" scoped>

    .App
        +screen()
        background: $cGround
        &-databaseSelector
          .selec  

</style>