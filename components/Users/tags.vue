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

</style>