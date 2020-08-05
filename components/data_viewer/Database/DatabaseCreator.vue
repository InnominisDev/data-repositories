<template lang="pug">
    .DatabaseCreator
        input.DatabaseCreator-name(v-model="name" placeholder="my-database-name")
        .DatabaseCreator-save(@click="create")
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({

        data ()
        {
            return {
                name: ""
            }
        },

        methods: {
            create() 
            {
                this.$emit("create", this.name)
                this.name = ""
            }
        },

    })
</script>

<style lang="sass" scoped>

</style>