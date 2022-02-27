<template>
    <v-container fluid fill-height class="pa-0" >
        <v-layout align-center justify-center>
            <v-col cols="12">
                <v-card align-center justify-center :elevation="6">
                    <v-card-title> New Task</v-card-title>
                    <v-form ref="form" v-model="valid">

                        <v-text-field
                        name="description"
                        prepend-icon="fa-list"
                        class="pa-8"
                        label="Task Description"
                        type="description"
                        v-model="description"
                        required
                        data-cy="addNewTaskDescriptionField"  
                        outlined></v-text-field>                       
                    
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn 
                            color="primary"
                            to="/todo"
                            > Cancel </v-btn>
                            <v-btn 
                            color="primary"
                            :disabled="!valid"
                            @click="submit"
                            data-cy="AddTaskSubmitBtn"
                            > Add </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
// import { getDatabase } from '@firebase/database'

export default {
    name: 'NewTaskView',
    data: () => {
    return {
        valid: false,
        description: '',
        }   
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                // this.$store.dispatch('addNewTask', {
                //     description: this.description,
                // });
                const db = this.$firebase.firestore();

                db
                    .collection('tasks').add(
                        {
                            info: this.description,
                            created_at: new Date().getTime()
                        }
                )
            }
        }
    }

}
</script>

<style scoped>

</style>