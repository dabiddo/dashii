<template>
    <v-app class="grey lighten-1" top-toolbar left-sidebar>
    <v-toolbar>
        <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="showSideBar = !showSideBar" />
        <v-toolbar-logo class="text-xs-right">{{pageHeader}}</v-toolbar-logo>
    </v-toolbar>
    <main>
        <v-sidebar v-model="showSideBar" height="auto">
        <v-list dense>
            <template v-for="item in itemGroup">
            <v-list-group v-if="item.items">
                <v-list-item slot="item">
                <v-list-tile>
                    <v-list-tile-title v-text="item.title" />
                    <v-list-tile-action>
                    <v-icon>keyboard_arrow_down</v-icon>
                    </v-list-tile-action>
                </v-list-tile>
                </v-list-item>
                <v-list-item v-for="subItem in item.items" :key="subItem.title">
                <nuxt-link v-if="subItem.title" :to="{path :subItem.href}" v-bind:class="{list__tile:subItem.title}">
                            <div v-if="subItem.title" class="list__tile__content"><div class="list__tile__title">{{subItem.title}}</div></div>
                            <div v-if="subItem.title" class="list__tile__action"><i class="material-icons icon">{{subItem.action}}</i></div>
                </nuxt-link>
                </v-list-item>
            </v-list-group>
            <!--<v-list-sub-header v-else-if="item.header" v-text="item.header" />-->
            <v-divider v-else-if="item.divider" light />
            <v-list-item v-else>
                <nuxt-link v-if="item.title" :to="{path :item.href}" v-bind:class="{list__tile:item.title}">
                            <div v-if="item.title" class="list__tile__content"><div class="list__tile__title">{{item.title}}</div></div>
                            <div v-if="item.title" class="list__tile__action"><i class="material-icons icon">{{item.action}}</i></div>
                </nuxt-link>
            </v-list-item>
            </template>
        </v-list>
        </v-sidebar>
        <v-content>
        <v-container fluid>
            <nuxt/>
        </v-container>
        </v-content>
    </main>
    </v-app>

</template>
<script>
export default{
    data () {
        return {
            showSideBar:false,
            pageHeader:"Dashii",
            itemGroup: [
            { header: 'Main' },
            { title: 'Home', href:"/", action:"dashboard" },
            {
                title: 'Catalogs',
                group: '/company',
                items: [
                { title: 'Catalog 1', href:"/cards" },
                { title: 'Catalog 2' },
                { title: 'Catalog 3' }
                ]
            },
            { title: 'Forms' },
            { title: 'Plugins', href:"/products" },
            { divider: true },
            { header: 'Another Header' },
            { title: 'About', href:"/about", action:"class" }
            ]
        }
    }
}
</script>