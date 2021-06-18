<template>
        <div class="container my--30">
            <div class="row">
                <div class="col-lg-9 order-lg-2">
                    <div class="shop-product-wrap grid with-pagination row space-db--30 shop-border" v-if="!produk.length">
                        <div class="d-flex flex-column justify-content-center">
                            <div class="row justify-content-center">
                                <img src="/image/cartkosong.png" class="img-responsive w-50"/>
                            </div>
                            <div class="row justify-content-center text-center">
                                <h2> Barang Tidak Ditemukan...</h2>
                            </div>
                        </div>
                    </div>
                    <div class="shop-product-wrap grid with-pagination row space-db--30 shop-border">
                        <div
                            v-for="n in produk"
                            :key="n.id"
                            class="col-lg-4 col-sm-6 col-6">
                        <ProductCard
                            :idProduct="n.id"
                            :title="n.name"
                            :foto_sampul="n.media_primary.original"
                            :harga_bawah="n.item_lower_price.price"
                            :kategori="n.category.name"
                            :dalam_negeri="n.domestic_product"
                        />
                        </div>
                    </div>
                </div>
                <div class="col-lg-3  mt--40 mt-lg--0">
                    <div class="inner-page-sidebar">
                        <!-- Accordion -->
                        <div class="single-block">
                            <h3 class="sidebar-title">Categories</h3>
                            <ul class="sidebar-menu--shop">
                                <li v-for="item in categories" :key="item.id"><a href="">{{ item.name }}</a></li>
                                <!-- <li><a href="">Shop (16)</a>
                                    <ul class="inner-cat-items">
                                        <li><a href="">Saws (0)</a></li>
                                        <li><a href="">Concrete Tools (7)</a></li>
                                        <li><a href="">Drills (2)</a></li>
                                        <li><a href="">Sanders (1)</a></li>
                                    </ul>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import ProductCard from '../../components/product/ProductCard.vue'
// import QuickView from '../../components/product/QuickView.vue'
import { mapState } from "vuex";

export default {
    name: 'Cari',
    components: {
        ProductCard,
    },
    mounted() {
        // this.$store.dispatch("goKategori", this.$route.params.id);
        this.$store.dispatch("getCari",  this.$route.params.id);
    },
    computed: mapState({
        produk: state => state.produk,
        categories: state => state.kategori.data.slice(0, 30).reverse()
    })
}
</script>