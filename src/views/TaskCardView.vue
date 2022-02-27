<template>
    <v-container>
        <v-flex xs12 sm6 md6 lg4 v-for="(item, idx) in tasks" :key="idx">
                <v-card data-cy="taskEntry">
                    <v-row no-gutters>
                        <v-checkbox></v-checkbox>
                        <v-file-input label="Attach" truncate-length="10"></v-file-input>
                        <v-card-text>{{item.task.description}}</v-card-text>
                    </v-row>
                </v-card>
        </v-flex>

    </v-container>
</template>

<script>

export default {
    name: 'TaskCardView',
    computed: {
        tasks () {
            return this.$store.state.tasks;
        },
        isAuthenticated (){
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>