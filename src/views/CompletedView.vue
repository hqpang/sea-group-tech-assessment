<template>
    <v-container fluid class="pa-10">
        <v-row>
            <h1>Completed Task List</h1>
        </v-row>
        <div>
            <v-col cols="20">
                <completed-task-card-view></completed-task-card-view>
            </v-col>
        </div>


    </v-container>
</template>

<script>
import CompletedTaskCardView from './CompletedTaskCardView.vue';

export default {
    name: "CompletedView",
    data: () => {
        return {
            
        };
    },
    components: {  CompletedTaskCardView },
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