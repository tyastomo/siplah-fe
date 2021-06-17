<template>
    <section class="hero-area hero-slider-3">
        <div class="sb-slick-slider" data-slick-setting='{
                                                    "autoplay": true,
                                                    "autoplaySpeed": 8000,
                                                    "slidesToShow": 1,
                                                    "dots":true
                                                    }'>
            <div class="single-slide bg-image bg-overlay--dark" v-for="pic in banner" :key="pic.id" :data-bg="pic.image">
                <div class="container">
                    <div class="home-content text-center">
                    </div>
                </div>
            </div>
            <!-- <div class="single-slide bg-image  bg-overlay--dark" data-bg="https://source.unsplash.com/1920x600/?book">
                <div class="container">
                    <div class="home-content pl--30">
                    </div>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
  name: 'HomeBanner',
  data() {
      return {
          banner: ""
      }
  },
  beforeCreate() {
    axios.get("https://api.siplah.anugrahmal.id/v1/banners")
    .then(response => {
        console.log(response.data.data)
        this.banner = response.data.data
    })
  }
}
</script>
