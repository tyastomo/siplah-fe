<template>
    <div class="site-header d-none d-lg-block">
			<div class="header-middle pt--10 pb--10">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-3 ">
							<router-link to="/">
							<a href="" class="site-brand animate__animated animate__zoomIn">
								<img src="/image/siplah.png" alt="">
							</a>
							</router-link>
						</div>
						<div class="col-lg-3">
						</div>
						<div class="col-lg-6 align-items-end">
							<div class="main-navigation flex-lg-right">
								<ul class="main-menu menu-right ">
									<div class="header-phone ">
										<div class="icon">
											<i class="fas fa-headphones-alt"></i>
										</div>
										<div class="text">
											<p class="">Free Support 24/7</p>
											<p class="font-weight-bold">+62-31-592-8580</p>
										</div>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="header-bottom bg-primary pt--20 pb--20">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-3">
							<nav class="category-nav btn-warning">
								<div>
									<a href="javascript:void(0)" class="category-trigger"><i
											class="fa fa-bars"></i>Cari Kategori</a>
									<ul class="category-menu">
										<!-- <li class="cat-item has-children">
											<a href="">Arts & Photography</a>
											<ul class="sub-menu">	
												<li><a href="">Bags & Cases</a></li>
												<li><a href="">Binoculars & Scopes</a></li>
												<li><a href="">Digital Cameras</a></li>
												<li><a href="">Film Photography</a></li>
												<li><a href="">Lighting & Studio</a></li>
											</ul>
										</li> -->
										<div v-for="item in categories" :key="item.id" >
											<li class="cat-item has-children" v-if="!item.parent_id">
												<a @click="goKategori(item.id)">{{ item.name }}</a>
												<ul class="sub-menu ">
													<div v-for="subitem in categories" :key="subitem.id">
													<li v-if="subitem.parent_id == item.id">
														<a @click="goKategori(subitem.id)">{{ subitem.name }}</a>
														<ul class="sub-menu ">
															<div v-for="subsubitem in categories" :key="subsubitem.id">
															<li v-if="subsubitem.parent_id == subitem.id">
																<a @click="goKategori(subsubitem.id)">{{ subsubitem.name }}</a>
																<!-- <ul class="sub-menu ">
																	<div v-for="subsubsubitem in categories" :key="subsubsubitem.id">
																	<li v-if="subsubsubitem.parent_id == subsubitem.id">
																		<a @click="goKategori(subsubsubitem.id)">{{ subsubsubitem.name }}</a>
																	</li>
																	</div>
																</ul> -->
															</li>
															</div>
														</ul>
													</li>
													</div>
												</ul>
											</li>
										</div>
										<li class="cat-item"><a href="" class="js-expand-hidden-menu">More
												Categories</a></li>
									</ul>
								</div>
							</nav>
						</div>
						<div class="col-lg-5">
							<div class="header-search-block">
								<input type="text" placeholder="Pencarian..." v-model="cari">
								<button class="btn" @click="goCari()">Search</button>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="main-navigation flex-lg-right">
								<div class="cart-widget">
									<div class="login-block text-white">
										<router-link to="/my-account" v-if="isLogin" class="font-weight-bold text-white"><i class="fas fa-user mr-2"></i> Akun Saya</router-link>
									</div>
									<div class="login-block text-white">
										<router-link to="/login" v-if="!isLogin"><a href="login" class="font-weight-bold text-white">Masuk</a></router-link>
										<a href="" class="font-weight-bold text-white" v-if="isLogin" @click="logout()"> <i class="fas fa-sign-out-alt"></i> Keluar</a>
										<!-- <span>atau</span><a class="text-white" href="login-register.html">Daftar</a> -->
									</div>
									<router-link to="/cart">
									<div class="cart-block">
										<div class="cart-total">
											<!-- <span class="text-number">
												1
											</span> -->
											<span class="text-item text-white">
												Shopping Cart
											</span>
											<!-- <span class="price text-white">
												Rp.0.00
												<i class="fas fa-chevron-down text-white"></i>
											</span> -->
										</div>
										<!-- <div class="cart-dropdown-block">
											<div class=" single-cart-block ">
												<div class="cart-product">
													<a href="product-details.html" class="image">
														<img src="image/products/cart-product-1.jpg" alt="">
													</a>
													<div class="content">
														<h3 class="title"><a href="product-details.html">Kodak PIXPRO
																Astro Zoom AZ421 16 MP</a></h3>
														<p class="price"><span class="qty">1 ×</span> Rp.87.34</p>
														<button class="cross-btn"><i class="fas fa-times"></i></button>
													</div>
												</div>
											</div>
											<div class=" single-cart-block ">
												<div class="btn-block">
													<a href="cart.html" class="btn btn-outlined--primary">View Cart <i
															class="fas fa-chevron-right"></i></a>
													<a href="checkout.html" class="btn btn-warning">Check Out <i
															class="fas fa-chevron-right"></i></a>
												</div>
											</div>
										</div> -->
									</div>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'SiteHeader',
  data() {
		return {
			isLogin: localStorage.token,
			cari: ""
		};
	},
  created() {
	this.userState = this.$store.getters.isLoggedIn;
    this.$store.dispatch("getKategori");
  },
  methods: {
	logout() {
		localStorage.removeItem('token')
	},
	goKategori(id){
		this.$store.dispatch("goKategori", id);
		this.$router.push({
            name: "Kategori",
            params: {
                id: id
            }
          });
	},
	goCari(){
		this.$store.dispatch("goCari", this.cari);
		this.$route.push('/');
	}
  },
  computed: mapState({
	categories: state => state.kategori.data
  })
}
</script>

<style scoped>
	.btn-warning {
		background-color: #F26522 !important;
	}
	a {
		text-decoration: none;
		cursor: pointer;
	}
	a:hover {
		color: #F26522 !important;
	}
	.sub-menu {
		max-height: 750px !important;
		overflow: auto;
	}
</style>