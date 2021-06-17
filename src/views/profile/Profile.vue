<template>
    <div class="page-section inner-page-sec-padding mt--50">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <!-- My Account Tab Menu Start -->
                        <div class="col-lg-3 col-12">
                            <div class="myaccount-tab-menu nav" role="tablist">
                                <a href="#dashboad" class="active" data-toggle="tab"><i
                                        class="fas fa-tachometer-alt"></i>
                                    Dashboard</a>
                                <a href="#orders" data-toggle="tab"><i class="fa fa-cart-arrow-down"></i> Orders</a>
                                <a href="#account-info" data-toggle="tab"><i class="fa fa-user"></i> Account
                                    Details</a>
                                <a href="login-register.html"><i class="fas fa-sign-out-alt"></i> Logout</a>
                            </div>
                        </div>
                        <!-- My Account Tab Menu End -->
                        <!-- My Account Tab Content Start -->
                        <div class="col-lg-9 col-12 mt--30 mt-lg--0">
                            <div class="tab-content" id="myaccountContent">
                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Dashboard</h3>
                                        <div class="welcome mb-20">
                                            <p>Hello, <strong>{{ profile.name }}</strong>!</p>
                                        </div>
                                        <p class="mb-0">From your account dashboard. you can easily check &amp; view
                                            your
                                            recent orders, manage your shipping and billing addresses and edit your
                                            password and account details.</p>
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->
                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="orders" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Orders</h3>
                                        <div class="myaccount-table table-responsive text-center">
                                            <table class="table table-bordered">
                                                <thead class="thead--primary">
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Sumber Pendanaan</th>
                                                        <th>Toko</th>
                                                        <th>Total Belanja</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody  v-for="items in transaksi_list" :key="items.id">
                                                    <tr>
                                                        <td>{{ items.created_at | formatDate }}</td>
                                                        <td>{{ items.fund_name }}</td>
                                                        <td>{{ items.merchant.merchant_name }}</td>
                                                        <td>{{ items.total_price | currency }}</td>
                                                        <td>{{ items.status.name }}</td>
                                                        <td>
                                                            <!-- <button class="btn btn-danger" id="pay-button" v-if="items.status.id == 9" @click="bayar(items.id)">Bayar</button>
                                                            <a class="btn btn-success" href="#" v-if="items.status.id == 6" @click="received(items.id)">Sudah Diterima</a> -->
                                                            <a :href="'#detailsModal-' + items.id" data-toggle="modal" class="btn btn-warning" @click="detail(items.id)" >Detail</a>
                                                        </td>
                                                        <div class="modal fade modal-quick-view" :id="'detailsModal-' + items.id" tabindex="-1" role="dialog" aria-labelledby="quickModal" aria-hidden="true">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <button type="button" class="close modal-close-btn ml-auto" data-dismiss="modal"
                                                                        aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                    <div class="product-details-modal">
                                                                        <div class="row">
                                                                            <h4>{{ items.merchant.merchant_name}}</h4>
                                                                            <span>{{ items.fund_name }} - {{ items.created_at | formatDate }}</span>
                                                                            <span class="badge rounded-pill bg-warning text-dark">{{ items.status.name }}</span>
                                                                        </div>
                                                                        <div class="row mt-2 justify-content-between bg-light">
                                                                            <div class="col-4">
                                                                                <h6>Total Harga Barang</h6>
                                                                            </div>
                                                                            <div class="col-4">
                                                                                <span>{{ items.total_item_price | currency}}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row mt-2 justify-content-between">
                                                                            <div class="col-4">
                                                                                <h6>Ongkos Kirim</h6>
                                                                            </div>
                                                                            <div class="col-4">
                                                                                <span>{{ items.shipping_cost | currency}}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row mt-4 justify-content-between bg-light">
                                                                            <div class="col-4">
                                                                                <h5>Total Harga</h5>
                                                                            </div>
                                                                            <div class="col-4">
                                                                                <h5>{{ items.total_price | currency}}</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- <div class="modal-footer"> -->
                                                                        <!-- <div class="widget-social-share"> -->
                                                                            <!-- <span class="widget-label">Siplah 2021</span> -->
                                                                            <div class="row justify-content-center mb-4">
                                                                                <div class="col-8 my-2">
                                                                                    <button type="button" class="btn btn-success btn-block" @click="received(items.id)" data-dismiss="modal">Pesanan Diterima</button>
                                                                                </div>
                                                                                <div class="col-8 my-2">
                                                                                    <a :href="'#complainModal-' + items.id" data-toggle="modal" class="btn btn-danger btn-block" data-dismiss="modal">Komplain</a>
                                                                                </div>
                                                                                <div class="col-8 my-2">
                                                                                    <a :href="'#returModal-' + items.id" data-toggle="modal" class="btn btn-secondary btn-block" data-dismiss="modal">Pengembalian</a>
                                                                                </div>
                                                                                 <div class="col-8 my-2">
                                                                                    <button type="button" class="btn btn-light btn-block" @click="cancel(items.id)" data-dismiss="modal">Pembatalan Pesanan</button>
                                                                                </div>
                                                                                <div class="col-8 my-2">
                                                                                    <button type="button" class="btn btn-primary btn-block" @click="bayar(items.id)" data-dismiss="modal">Bayar</button>
                                                                                </div>
                                                                            </div>
                                                                        <!-- </div> -->
                                                                    <!-- </div> -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal fade modal-quick-view" :id="'complainModal-' + items.id" tabindex="-1" role="dialog" aria-labelledby="quickModal" aria-hidden="true">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <button type="button" class="close modal-close-btn ml-auto" data-dismiss="modal"
                                                                        aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                    <div class="product-details-modal">
                                                                        <h4>Form Komplain Barang</h4>
                                                                        <hr/>
                                                                        <div class="row justify-content-center">
                                                                            <div class="col-8">
                                                                                <div class="mb-3">
                                                                                    <label for="exampleFormControlTextarea1" class="form-label">Komplain</label>
                                                                                    <input class="form-control" type="text" aria-label="default input example" v-model="title_complain">
                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <label for="exampleFormControlTextarea1" class="form-label">Pesan</label>
                                                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="complain_msg"></textarea>
                                                                                </div>
                                                                                 <button type="button" class="btn btn-danger btn-block mt-4" @click="sendComplaint(items.id)" data-dismiss="modal">Kirim Komplain</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal fade modal-quick-view" :id="'returModal-' + items.id" tabindex="-1" role="dialog" aria-labelledby="quickModal" aria-hidden="true">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <button type="button" class="close modal-close-btn ml-auto" data-dismiss="modal"
                                                                        aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                    <div class="product-details-modal">
                                                                        <h4>Form Pengembalian Barang</h4>
                                                                        <hr/>
                                                                        <div class="row justify-content-center">
                                                                            <div class="col-8">
                                                                                <div class="mb-3">
                                                                                    <label for="exampleFormControlTextarea1" class="form-label">Pesan</label>
                                                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="retur_msg"></textarea>
                                                                                </div>
                                                                                 <button type="button" class="btn btn-danger btn-block mt-4" @click="retur(items.id)" data-dismiss="modal">Kirim Komplain</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->
                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="account-info" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Account Details</h3>
                                        <address>
                                            <p><strong>{{ profile.name }}</strong></p>
                                            <p>{{ profile.profile.jabatan }} <br>
                                                {{ profile.profile.peran }}</p>
                                            <p>{{ profile.school.nama_sekolah }}</p>
                                        </address>
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->
                            </div>
                        </div>
                        <!-- My Account Tab Content End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2'

export default  {
    name: 'Profile',
    data() {
        return {
            profile: null,
            transaksi_list: null,
            id_payment: "",
            id_trx:"",
            transaksi: "",
            title_complain: "",
            complain_msg: "",
            retur_msg: ""
        }
    },
    created() {
        var token = localStorage.token
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        console.log(JSON.parse(jsonPayload).profile.nama)
        var profile = JSON.parse(jsonPayload)
        this.profile = profile

        axios.get("https://api.siplah.anugrahmal.id/v1/transactions", {headers:
            {Authorization: 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(response => {
                console.log(response)
                this.transaksi_list = response.data.data.data
            })
        },
    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://app.sandbox.midtrans.com/snap/snap.js', 'data-client-key', 'SB-Mid-client-yfj5_nFHwPrFx92r')
        document.head.appendChild(recaptchaScript)
    },
    methods: {
        bayar(id) {
            this.id_trx = id;
            axios.get("https://api.siplah.anugrahmal.id/v1/transactions/"+id,  {headers:
            {
                Authorization: 'Bearer ' + window.localStorage.getItem("token"),
            }})
            .then(response => {
                // console.log(response.data.data.transaction_payment[0].id)
                this.id_payment = response.data.data.transaction_payment[0].id
                axios.post("https://api.siplah.anugrahmal.id/v1/transactions/"+this.id_trx+"/snap-token/"+response.data.data.transaction_payment[0].id, {}, {headers:
                {Authorization: 'Bearer ' + window.localStorage.getItem("token")}})
                .then(response => {
                    console.log(response)
                    // window.location = 'https://app.sandbox.midtrans.com/snap/v2/vtweb/' + response.data.data.token;
                    // this.payment = response.data.data.transaction_payment[0]
                    window.snap.pay(response.data.data.token, {
                    // Optional
                    onSuccess: function(result){
                        /* You may add your own js here, this is just example */ document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
                    },
                    // Optional
                    onPending: function(result){
                        /* You may add your own js here, this is just example */ document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
                    },
                    // Optional
                    onError: function(result){
                        /* You may add your own js here, this is just example */ document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
                    }
                    });
                })
            })
        },
        received(id) {
            var a = id;
            axios.post("https://api.siplah.anugrahmal.id/v1/transactions/"+a+"/set-received" , {},
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(response => {
                console.log(response)
                axios.get("https://api.siplah.anugrahmal.id/v1/transactions", {headers:
                    {Authorization: 'Bearer ' + window.localStorage.getItem("token")}
                    })
                    .then(response => {
                        console.log(response)
                        this.transaksi_list = response.data.data.data
                    })
            })
            Swal.fire(
                'Status Diubah!',
                '',
                'success'
                )
        },
        cancel(id) {
            var a = id;
            axios.post("https://api.siplah.anugrahmal.id/v1/transactions/"+a+"/request-cancel" , {},
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(response => {
                console.log(response)
                axios.get("https://api.siplah.anugrahmal.id/v1/transactions", {headers:
                    {Authorization: 'Bearer ' + window.localStorage.getItem("token")}
                    })
                    .then(response => {
                        console.log(response)
                        this.transaksi_list = response.data.data.data
                    })
            })
            Swal.fire(
                'Pembatalan Diajukan',
                '',
                'success'
                )
        },
        retur(id) {
            var a = id;
            var data = {
                context: this.retur_msg
            };
            axios.post("https://api.siplah.anugrahmal.id/v1/transactions/"+a+"/request-cancel" , data,
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(response => {
                console.log(response)
            })
            Swal.fire(
                'Pembatalan Diajukan',
                '',
                'success'
                )
        },
        sendComplaint(id) {
            var a = id;
            var data = {
                title: this.title_complain,
                context: this.complain_msg
            };
            axios.post("https://api.siplah.anugrahmal.id/v1/transactions/"+a+"/request-complaint" , data,
            {
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(response => {
                console.log(response)
            })
            Swal.fire(
                'Pembatalan Diajukan',
                '',
                'success'
                )
        },
        detail(id) {
            this.id_trx = id;
            axios.get("https://api.siplah.anugrahmal.id/v1/transactions/"+id,  {headers:
            {
                Authorization: 'Bearer ' + window.localStorage.getItem("token"),
            }})
            .then(response => {
                console.log(response)
                this.transaksi = response.data
            })
        },
        
    }
}
</script>
