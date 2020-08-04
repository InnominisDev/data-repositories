<template lang='pug'>
    .User
        .User-card
            .User-avatar avatar
            .User-name(v-if="!isEdit") {{userName}}
            input.User-editName(v-if="isEdit" v-model="userName")
            .User-tools
                .User-edit(@click="edit" :class="{active: isEdit}")
                    edit.User-button
                .User-delete(@click="remove(user)")
                    delete.User-button
        .User-posts
            post.User-post(v-for="(post, i) in posts" :key="i" :post="post")
</template>

<script lang="ts">
    import Vue from 'vue'

    import Post from './Post.vue'

    import Edit from '../Svg/Edit.vue'
    import Delete from '../Svg/Delete.vue'

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
            Post,
            Edit,
            Delete
        }
    })
</script>

<style scoped lang='sass'>
    .User-card
        display: flex
        background: #999
    .User-tools
        display: flex
        height: 12px
    .User-avatar
        width: 50px
        height: 50px
        background: #555
        clip-path: circle()
</style>