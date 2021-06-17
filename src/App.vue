<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    
  </div> -->
  <div class="site-wrapper" id="top">
		<SiteHeader/>
		<MobileMenu/>
		<StickyHeader/>
    <router-view/>
    <SiteFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import SiteHeader from '@/components/nav/SiteHeader.vue'
import MobileMenu from '@/components/nav/MobileMenu.vue'
import StickyHeader from '@/components/nav/StickyHeader.vue'
import SiteFooter from '@/components/footer/SiteFooter.vue'
// import { mapState } from "vuex"

export default {
  name: 'Home',
  components: {
    SiteHeader,
    MobileMenu,
    StickyHeader,
    SiteFooter
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
