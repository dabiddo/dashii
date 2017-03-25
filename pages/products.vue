<template>
<v-menu offset-y>
  <v-btn primary dark slot="activator">Dropdown</v-btn>
  <v-list>
    <v-list-item v-for="product in products" :key="product">
      <v-list-tile>
        <v-list-tile-title>{{ product.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list-item>
  </v-list>
</v-menu>
</template>
<script>
export default{
    data(){
        return {
            products:[
                {title:"tacos"},{title:"sodas"}
            ]
        }
    }
}
</script>