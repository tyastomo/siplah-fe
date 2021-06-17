<template>
    <div class="product-card">
        <div class="product-grid-content">
            <div class="product-card--body" @click="gotoProduct()" style="cursor: pointer">
                <div class="card-image">
                    <img :src="foto_sampul" alt="" class="img-fluid img-product mb--40">
                    <!-- <div class="hover-contents">
                        <a href="product-details.html" class="hover-image">
                            <img :src="foto_sampul" alt="" class="img-fluid img-product">
                        </a>
                        <div class="hover-btns">
                            <a href="cart.html" class="single-btn">
                                <i class="fas fa-shopping-basket"></i>
                            </a>
                            <a href="wishlist.html" class="single-btn">
                                <i class="fas fa-heart"></i>
                            </a>
                            <a href="compare.html" class="single-btn">
                                <i class="fas fa-random"></i>
                            </a>
                            <a :href="'#quickModal-' + idProduct" data-toggle="modal"
                                class="single-btn">
                                <i class="fas fa-eye"></i>
                            </a>
                        </div>
                    </div> -->
                </div>
                <div class="product-header">
                    <a class="author">
                        {{ kategori }}
                    </a>
                    <h3><a>{{ title }}</a> 
                        <span class="price-discount" v-if="dalam_negeri == true">Produk Dalam Negeri</span>
                        <span class="price-discount" v-if="umkm == true">UMKM</span>
                    </h3>
                    
                </div>
                <div class="price-block">
                    <span class="price">{{ harga_bawah | currency }}</span>
                    <!-- <del class="price-old">Rp.51.20</del>
                    <span class="price-discount">20%</span> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
      idProduct: {
			type: String
		},
      title: {
			type: String
		},
      foto_sampul: {
			type: String
		},
      harga_bawah: {
			type: Number
		},
      kategori: {
			type: String
		},
        dalam_negeri: {
            type: Boolean
        },
        umkm: {
            type: Boolean
        }

  },
  methods: {
      gotoProduct() {
          this.$router.push({
            name: "ProductDetail",
            params: {
                idProduct: this.idProduct
            }
          });
      }
    }    
}
</script>

<style scoped>
    .img-product {
        width: 350px;
        height: 350px;
        object-fit: contain;
    }
</style>