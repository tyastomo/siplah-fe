<template>
    <div class="container mt--60">
        <!-- <div v-for="item in detail" :key="item.id"> -->
        <div class="row  mb--60">
            <div class="col-lg-5 mb--30">
                <img :src="detail.data.media[0].original" alt="">
                <!-- Product Details Slider Big Image-->
                <!-- <div class="product-details-slider sb-slick-slider arrow-type-two" data-slick-setting='{
                "slidesToShow": 1,
                "arrows": false,
                "fade": true,
                "draggable": false,
                "swipe": false,
                "asNavFor": ".product-slider-nav"
                }'>
                    <div class="single-slide">
                        <img src="https://source.unsplash.com/daily" class="img-fluid" alt="">
                    </div>
                    <div class="single-slide">
                        <img src="image/products/product-details-2.jpg" alt="">
                    </div>
                    <div class="single-slide">
                        <img src="image/products/product-details-3.jpg" alt="">
                    </div>
                    <div class="single-slide">
                        <img src="image/products/product-details-4.jpg" alt="">
                    </div>
                        <img src="image/products/product-details-5.jpg" alt="">
                    <div class="single-slide">
                    </div>
                </div> -->
            </div>
            <div class="col-lg-7">
                <div class="product-details-info pl-lg--30 ">
                    <p class="tag-block">{{ detail.data.category.name }}</p>
                    <h3 class="product-title">{{ detail.data.name }}</h3>
                    <ul class="list-unstyled">
                        <li>Tipe: <span class="list-value"> {{ detail.data.item_type.name }}</span></li>
                        <li>Stok: <a href="#" class="list-value font-weight-bold"> {{ detail.data.stock }}</a></li>
                        <li>Penjual: <span class="list-value font-weight-bold"> {{ detail.data.merchant.merchant_name }} </span> <span class="list-value"> - {{ detail.data.merchant.region.kab_kota }}</span></li>
                    </ul>
                    <div class="price-block">
                        <span class="price-new">{{ detail.data.item_lower_price.price | currency }}
                        <span v-if="detail.data.item_lower_price.price != detail.data.item_higher_price.price" class="price-new">  -  {{ detail.data.item_higher_price.price | currency}}</span></span>
                    </div>
                    <!-- <div class="rating-widget">
                        <div class="rating-block">
                            <span class="fas fa-star star_on"></span>
                            <span class="fas fa-star star_on"></span>
                            <span class="fas fa-star star_on"></span>
                            <span class="fas fa-star star_on"></span>
                            <span class="fas fa-star "></span>
                        </div>
                        <div class="review-widget">
                            <a href="">(1 Reviews)</a> <span>|</span>
                            <a href="">Write a review</a>
                        </div>
                    </div> -->
                    <!-- <article class="product-details-article">
                        <h4 class="sr-only">Product Summery</h4>
                        <p>Long printed dress with thin adjustable straps. V-neckline and wiring under the Dust
                            with ruffles at the bottom of the
                            dress.</p>
                    </article> -->
                    <div class="add-to-cart-row">
                        <div class="count-input-block">
                            <span class="widget-label">Qty</span>
                            <input type="number" class="form-control text-center" v-model="quantity">
                        </div>
                        <div class="add-cart-btn">
                            <button type="submit" class="btn btn-outlined--warning" v-on:click="submit"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                    </div>
                        </div>
                    <!-- <div class="add-to-cart-row mt--30">
                        <div class="add-cart-btn mr-2">
                            <a href="" class="btn btn-outlined--primary"><i class="fas fa-random"></i> Add to
                                Compare</a>
                        </div>
                        <div class="add-cart-btn mr-2">
                            <a href="" class="btn btn-outlined--pink"><i class="fas fa-heart"></i> Add to
                                Wishlist</a>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="sb-custom-tab review-tab section-padding">
            <ul class="nav nav-tabs nav-style-2" id="myTab2" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="tab1" data-toggle="tab" href="#tab-1" role="tab"
                        aria-controls="tab-1" aria-selected="true">
                        DESKRIPSI
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="tab2" data-toggle="tab" href="#tab-2" role="tab"
                        aria-controls="tab-2" aria-selected="true">
                        REVIEW PRODUK
                    </a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                    <article class="review-article">
                        <h1 class="sr-only">Tab Article</h1>
                        <p>{{ detail.data.description }}</p>
                    </article>
                </div>
                <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2">
                    <div class="review-wrapper">
                        <h2 class="title-lg mb--20">1 REVIEW FOR AUCTOR GRAVIDA ENIM</h2>
                        <div class="review-comment mb--20">
                            <div class="avatar">
                                <img src="https://source.unsplash.com/ZHvM3XIOHoE" alt="">
                            </div>
                            <div class="text">
                                <div class="rating-block mb--15">
                                    <span class="ion-android-star-outline star_on"></span>
                                    <span class="ion-android-star-outline star_on"></span>
                                    <span class="ion-android-star-outline star_on"></span>
                                    <span class="ion-android-star-outline"></span>
                                    <span class="ion-android-star-outline"></span>
                                </div>
                                <h6 class="author">ADMIN – <span class="font-weight-400">March 23, 2015</span>
                                </h6>
                                <p>Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio
                                    quis mi.</p>
                            </div>
                        </div>
                        <h2 class="title-lg mb--20 pt--15">ADD A REVIEW</h2>
                        <div class="rating-row pt-2">
                            <p class="d-block">Your Rating</p>
                            <span class="rating-widget-block">
                                <input type="radio" name="star" id="star1">
                                <label for="star1"></label>
                                <input type="radio" name="star" id="star2">
                                <label for="star2"></label>
                                <input type="radio" name="star" id="star3">
                                <label for="star3"></label>
                                <input type="radio" name="star" id="star4">
                                <label for="star4"></label>
                                <input type="radio" name="star" id="star5">
                                <label for="star5"></label>
                            </span>
                            <form action="./" class="mt--15 site-form ">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="message">Comment</label>
                                            <textarea name="message" id="message" cols="30" rows="10"
                                                class="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-group">
                                            <label for="name">Name *</label>
                                            <input type="text" id="name" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-group">
                                            <label for="email">Email *</label>
                                            <input type="text" id="email" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-group">
                                            <label for="website">Website</label>
                                            <input type="text" id="website" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="submit-btn">
                                            <a href="#" class="btn btn-warning">Post Comment</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    <!-- </div> -->
</template>

<script>
// import { mapGetters } from "vuex";
import axios from "axios";
import Swal from 'sweetalert2'

export default {
  name: 'ProductDetail',
  beforeCreate() {
    //   this.$store.dispatch("productDetails",
    //   this.$route.params.idProduct);
    axios.get("https://api.siplah.anugrahmal.id/v1/items/"+this.$route.params.idProduct)
        .then(response => {
          console.log(response)
          this.detail = response.data
        });
  },
    data() {
        return {
            quantity: 1,
            // idProduct: this.$route.params.idProduct
            detail: ""
        };
    },
//     computed: {
//       ...mapGetters(['detail']),
//   },
  methods: {
    submit() {
      var data = {
        item_id: this.detail.data.id,
        quantity: this.quantity
      };
    //   console.log(data)
      axios.post("https://api.siplah.anugrahmal.id/v1/carts", data, {headers:
          {Authorization: 'Bearer ' + window.localStorage.getItem("token")}})
        .then(response => {
            
            console.log(response)
        })
        Swal.fire({
            title: 'Barang ditambahkan ke Keranjang',
            text: "Mau melihat keranjang belanja?",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Lanjutkan'
            }).then((result) => {
            if (result.isConfirmed) {
                this.$router.push('/cart')
            }
         })
    }
  }
}
</script>