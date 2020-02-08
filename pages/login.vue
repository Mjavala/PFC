<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-3 mb-10">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Welcome!</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form >
                  <v-text-field
                    label="Email"
                    name="login"
                    type="text"
                    v-model="email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions
                class="justify-space-around">
                <div class="error" v-if="error">{{error.message}}</div>
                <v-btn 
                  color="primary"
                  @click="userLogin()"
                >
                Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

  export default {
    data (){
      return {
      email: '',
      password: '',
      error: false,
      }
    },
    methods: {
      userLogin() {
        this.email.toString()
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(data => {
            console.log(data)
            this.$router.push('/secret')
          })
          .catch(error => (this.error = error))


      }
    }
  }
</script>

