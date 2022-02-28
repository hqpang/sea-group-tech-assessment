<template>
    <v-container fluid class="pa-10">
        <v-row>
            <h1>Completed Task List</h1>
        </v-row>
        <div>
            <v-col cols="20">
                <TaskCardView></TaskCardView>
            </v-col>
        </div>


    </v-container>
</template>

<script>
import TaskCardView from "./TaskCardView.vue";

export default {
    name: "CompletedView",
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