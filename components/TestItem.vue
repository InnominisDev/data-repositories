<template lang="pug">
    .Item 
        .Item-kit 
            button.Item-delete(@click="remove") Delete
        .Item-data {{itemData.name}}

</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props:['itemData'],

        methods: {
            remove () {
                this.itemData.delete()
            }
        }
        
    })
</script>

<style scoped lang="sass">
    .Item
        padding: 10px 0
    .Item-data
        display: inline-block
        width: 400px
    .Item-kit  
        display: inline-block 
        margin-right: 10px
</style>