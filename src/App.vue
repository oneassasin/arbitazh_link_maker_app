<template>
  <v-app>

    <v-navigation-drawer app
                         color="grey lighten-3"
                         mini-variant
                         permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon x-large
                  color="blue">
            mdi-link-variant
          </v-icon>
        </v-list-item-avatar>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items"
                     :key="item.path"
                     :to="item.path"
                     link>

          <v-list-item-icon>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.path }}
            </v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-navigation-drawer app
                         right
                         color="grey lighten-3"
                         permanent
                         v-if="$route.name === 'home'">
      <v-container fluid>
        <v-row class="text-center">
          <v-col cols="12">
            <h2>HELP</h2>
            <h3>TODO</h3>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    items: [
      { icon: 'mdi-view-dashboard', path: 'home' },
      { icon: 'mdi-settings', path: 'settings' },
      { icon: 'mdi-forum', path: 'about' },
    ],
  }),
};
</script>
