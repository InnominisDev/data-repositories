<template lang='pug'>
    .Post
        .Post-text(v-if="!isEdit") {{text}}
        input.Post-editText(v-if="isEdit" v-model="text")
        .Post-tools
            .Post-edit(@click="edit" :class="{active: isEdit}")
                edit.Post-button
            .Post-delete(@click="remove(post)")
                delete.Post-button
</template>

<script lang="ts">
    import Vue from 'vue'

    import Edit from '../Svg/Edit.vue'
    import Delete from '../Svg/Delete.vue'

    export default Vue.extend({
        props:['post'],
        data(){
            return {
                text: '',
                tags: [],
                isEdit: false
            }
        },
        created(){
            this.text = this.post.text
            this.tags = this.post.tags
            //console.log(this.post.text)
        },
        methods: {
            edit ()
            {
                this.isEdit = !this.isEdit
            },
            remove: function (i:any) {
                console.log(i, 'deleted')
            }
        },
        components:{
            Edit,
            Delete,
        },
    })
</script>

<style scoped lang='sass'>
    .Post
        background: #aaa
        margin: 0px 10px 10px 0px
        &-text
            white-space: normal
        display: flex
        //justify-content: flex-end
        &-tools
            display: flex
            justify-content: flex-end
    .Post-button
</style>