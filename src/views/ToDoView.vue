<template>
    <v-container>
        <v-row>
            <h1>All To-DO</h1>
            <v-spacer></v-spacer>
            <v-btn to="/userprofile">{{Username}}</v-btn>
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
                <v-btn to="/newtask">+ Add New Task</v-btn>
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
    components: { TaskCardView }
}
</script>

<style scoped>

</style>