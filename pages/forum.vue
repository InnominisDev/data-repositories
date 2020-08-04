<template lang='pug'>
    .ForumPage
        users.ForumPage-publications
        tags.ForumPage-tags
        input.ForumPage-addUser(v-if="isActive")
        .ForumPage-addUserButton(@click="active" :class="{active: isActive}")
</template>

<script lang="ts">
    import Vue from 'vue'
    import Users from '../components/Users/index.vue'
    import Tags from '../components/Users/tags.vue'
    export default Vue.extend({
        data(){
            return {
                isActive: false
            }
        },
        components:{
            Users,
            Tags,
        },
        methods:{
            active ()
            {
                this.isActive = !this.isActive
            },
        }
    })
</script>

<style scoped lang='sass'>
    .ForumPage
        //text-align: center
        display: flex
        &-publications
            flex: 3
            background: #ccc
        &-tags
            flex: 1
            background: #bbb
        &-addUser
            position: absolute
            top: 50%
            right: 50%
            position: absolute
            background: #ccc
            heigth: 20px
            width: 200px
        &-addUserButton
            position: absolute
            top: 80%
            right: 30%
            background: #aaa
            height: 30px
            width: 30px
            clip-path: circle()
</style>