<template>
    <v-container fluid fill-height class="pa-0" >
        <v-layout align-center justify-center>
            <v-col cols="12">
                <v-card align-center justify-center :elevation="6">
                    <v-card-title>Registration Page</v-card-title>
                    <v-form ref="form" v-model="valid">

                        <v-text-field
                        name="name"
                        prepend-icon="mdi-account"
                        label="Full Name"
                        type="name"
                        v-model="name"
                        :rules="[() => !!name || 'This field is required']"
                        required
                        data-cy="joinNameField"  
                        outlined></v-text-field>

                        <v-text-field
                        name="email"
                        prepend-icon="email"
                        label="Email"
                        type="email"
                        v-model="email"
                        :rules="emailRules"
                        required
                        data-cy="joinEmailField"  
                        outlined></v-text-field>

                        <v-text-field
                        name="password"
                        prepend-icon="lock"  
                        label="Password" 
                        outlined 
                        v-model="password" 
                        :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'" 
                        :type="passwordShow ? 'text' : 'password'" 
                        @click:append="passwordShow = !passwordShow"
                        data-cy="joinPasswordField"
                        :rules="passwordRules"
                        error-count="5"
                        required>
                        </v-text-field>

                        <v-text-field
                        name="confirmPassword"
                        prepend-icon="lock" 
                        label="Confirm Password" 
                        outlined 
                        v-model="confirmPassword" 
                        :append-icon="confirmPasswordShow ? 'mdi-eye' : 'mdi-eye-off'" 
                        :type="confirmPasswordShow ? 'text' : 'password'" 
                        @click:append="confirmPasswordShow = !confirmPasswordShow"
                        :rules="passwordRules"
                        error-count="5"
                        required>
                        </v-text-field>                        
                    
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn 
                            color="primary"
                            :disabled="!valid"
                            @click="submit"
                            data-cy="joinSubmitBtn"
                            > Sign Up! </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    name: 'RegisterView',
    data: () => {
    return {
        passwordShow: false,
        confirmPasswordShow: false,
        valid: false,
        name: '',
        email: '',
        password: '',
        emailRules: [
            v => !!v || 'E-mail address is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 8 ||
                'Password must be greater than 8 characters',
            v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
            v => /(?=.*\d)/.test(v) || 'Must have one number',
            v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'

            ]
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('userRegister', {
                    email: this.email,
                    password: this.password
                });
            }
        },
    }
}
</script>

<style scoped>

</style>