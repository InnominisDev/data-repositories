<template lang='pug'>
    .User 
        .User-avatar ::avatar:: 
        .User-name(v-if="!isEdit") {{userName}}
        input.User-editName(v-if="isEdit" v-model="userName")
        .User-tools
            .User-edit(@click="edit" :class="{active: isEdit}") Редактировать пользователя
            .User-delete(@click="remove(user)") Удалить пользователя
        .User-posts
            post.User-post(v-for="(post, i) in posts" :key="i" :post="post")
</template>

<script lang="ts">
    import Vue from 'vue'

    import Post from './Post.vue'

    export default Vue.extend({
        props:['user'],
        data(){
            return {
                posts: [],//this.user.posts
                userName: '',
                isEdit: false
            }
        },
        created(){
            this.userName = this.user.name
            this.posts = this.user.posts
        },
        methods: {
            edit ()
            {
                this.isEdit = !this.isEdit
            },
            remove: function (i: any) {
                console.log(i, 'deleted')
            }
        },
        components:{
            Post
        }
    })
</script>

<style scoped lang='sass'>
    .User
        &-edit
            &.active
                background: #ccc
    .User-tools
        color: grey
</style>