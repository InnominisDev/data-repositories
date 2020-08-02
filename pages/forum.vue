<template lang='pug'>
    .ForumPage
        users.ForumPage-publications
        tags.ForumPage-tags
</template>

<script lang="ts">
    import Vue from 'vue'
    import Users from '../components/Users/index.vue'
    import Tags from '../components/Users/tags.vue'
    export default Vue.extend({
        components:{
            Users,
            Tags,
        }
    })
</script>

<style scoped lang='sass'>
    .ForumPage
        background: green
        display: grid
        grid-template-columns: 70% 30%
    .ForumPage-publications
        background: linear-gradient(to top right, brown, #811)
        border-radius: 10px
    
</style>