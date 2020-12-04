<template>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    v-model="user.email"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="user.password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login()" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>
<script>
// import { firebase } from "firebase/app"
import { auth } from '../main'
export default {
    name: "login",
    data: () => ({
        user: {
            email: 'test@example.com',
            password: 'administrator',
        },
        options: {
            isLoggingIn: true,
            shouldStayLoggedIn: true,
        },
    }),
    created () {
      
    },
    methods: {
        login () {
            auth.signInWithEmailAndPassword(this.user.email, this.user.password).then((user) => {
                this.$router.replace('/admin')
                console.log("user: ", user)
            }).catch((err) => {
                alert(err.message)
            })
        }
    }
}
</script>
<style></style>