<template>
    <v-container>
        <v-flex>
            <v-card class="ma-5" :elevation="4" data-cy="tasks" v-for="item in items" :key="item.description" outlined>
                <v-row no-gutters>
                    <v-file-input label="Attach" truncate-length="10"></v-file-input>
                    <v-card-text>Details: {{item.description}}</v-card-text>
                </v-row>
            </v-card>
        </v-flex>

    </v-container>
</template>

<script>


export default {
    name: 'CompletedTaskCardView',
    data() {
        return {
            items: [
                { description: 'Add background'  },
                { description: 'Add navigation drawer'}
                ],
        };
    },
    
    computed: {
        userCompleteTasks () {
            return this.$store.state.userCompletedTasks;
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
            this.$store.dispatch('getUserCompletedTasks');
        }

    }
}
</script>

<style scoped>

</style>