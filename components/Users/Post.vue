<template lang='pug'>
    .Post
        .Post-title post
        .Post-text(v-if="!isEdit") {{text}}
        input.Post-editText(v-if="isEdit" v-model="text")
        .Post-tools
            .Post-edit(@click="edit" :class="{active: isEdit}") Редактировать текст
            .Post-delete(@click="remove(post)") Удалить пост
</template>

<script lang="ts">
    import Vue from 'vue'

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
    })
</script>

<style scoped lang='sass'>
    .Post
        background: #cac
        &-edit
            &.active
                background: #ccc
                
    .Post-tools
        color: grey
</style>