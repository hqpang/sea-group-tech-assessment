<template>
    <v-container>
        <v-list>
                <v-card>
                    <v-row no-gutters>
                        <v-checkbox></v-checkbox>
                        <v-file-input label="Attach" truncate-length="10"></v-file-input>
                        <v-card-text>{{description}}</v-card-text>
                    </v-row>
                </v-card>
        </v-list>

    </v-container>
</template>

<script>

export default {
    name: 'TaskCardView',
    data: () => {
        return {
            description: 'Task 1'
    }
    }
}
</script>

<style scoped>

</style>