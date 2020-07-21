<template lang="pug">
    .Item 
        .Item-kit 
            button.Item-delete(@click="remove") Delete
        .Item-data {{item.name}}

</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props:['itemData'],

        data () {
            return {
                item: this.itemData
            }
        },

        methods: {
            remove () {
                console.log(this.itemData)
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