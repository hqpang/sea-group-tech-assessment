<template>
    <div>
        <v-navigation-drawer app v-model="drawer" disable-resize-watcher color="light-blue darken-3">
            <v-list nav>
                <v-list-item-group>
                    <v-list-item class=" white--text "
                        v-for="item in items"
                        :key="item.title"
                        dense
                        router :to="item.url"
                    >
                        <v-list-item-content>
                            <v-list-title>{{ item.title }}</v-list-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-list nav>
                <v-list-item-group v-if="!isAuthenticated" >
                    <v-btn flat class=" white--text " color="light-blue darken-3" to="/signin">{{button3}}</v-btn>
                    <v-btn  class=" white--text" color="light-blue darken-3" to="/register">{{button4}}</v-btn>
                </v-list-item-group>
                <v-list-item-group v-else >
                    <v-btn flat to="/userprofile"  class=" white--text" color="light-blue darken-3"><v-icon>mdi-account</v-icon>Profile</v-btn>
                    <v-btn flat @click="logout" data-cy="logout" class="white--text" color="light-blue darken-3">Log Out</v-btn>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        
        <v-app-bar app  color="light-blue darken-3">
            <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <router-link to="/"  style="text-decoration: none; color: inherit;" >
            <v-toolbar-title class="white--text">{{appTitle}}</v-toolbar-title>            
            </router-link>
            <v-btn flat class="hidden-sm-and-down white--text" color="light-blue darken-3 " to="/todo"> {{button1}} </v-btn>
            <v-btn flat class="hidden-sm-and-down white--text" color="light-blue darken-3" to="/completedtask">{{button2}}</v-btn>
            <v-spacer class="hidden-sm-and-down" ></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat class="hidden-sm-and-down white--text" color="light-blue darken-3" to="/signin">{{button3}}</v-btn>
                <v-btn  class="hidden-sm-and-down white--text" color="light-blue darken-3" to="/register">{{button4}}</v-btn>
            </div>
            <div v-else>
                <v-btn flat to="/userprofile"  class="hidden-sm-and-down white--text" color="light-blue darken-3"><v-icon>mdi-account</v-icon>Profile</v-btn>
                <v-btn flat @click="logout" data-cy="logout" class="hidden-sm-and-down white--text" color="light-blue darken-3">Log Out</v-btn>
            </div>
        </v-app-bar>

    </div>
</template>

<script>

export default{
    name: 'AppNavigation',
    data() {
        return {
            appTitle: "WhatToDo?",
            button1: "To-Do List",
            button2: "Completed Tasks",
            button3: "Sign In",
            button4: "Register",
            drawer: false,
            items: [
                { title: 'To-Do List', url: '/todo' },
                { title: 'Completed Tasks', url:'/completedtask'}
                ],
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
    

};
</script>

<style scoped>


</style>
