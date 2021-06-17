<template>
    <div class="container">
				<div class="row justify-content-end mt-4">
					<div class="col-2">
					<pagination :data="paginate" @pagination-change-page="getResults"></pagination>
					</div>
				</div>
				<span></span>
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
						:umkm="n.umkm_product"
					/>
					</div>
				</div>
				<!-- Pagination Block -->
				<div class="row justify-content-end mt-4">
					<div class="col-2">
					<pagination :data="paginate" @pagination-change-page="getResults"></pagination>
					</div>
				</div>
				<div class="row justify-content-center pt--30">
					<div class="col-md-4 align-item-end">
						<!-- <nav aria-label="Page navigation example">
							<ul class="pagination" v-for="page in pagination" :key="page.id">
								<li class="page-item"><a class="page-link" href="#">Previous</a></li>
								<li class="page-item"><a class="page-link" href="#">{{ page.label }}</a></li>
								<li class="page-item"><a class="page-link" href="#">2</a></li>
								<li class="page-item"><a class="page-link" href="#">3</a></li>
								<li class="page-item"><a class="page-link" href="#">Next</a></li>
							</ul>
						</nav> -->
						<!-- <div class="row justify-content-center"> -->
							<!-- </div> -->
						<!-- <div class="pagination-block">
							<ul class="pagination-btns flex-center">
								<li><a href="" class="single-btn prev-btn ">|<i class="zmdi zmdi-chevron-left"></i> </a>
								</li>
								<li><a href="" class="single-btn prev-btn "><i class="zmdi zmdi-chevron-left"></i> </a>
								</li>
								<li class="active"><a href="" class="single-btn">1</a></li>
								<li><a href="" class="single-btn">2</a></li>
								<li><a href="" class="single-btn">3</a></li>
								<li><a href="" class="single-btn">4</a></li>
								<li><a href="" class="single-btn next-btn"><i class="zmdi zmdi-chevron-right"></i></a>
								</li>
								<li><a href="" class="single-btn next-btn"><i class="zmdi zmdi-chevron-right"></i>|</a>
								</li>
							</ul>
						</div> -->
					</div>
				</div>
				<div
						v-for="n in produk"
						:key="n.id">
					<QuickView
						:idProduct="n.id"
						:title="n.name"
						:foto_sampul="n.media_primary.original"
						:harga_bawah="n.item_lower_price.price"
						:harga_atas="n.item_higher_price.price"
						:kategori="n.category.name"
						:tipe="n.item_type.name"
						:toko="n.merchant.merchant_name"
						:toko_kota="n.merchant.region.kab_kota"
						:stok="n.stock"
					/>
				</div>
			</div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import QuickView from './QuickView.vue'
// import { mapState } from "vuex";
import axios from 'axios';

export default {
  name: 'ProductList',
  components: {
	ProductCard,
	QuickView
  },
  data() {
	return {
		paginate: {},
		produk: ""
	}
  },
  beforeCreate() {
	axios.get("https://api.siplah.anugrahmal.id/v1/items?sort_field=created_at&sort_direction=desc")
		.then(response => {
			console.log(response.data.data)
			this.paginate = response.data.data
			this.produk = this.paginate.data
	})
  },
  created() {
		// Fetch initial results
		this.getResults();
	},
//   created() {
//     this.$store.dispatch("getProduct");
//   },
//   computed(){
	
//   },
  methods: {
		getResults(page) {
			let uri = 'https://api.siplah.anugrahmal.id/v1/items?page=' + page;
            axios.get(uri).then(response => {
                        this.produk = response.data.data.data
                    });
            }
  }
}

</script>