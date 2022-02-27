<template>
    <v-container fluid>
        <v-card>
            <v-card-title>User Profile</v-card-title>
            <v-list>
                <v-list-item-group>
                    <v-list-item :key="item.name" v-for="item in items">
                        <v-card-text><strong>Name: </strong> {{item.name}}</v-card-text>
                        <v-card-text><strong>Email: </strong>{{item.email}}</v-card-text>
                        <v-card-text><strong>Birthday: </strong>{{item.birthday}}</v-card-text>
                        <v-card-text><strong>Date Joined: </strong>{{item.dateJoined}}</v-card-text>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>

export default {
    name: 'UserProfileView',
    data () {
        return {
            items: [
                {name:'Michelle', email: 'testing@hotmail.com', birthday: '22/02/2022', dateJoined: new Date(),}
            ]
            
        };
    },

}
</script>

<style scoped>

</style>