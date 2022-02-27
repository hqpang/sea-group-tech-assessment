<template>
    <v-container>
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
            Username: "Michelle"
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
                this.$router.push('/sign-in');
            }
        }
    }
}
</script>

<style scoped>

</style>