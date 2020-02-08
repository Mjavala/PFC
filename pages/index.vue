<template>
<v-container class="logos">
  <v-layout
      column
      justify-center
      align-center
      class="logos"
    >
      <v-flex
        xs12
        sm8
        md6
      >
        <div class="text-center">
          <logo />
          <vuetify-logo />
        </div>
      </v-flex>
    </v-layout>
</v-container>

</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

<style scoped>
.logos{
  height: 100vh;
}
</style>
