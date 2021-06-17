<template>
    <div class="footer-bottom bg-primary">
			<div class="container">
				<div class="row justify-content-between">
					<div class=" col-xl-3 col-lg-4 col-sm-6  d-none ">
						<div class="single-footer pb--10">
							<div class="brand-footer footer-title">
								<img src="https://static-siplah.blibli.com/static/img/siplah-logo.203d66a.png" alt="">
							</div>
							<div class="footer-contact">
								<p><span class="label text-white">Address:</span><span class="text-white">Example Street 98, HH2 BacHa, New
										York, USA</span></p>
								<p><span class="label text-white">Phone:</span><span class="text-white">+18088 234 5678</span></p>
								<p><span class="label text-white">Email:</span><span class="text-white">suport@hastech.com</span></p>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-lg-2 col-sm-6 col-6  pb--10">
						<!-- <div class="single-footer pb--10">
							<div class="footer-title">
								<h3 class="text-white ml-4">Information</h3>
							</div>
							<ul class="footer-list normal-list text-white">
								<li><a href="">Prices drop</a></li>
								<li><a href="">New products</a></li>
								<li><a href="">Best sales</a></li>
								<li><a href="">Contact us</a></li>
								<li><a href="">Sitemap</a></li>
							</ul>
						</div> -->
						<div class="single-footer pb--10">
							<div class="footer-title">
								<h3 class="text-white ml-4">Bantuan</h3>
							</div>
							<ul class="normal-list text-white">
								<li><a href="" class="text-left">Syarat & Ketentuan</a></li>
								<li><a href="" class="text-left">Kebijakan Privasi</a></li>
								<li><a href="" class="text-left">Hubungi Kami</a></li>
								<li><router-link to="/faq"><a href="" class="text-left">FAQ</a></router-link></li>
								<li><a href="" class="text-left">Video Tutorial</a></li>
							</ul>
						</div>
					</div>
					<div class="col-xl-3 col-lg-2 col-sm-6 col-6 pb--10">
						<div class="pb--10">
							<div class="footer-title">
								<h3 class="text-white ml-4">Tentang</h3>
							</div>
							<ul class="normal-list text-white">
								<li><a href="" class="text-left">Tentang SIPLah</a></li>
								<!-- <li><a href="" class="text-left">Kebijakan Privasi</a></li>
								<li><a href="" class="text-left">Hubungi Kami</a></li> -->
								<li><router-link to="/register-merchant"><a href="" class="text-left">Daftar Sebagai Penjual</a></router-link></li>
								<!-- <li><a href="" class="text-left">Video Tutorial</a></li> -->
							</ul>
						</div>
					</div>
					<div class=" col-xl-3 col-lg-4 col-sm-6">
						<div class="social-block">
							<h3 class="title text-white">STAY CONNECTED</h3>
							<ul class="social-list list-inline">
								<li class="single-social facebook"><a href=""><i class="ion ion-social-facebook"></i></a>
								</li>
								<li class="single-social twitter"><a href=""><i class="ion ion-social-twitter"></i></a></li>
								<li class="single-social google"><a href=""><i
											class="ion ion-social-googleplus-outline"></i></a></li>
								<li class="single-social youtube"><a href=""><i class="ion ion-social-youtube"></i></a></li>
							</ul>
						</div>
						<div class="newsletter-form">
							<p class="copyright-text">Copyright © 2021 <a href="#" class="author text-warning">SIPLah</a>. All Right Reserved.
								<br></p>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
	a {
		color: white !important;
		text-decoration: none;
	}
	.text-left {
		text-align: left !important;
	}
</style>