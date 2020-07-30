<template lang='pug'>
    .ForumPage
        users.ForumPage-publications
        .ForumPage-tags
</template>

<script lang="ts">
    import Vue from 'vue'
    import Users from '../components/Users/index.vue'
    export default Vue.extend({
        components:{
            Users
        }
    })
</script>

<style scoped lang='sass'>

</style>