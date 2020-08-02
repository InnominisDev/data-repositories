<template lang="pug">
    .Tags
        .Tags-items
            tag.Tags-item(v-for="(tag, i) in tags" :key="i" :tag="tag") {{tag.title}}
        .Tags-add
</template>

<script lang="ts">
    import Vue from 'vue'

    import data from '../../testData'

    export default Vue.extend({
        data() {
            return {
                tags: data.tags
            }
        },
        mounted(){
            console.log()
        }
    })
</script>

<style scoped lang="sass">
    .Tags
        border-radius: 10px
        margin: 20px 20px 20px 0px
        padding: 15px 0px 0px 10px
        background: linear-gradient(to top right, #171, #171)
    .Tags-item
        padding: 5px 10px 5px 10px
        margin: 0px 5px 0px 0px
        border-radius: 1000000px
        background: #060
        color: #121

</style>