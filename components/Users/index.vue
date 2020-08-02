<template lang="pug">
    .Users
        .Users-items
            user.Users-item(v-for="(user, i) in users" :key="i" :user="user")
        .Users-add
</template>

<script lang="ts">
    import Vue from 'vue'

    import User from './User.vue'

    import data from '../../testData'

    export default Vue.extend({
        data() {
            return {
                users: data.users
            }
        },
        components:{
            User
        }
    })
</script>

<style scoped lang="sass">
    .Users
        margin: 20px 20px 20px 20px
        background: blue
</style>