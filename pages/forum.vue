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

</style>