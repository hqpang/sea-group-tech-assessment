<template>
    <v-container fluid class="pa-10">
        <v-row>
            <h1>To-DO List</h1>
        </v-row>
        <div>
            <v-col cols="20">
                <TaskCardView></TaskCardView>
            </v-col>
        </div>

        <div>
            <v-row>
                <router-link to="/signin">Logout</router-link>
                <v-spacer></v-spacer>
                <v-btn @click="submitCompleted"> Completed! </v-btn>
                <v-btn @click="addTask">+ Add New Task</v-btn>
            </v-row>
        </div>
    </v-container>
</template>

<script>
import TaskCardView from "./TaskCardView.vue";

export default {
    name: "ToDoView",
    data: () => {
        return {
            
        };
    },
    components: { TaskCardView },
    computed: {
        isAuthenticated(){
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        addTask() {
            if(this.isAuthenticated) {
                this.$router.push('/newtask');
            } else {
                alert('Please Sign In first!')
                this.$router.push('/signin');
            }
        },
        submitCompleted() {
            if(this.isAuthenticated) {
                // calls for details to be pushed to completed  Task List Tab
                // Deletes details in To Do List 
            } else {
                alert('Please Sign In first!')
                this.$router.push('/signin');
            }
        }
    }
}
</script>

<style scoped>
.container {
    background: aliceblue;
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>