<template>
    <!-- Modal -->
    <div class="modal fade modal-quick-view" :id="'quickModal-' + idProduct " tabindex="-1" role="dialog"
        aria-labelledby="quickModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <button type="button" class="close modal-close-btn ml-auto" data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="product-details-modal">
                    <div class="row">
                        <div class="col-lg-5">
                            <img :src="foto_sampul" alt="">
                        </div>
                        <div class="col-lg-7 mt--30 mt-lg--30">
                            <div class="product-details-info pl-lg--30 ">
                                <p class="tag-block">Kategori: <a href="#">{{ kategori }}</a></p>
                                <h3 class="product-title">{{ title }}</h3>
                                <ul class="list-unstyled">
                                    <li>Tipe: <a href="#" class="list-value font-weight-bold">
                                            {{ tipe }}</a></li>
                                    <li>Stok: <span class="list-value"> {{ stok }}</span></li>
                                    <li>Penjual: <span class="list-value font-weight-bold"> {{ toko }}</span> - <span class="list-value"> {{ toko_kota }}</span></li>
                                    <!-- <li>Reward Points: <span class="list-value"> 200</span></li>
                                    <li>Availability: <span class="list-value"> In Stock</span></li> -->
                                </ul>
                                <div class="price-block">
                                    <span class="price-new">{{ harga_bawah | currency}}</span>
                                    <span v-if="harga_bawah != harga_atas" class="price-new">  &nbsp;&nbsp;- {{ harga_atas | currency}}</span>
                                    <!-- <del class="price-old">Rp.91.86</del> -->
                                </div>
                                <div class="add-to-cart-row">
                                    <div class="count-input-block">
                                        <span class="widget-label">Qty</span>
                                        <input type="number" class="form-control text-center"
                                            value="1">
                                    </div>
                                    <div class="add-cart-btn">
                                        <a href="" class="btn btn-outlined--warning"><i class="fas fa-cart-plus"></i> Add to Cart</a>
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
                </div>
                <div class="modal-footer">
                    <div class="widget-social-share">
                        <span class="widget-label">Share:</span>
                        <div class="modal-social-share">
                            <a href="#" class="single-icon"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="single-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="single-icon"><i class="fab fa-youtube"></i></a>
                            <a href="#" class="single-icon"><i class="fab fa-google-plus-g"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'QuickView',
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
        harga_atas: {
			type: Number
		},
      kategori: {
			type: String
		},
    stok: {
        type: Number
    },
    toko: {
        type: String
    },
    toko_kota: {
        type: String
    },
    tipe: {
        type: String
    }
  }
}
</script>