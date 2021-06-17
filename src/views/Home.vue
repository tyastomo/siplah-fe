<template>
  <div class="home">
    <main class="inner-page-sec-padding-bottom">
      <HomeBanner/>
      <SiteInfo/>
      <ProductList/>
    </main>
  </div>
</template>
<script>

// @ is an alias to /src
import HomeBanner from '@/components/home/HomeBanner.vue'
import SiteInfo from '@/components/home/SiteInfo.vue'
import ProductList from '@/components/product/ProductList.vue'
import Swal from 'sweetalert2'

export default {
  name: 'Home',
  components: {
    HomeBanner,
    SiteInfo,
    ProductList
  },
  created() {
      const token = this.$route.query.token
      if(token){
        localStorage.setItem("token", token)
        this.$store.dispatch("sso", token);
        Swal.fire(
          'Berhasil Masuk!',
          '',
          'success'
        )
      }
  },
}
</script>
