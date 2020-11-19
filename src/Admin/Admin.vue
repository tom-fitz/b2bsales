<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
<!--    <v-list>-->
<!--			<template v-for="item in items">-->
<!--&lt;!&ndash;				<v-row v-if="item.heading" :key="item.heading" align="center">&ndash;&gt;-->
<!--&lt;!&ndash;					<v-col cols="6">&ndash;&gt;-->
<!--&lt;!&ndash;						<v-subheader v-if="item.heading">&ndash;&gt;-->
<!--&lt;!&ndash;							{{ item.heading }}&ndash;&gt;-->
<!--&lt;!&ndash;						</v-subheader>&ndash;&gt;-->
<!--&lt;!&ndash;					</v-col>&ndash;&gt;-->
<!--&lt;!&ndash;					<v-col cols="6" class="text-center">&ndash;&gt;-->
<!--&lt;!&ndash;						<a href="#!" class="body-2 black&#45;&#45;text">EDIT</a>&ndash;&gt;-->
<!--&lt;!&ndash;					</v-col>&ndash;&gt;-->
<!--&lt;!&ndash;				</v-row>&ndash;&gt;-->
<!--				<v-list-group-->
<!--					v-if="item.children"-->
<!--					:key="item.text"-->
<!--					v-model="item.model"-->
<!--					append-icon=""-->
<!--				>-->
<!--					<template v-slot:activator>-->
<!--						<v-list-item-content>-->
<!--							<v-list-item-title>-->
<!--								{{ item.text }}-->
<!--							</v-list-item-title>-->
<!--						</v-list-item-content>-->
<!--					</template>-->
<!--					<v-list-item v-for="(child, i) in item.children" :key="i" link>-->
<!--						<v-list-item-content>-->
<!--							<v-list-item-title>-->
<!--								{{ child.text }}-->
<!--							</v-list-item-title>-->
<!--						</v-list-item-content>-->
<!--					</v-list-item>-->
<!--				</v-list-group>-->
<!--				<v-list-item v-else :key="item.text" :to="item.route" link>-->
<!--					<v-list-item-content>-->
<!--						<v-list-item-title>-->
<!--							{{ item.text }}-->
<!--						</v-list-item-title>-->
<!--					</v-list-item-content>-->
<!--				</v-list-item>-->
<!--			</template>-->
<!--		</v-list>-->
      <v-list>
<!--        <v-list-item>-->
<!--          <v-list-item-icon>-->
<!--            <v-icon>mdi-home</v-icon>-->
<!--          </v-list-item-icon>-->

<!--          <v-list-item-title>Home</v-list-item-title>-->
<!--        </v-list-item>-->

        <v-list-group
            :value="true"
        >
          <template v-slot:activator>
            <v-list-item-title>Public Site</v-list-item-title>
          </template>

          <v-list-group
              :value="true"
              no-action
              sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Pages</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
                v-for="([title, route], i) in admins"
                :key="i"
                link
                :to="route"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group
              no-action
              sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Site Wide</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
                v-for="([title, route], i) in cruds"
                :key="i"
                link
                :to="route"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
      <router-view></router-view>
    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: "Admin",
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      admins: [
        ['About', './about'],
        ['Testimonials', './testimonials'],
        ['Sales Tips', { name: 'Admin-Sales-Tips'}],
        ['Founders', './founders'],
        ['Accelerators', './accelerators'],
        ['Universities', { name: 'Admin-Universities'}],
        ['Investors', { name: 'Admin-Investors'} ],
        ['1-Day Crashcourse', { name: 'Admin-One-Day'} ],
        ['2 1/2 Day Crashcourse', { name: 'Admin-Two-Day'} ],
        ['Office Hours', { name: 'Admin-Office-Hours'} ]
      ],
      cruds: [
        ['Logos', { name: 'Admin-Logos'}],
        ['Contact', '']
      ],
    }),
    created () {
      this.$vuetify.theme.dark = false
    },
    computed: {
      items: () => {
        return [
          {
            text: "Public", children: {
              text: "Pages",
              route: ""
            }
          },
          { text: "About", route: "./about" },
          { text: "Testimonials", route: "./testimonials" },
          { text: "Sales Tactics", route: "./sales-tactics" },
          { text: "Founders", route: "./founders" },
          { text: "Accelerators", route: "./accelerators" }
        ];
      }
    }
  }
</script>

