<template>
    <v-container fill-height >
        <v-layout align-center justify-center>
            <v-col cols="12">
                <v-card align-center justify-center>
                    <v-card-title>Sign In</v-card-title>
                    <v-form ref="form" v-model="valid">
                        <v-text-field
                        name="email"
                        label="Email"
                        type="email"
                        v-model="email"
                        :rules="emailRules"
                        required
                        data-cy="signinEmailField" 
                        class="sign-in-input-box"  
                        outlined></v-text-field>
                        <v-text-field
                        name="password" 
                        class="sign-in-input-box" 
                        label="Password" 
                        outlined 
                        v-model="password" 
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                        :type="show1 ? 'text' : 'password'" 
                        @click:append="show1 = !show1"
                        data-cy="signinPasswordField"
                        :rules="passwordRules"
                        required>
                        </v-text-field>
                    
                        <v-card-actions>
                            <router-link to="/register">Register</router-link>
                            <v-spacer></v-spacer>
                            <v-btn 
                            color="primary"
                            :disabled="!valid"
                            @click="submit"
                            data-cy="signinSubmitBtn"> Login </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    name: 'SignIn',
    data: () => {
        return {
            show1: false,
            valid: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'E-mail address is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v =>
                    v.length >= 8 ||
                    'Password must be greater than 8 characters',

            ]
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('userLogin', {
                    email: this.email,
                    password: this.password
                });
            }
        }   
    }
}
</script>

<style scoped>

</style>