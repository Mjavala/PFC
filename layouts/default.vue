<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />

        <nuxt-link to="/">
          <v-btn 
            color="primary"
            class="mx-2">
            Sign-up
          </v-btn>
        </nuxt-link>
        <nuxt-link v-if="!loggedIn" to="login">
          <v-btn 
            color="primary"
            class="mx-2"
          >
            Login
          </v-btn>
        </nuxt-link>
        <div v-if="loggedIn" @click="logout" to="login">
          <v-btn 
            color="primary"
            class="mx-2"
          >
            Logout
          </v-btn>
        </div>

        <nuxt-link to="secret">
          <v-btn 
            color="secondary"
            class="mx-2">
            Dashboard
          </v-btn>
        </nuxt-link>

    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Cookies from 'js-cookie'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      loggedIn: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'PFC'
    }
  },
  mounted(){
    this.userState()
  },
  methods: {
    userState(){
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log('signed in')
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(token => Cookies.set('access_token', token))
          this.loggedIn = true
        } else {
          Cookies.remove('access_token')
          // if (Cookies.set('access_token', 'blah')) {
          // }
          // No user is signed in.
          this.loggedIn = false
          console.log('signed out', this.loggedIn)
        }
      })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>
