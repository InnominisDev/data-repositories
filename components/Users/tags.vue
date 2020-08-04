<template lang="pug">
    .Tags
        .Tags-items
            tag.Tags-item(v-for="(tag, i) in tags" :key="i" :tag="tag") {{tag.title}}
                .Tags-button(@click="remove(tag)")
                    delete.Tags-buttonDelete
        .Tags-add
</template>

<script lang="ts">
    import Vue from 'vue'

    import data from '../../testData'

    import Delete from '../Svg/Delete.vue'

    export default Vue.extend({
        data() {
            return {
                tags: data.tags
            }
        },
        mounted(){
            console.log()
        },
        methods:{
            remove: function (i: any) {
                    console.log(i, 'deleted')
            }
        },
        components:{
            Delete,
        }
    })
</script>

<style scoped lang="sass">
    .Tags-item
        display: flex
        border-radius: 1000000000px
        background: #999

</style>