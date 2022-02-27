<template>
    <v-container>
        <h1>User Profile</h1>
        <v-list>
            <v-list-item-group>
            <v-list-item :key="item.key" v-for="item in Profile">{{item}}</v-list-item>
            </v-list-item-group>
        </v-list>
    </v-container>
</template>

<script>

export default {
    name: 'UserProfileView',
    data () {
        return {
            
        };
    },

}
</script>

<style scoped>

</style>