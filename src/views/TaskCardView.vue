<template>
    <v-container>
        <v-flex>
            <div v-if="!isCompleted">
                <v-card class="ma-5" :elevation="4" data-cy="tasks" v-for="item in items" :key="item.description" outlined>
                    <v-row no-gutters>
                        <v-checkbox></v-checkbox>
                        <v-file-input label="Attach" truncate-length="10"></v-file-input>
                        <v-card-text>Details: {{item.description}}</v-card-text>
                    </v-row>
                </v-card>
            </div>
        </v-flex>

    </v-container>
</template>

<script>


export default {
    name: 'TaskCardView',
    data() {
        return {
            items: [
                { description: 'Task 1'  },
                { description: 'Task 2'}
                ],
        };
    },
    
    computed: {
        userTasks () {
            return this.$store.state.userTasks;
        },
        isAuthenticated (){
            return this.$store.getters.isAuthenticated;
        },
    },
    mounted() {
        this.getTasks();

    },
    methods: {
        getTasks (){
            this.$store.dispatch('getUserTasks');
        }

    }
}
</script>

<style scoped>

</style>