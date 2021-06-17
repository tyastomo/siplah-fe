<template>
    <main class="cart-page-main-block inner-page-sec-padding-bottom mt--50">
        <div class="cart_area cart-area-padding  ">
            <div class="container">
                <div class="page-section-title">
                    <h1>Shopping Cart</h1>
                </div>
                <div class="d-flex flex-column justify-content-center" v-if="!cart.length">
                    <div class="row justify-content-center">
                        <img src="/image/cartkosong.png" class="img-responsive w-50"/>
                    </div>
                    <div class="row justify-content-center">
                        <h2> Keranjang Kosong...</h2>
                    </div>
                </div>
                <div v-else>
                <div v-for="item in cart" :key="item.id">
                    <div class="row">
                        <div class="col-12">
                            <form action="#" class="">
                                <!-- Cart Table -->
                                <div class="cart-table table-responsive mb--40">
                                    <h3 class="text-primary">{{ item.merchant.merchant_name }}</h3>
                                    <p> {{ item.merchant.status }} </p>
                                    <table class="table">
                                        <!-- Head Row -->
                                        <thead>
                                            <tr>
                                                <th class="pro-remove"></th>
                                                <th class="pro-thumbnail"></th>
                                                <th class="pro-thumbnail"></th>
                                                <th class="pro-title">Product</th>
                                                <th class="pro-price">Price</th>
                                                <th class="pro-quantity">Quantity</th>
                                                <th class="pro-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- Product Row -->
                                            <tr class=" text-center" v-for="barang in item.cart_items" :key="barang.id">
                                                <td class="pro-remove"><a href="#" @click="deleteItem(barang.id)"><i class="far fa-trash-alt"></i></a>
                                                </td>
                                                <td class="pro-thumbnail">
                                                    <a class="fas fa-retweet" v-if="barang.is_required_comparison == true"> Bandingkan</a>
                                                    <p v-else> Tidak Perlu Perbandingan</p>
                                                </td>
                                                <td class="pro-remove">
                                                    <a :href="'#negoModal-' + barang.item_id" data-toggle="modal" class="btn btn-outlined--warning round">Nego</a>
                                                </td>
                                                <td class="pro-title font-weight-bold"><a href="#">{{ barang.item.name }}</a></td>
                                                <td class="pro-price"><span>{{ barang.item_price | currency }}</span></td>
                                                <td class="pro-quantity">
                                                    <div class="pro-qty">
                                                        <div class="count-input-block">
                                                            <input type="number" class="form-control text-center"
                                                                :value="barang.quantity">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="pro-subtotal"><span>{{ barang.total_price | currency}}</span></td>
                                            <div class="modal fade modal-quick-view" :id="'negoModal-' + barang.item_id" tabindex="-1" role="dialog" aria-labelledby="quickModal" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <button type="button" class="close modal-close-btn ml-auto" data-dismiss="modal"
                                                            aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                        <div class="product-details-modal">
                                                            <h3 class="text-black">{{ barang.item.name }}</h3>
                                                            <h5 class="text-black">Quantity : {{ barang.quantity }}</h5>
                                                            <div class="row justify-content-center">
                                                                <div class="col-6">
                                                                    <input class="form-control my-2" type="text" v-model="expected_unit" placeholder="Nego harga satuan" aria-label="default input example">
                                                                    <input class="form-control my-2" type="text" v-model="quantity" placeholder="Jumlah yang akan dibeli" aria-label="default input example">
                                                                    <input class="form-control my-2" type="text" v-model="available" placeholder="Perkiraan pembayaran (dalam hari)" aria-label="default input example">
                                                                    <input class="form-control my-2" type="text" v-model="shipping_cost" placeholder="Nego Ongkir" aria-label="default input example">
                                                                    <label for="exampleFormControlTextarea1" class="form-label">Pesan (Opsional)</label>
                                                                    <textarea class="form-control" id="exampleFormControlTextarea1" v-model="pesan" rows="3"></textarea>
                                                                </div>
                                                                <div class="col-12 mt-4">
                                                                    <button type="button" class="btn btn-primary" @click="nego(barang.item_id)">Kirim Nego</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <div class="widget-social-share">
                                                                <span class="widget-label">Siplah 2021</span>
                                                                <!-- <div class="modal-social-share">
                                                                    <a href="#" class="single-icon"><i class="fab fa-facebook-f"></i></a>
                                                                    <a href="#" class="single-icon"><i class="fab fa-twitter"></i></a>
                                                                    <a href="#" class="single-icon"><i class="fab fa-youtube"></i></a>
                                                                    <a href="#" class="single-icon"><i class="fab fa-google-plus-g"></i></a>
                                                                </div> -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </tr>
                                            
                                            <!-- Discount Row  -->
                                            <!-- <tr>
                                                <td colspan="6" class="actions">
                                                    <div class="coupon-block justify-content-end">
                                                        <div class="coupon-text">
                                                            <label for="coupon_code">Coupon:</label>
                                                            <input type="text" name="coupon_code" class="input-text"
                                                                id="coupon_code" value="" placeholder="Coupon code">
                                                        </div>
                                                        <div class="coupon-btn">
                                                            <input type="submit" class="btn btn--primary"
                                                                name="apply_coupon" value="Apply coupon">
                                                        </div>
                                                    </div>
                                                    <div class="update-block text-right">
                                                        <input type="submit" class="btn btn-outlined--warning" name="update_cart"
                                                            value="Update cart">
                                                        <input type="hidden" id="_wpnonce" name="_wpnonce"
                                                            value="05741b501f"><input type="hidden"
                                                            name="_wp_http_referer" value="/petmark/cart/">
                                                    </div>
                                                </td>
                                            </tr> -->
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-4">
                        <label for="select-fund" class="form-label">Pilih Pendanaan</label>
                        <select class="form-select" id="select-fund" @change="getFund()" v-model="fund_select" aria-label="Default select example">
                            <option selected>Pilih salah satu</option>
                            <option v-for="fund in school_funds" :key="fund.id" v-bind:value="{ fund_id: fund.id, fund_name: fund.name }" >{{ fund.name }}</option>
                        </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <button :href="'#courierModal-' + item.merchant_id" data-toggle="modal" class="btn btn-warning btn-block" @click="getCourier(item.merchant_id)">Pilih Kurir</button>
                        </div>
                        <div class="modal fade modal-quick-view" :id="'courierModal-' + item.merchant_id" tabindex="-1" role="dialog" aria-labelledby="quickModal" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <button type="button" class="close modal-close-btn ml-auto" data-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div class="product-details-modal">
                                        <div class="row justify-content-center">
                                            <div class="col-4 my-3" v-for="kurir in courier_list" :key="kurir.id" @click="shipping(kurir.courier_id, item.id)" data-dismiss="modal" style="cursor: pointer">
                                                <div class="card">
                                                    <div class="card-body bg-light">
                                                        <h5 class="text-primary">{{ kurir.courier.name }}</h5>
                                                        <div class="row justify-content-center mt-3">
                                                            <div class="col-2 mr-4" v-if="kurir.pick_up == true">
                                                                <span class="badge rounded-pill bg-success">Pick Up</span>
                                                            </div>
                                                            <div class="col-2 mr-4" v-if="kurir.regular == true">
                                                                <span class="badge rounded-pill bg-danger">Reguler</span>
                                                            </div>
                                                            <div class="col-2 mr-4"  v-if="kurir.cargo == true">
                                                                <span class="badge rounded-pill bg-secondary">Kargo</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <div class="widget-social-share">
                                            <span class="widget-label">Siplah 2021</span>
                                            <!-- <div class="modal-social-share">
                                                <a href="#" class="single-icon"><i class="fab fa-facebook-f"></i></a>
                                                <a href="#" class="single-icon"><i class="fab fa-twitter"></i></a>
                                                <a href="#" class="single-icon"><i class="fab fa-youtube"></i></a>
                                                <a href="#" class="single-icon"><i class="fab fa-google-plus-g"></i></a>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row my-4">
                        <h5>Metode Pengiriman</h5>
                        <div class="row">
                            <div class="col-3"  v-for="antar in antar_list" :key="antar.id">
                                <!-- <button type="button" class="btn btn-warning" data-bs-toggle="button" autocomplete="off" @click="getMethod(item.id, antar.cost[0].value)">{{ antar.description }} - {{ antar.cost[0].value | currency}}</button> -->
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"  @click="getMethod(item.id, antar.cost[0].value)">
                                    <label class="form-check-label" for="inlineRadio1">{{ antar.description }} - {{ antar.cost[0].value | currency}}</label>
                                </div>
                                <!-- <div class="card" role="button">
                                    <div class="card-body bg-light">
                                        <h5 class="text-primary">{{ antar.description }}</h5>
                                        <div class="row justify-content-center mt-3">
                                            <p v-for="harga in antar.cost" :key="harga.id">
                                                {{ harga.value | currency }}
                                            </p>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="cart-section-2">
                        <div class="container">
                            <div class="row justify-content-end">
                                <!-- Cart Summary -->
                                <div class="col-lg-6 col-12 d-flex">
                                    <div class="cart-summary">
                                        <div class="cart-summary-wrap">
                                            <h4><span>Cart Summary</span></h4>
                                            <p>Shipping Cost <span class="text-primary">{{ item.shipping_cost | currency}}</span></p>
                                            <h2>Grand Total <span class="text-primary">{{ item.shipping_cost + item.total_item_price | currency}}</span></h2>
                                        </div>
                                        <div class="cart-summary-button justify-content-end">
                                            <a :href="'#checkoutModal-' + item.id" data-toggle="modal"  class="checkout-btn c-btn btn--primary" :disabled="item.total_item_price > 50000000" @click="patch_all(item.id)">Lanjutkan</a>
                                            <div class="modal fade modal-quick-view" :id="'checkoutModal-' + item.id" tabindex="-1" role="dialog" aria-labelledby="quickModal" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <button type="button" class="close modal-close-btn ml-auto" data-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    <div class="product-details-modal">
                                                        <div class="row justify-content-center">
                                                            <div class="col-12">
                                                                <div class="checkout-cart-total">
                                                                    <h2 class="checkout-title">YOUR ORDER</h2>
                                                                    <!-- <h4>Product <span>Total</span></h4>
                                                                    <ul>
                                                                        <li v-for="checkout_item in checkout.cart_items" :key="checkout_item"><span class="left">Cillum dolore tortor nisl X 01</span> <span class="right">Rp.25.00</span></li>
                                                                        <li><span class="left">Auctor gravida pellentesque X 02 </span><span class="right">Rp.50.00</span></li>
                                                                        <li><span class="left">Condimentum posuere consectetur X 01</span>
                                                                            <span class="right">Rp.29.00</span></li>
                                                                        <li><span class="left">Habitasse dictumst elementum X 01</span>
                                                                            <span class="right">Rp.10.00</span></li>
                                                                    </ul> -->
                                                                    <p>Sub Total <span>{{ checkout.total_item_price | currency}}</span></p>
                                                                    <p>Kurir : </p>
                                                                    <p>Shipping Fee <span>{{ checkout.shipping_cost | currency}}</span></p>
                                                                    <h4>Grand Total <span>{{ checkout.shipping_cost + checkout.total_item_price | currency}}</span></h4>
                                                                    <div class="mt--25">
                                                                        <!-- <article>
                                                                            <h3 class="d-none sr-only">blog-article</h3>
                                                                            Sorry, it seems that there are no available payment methods for
                                                                            your state. Please contact us if you
                                                                            require
                                                                            assistance
                                                                            or wish to make alternate arrangements.
                                                                        </article> -->
                                                                    </div>
                                                                    <!-- <div class="term-block">
                                                                        <input type="checkbox" id="accept_terms2">
                                                                        <label for="accept_terms2">I’ve read and accept the terms &amp;
                                                                            conditions</label>
                                                                    </div> -->
                                                                    <button class="place-order w-100" @click="final_checkout(item.id)" data-dismiss="modal">Checkout</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <div class="widget-social-share">
                                                            <span class="widget-label">Siplah 2021</span>
                                                            <!-- <div class="modal-social-share">
                                                                <a href="#" class="single-icon"><i class="fab fa-facebook-f"></i></a>
                                                                <a href="#" class="single-icon"><i class="fab fa-twitter"></i></a>
                                                                <a href="#" class="single-icon"><i class="fab fa-youtube"></i></a>
                                                                <a href="#" class="single-icon"><i class="fab fa-google-plus-g"></i></a>
                                                            </div> -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            <!-- <button class="update-btn c-btn btn-outlined--warning">Nego</button> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>     
    </main>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2'

export default  {
    name: 'Cart',
    data() {
        return {
            cart: null,
            expected_unit: "",
            quantity: "",
            available: "",
            shipping_cost: "",
            pesan: "",
            school_funds: null,
            merchant_courier: null,
            fund_select: "",
            courier_select: "",
            courier_list: [],
            antar_list: [],
            courier_method: "",
            cost: "",
            fund_id: "",
            fund_name: "",
            checkout: "",
            cart_ids: []
        }
    },
    beforeCreate() {
        const token = localStorage.token
        if(!token){
            this.$router.push('/login')
        }
        axios.get("https://api.siplah.anugrahmal.id/v1/carts",
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }
        )
        .then(response => {
          this.cart = response.data.data
        });
        axios.get("https://api.siplah.anugrahmal.id/v1/schools/funds",
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }
        )
        .then(response => {
          this.school_funds = response.data.data.sources
        });
    },
    methods: {
        getFund() {
            this.fund_id = this.fund_select.fund_id,
            this.fund_name = this.fund_select.fund_name
        },
        deleteItem(id) {
            Swal.fire({
            title: 'Yakin menghapus Barang?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Lanjutkan'
            }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("https://api.siplah.anugrahmal.id/v1/carts/cart-items/"+id,
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }
            ).then(response => {
                console.log(response)
            })
            Swal.fire(
                'Barang Dihapus!',
                '',
                'success'
                )
            this.$router.push('/cart')
            }
         })
        },

        nego(id)  {
            var data_nego = {
                item_id: id,
                quantity: this.quantity,
                expected_unit_price: this.expected_unit,
                expected_available_in: this.available,
                expected_shipping_cost: this.shipping_cost,
                context: this.pesan
            };
            axios.post("https://api.siplah.anugrahmal.id/v1/negotiations", data_nego,
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(response => {
                console.log(response)
            })
            Swal.fire(
                'Nego Harga Diajukan!',
                '',
                'success'
                )
            this.$router.push('/cart')
        },
        
        getCourier(id) {
            axios.get("https://api.siplah.anugrahmal.id/v1/merchants/"+id+"/couriers",
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(response => {
                this.courier_list = response.data.data
                // console.log(response.data.data)
            })
        },

        shipping(kurir, cart) {
            this.courier_select = kurir
            axios.get("https://api.siplah.anugrahmal.id/v1/carts/"+cart+"/couriers/"+kurir+"/methods",
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(response => {
                this.antar_list = response.data.data.rajaongkir.results[0].costs
                // console.log(response.data.data.rajaongkir.results[0].costs)
            })
        },
        getMethod(id, price) {
            this.cost = price
            var ubah_kurir = {
                courier_id: this.courier_select,
                courier_method: 'REGULAR',
                shipping_cost: price
            }
            axios.patch("https://api.siplah.anugrahmal.id/v1/carts/"+id, ubah_kurir,
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(response => {
                console.log(response)
                // console.log(response.data.data.rajaongkir.results[0].costs)
            })
        },

        patch_all(id) {
            var all = {
                fund_id: this.fund_id,
                fund_name: this.fund_name,
                // courier_id: this.courier_select,
                // courier_method: 'REGULAR',
                // shipping_cost: this.cost
            };
            axios.patch("https://api.siplah.anugrahmal.id/v1/carts/"+id, all,
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(response => {
                console.log(response.data.data)
                // console.log(response.data.data.rajaongkir.results[0].costs)
                this.checkout = response.data.data
            })
        },

        final_checkout(id) {
            var items = {
                cart_ids: [id]
            }
            // console.log(item);
            axios.post("https://api.siplah.anugrahmal.id/v1/transactions", items,
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(response => {
                console.log(response)
                // console.log(response.data.data.rajaongkir.results[0].costs)
                this.checkout = response.data.data
            })
            Swal.fire(
                'Berhasil Checkout!',
                '',
                'success'
                )
            axios.get("https://api.siplah.anugrahmal.id/v1/carts",
            {
                    headers:{
                        Authorization: 'Bearer ' + window.localStorage.getItem("token")
                    }
                }
            )
            .then(response => {
            this.cart = response.data.data
            });
        }
    },
}
</script>

<style scoped>
    .round {
      border-radius: 50px;
      height: 22px;
      border: 2px solid #e5e5e5;
      line-height: initial;
      padding: 5px 20px;
    }
</style>