<template>
    <main class="compare_area inner-page-sec-padding-bottom mt--50">
        <div class="container">
            <div class="row">
                <div class="col-12" v-for="band in bandingkan" :key="band.id">
                    <!-- <form action="#"> -->
                        <div class="d-flex justify-content-between my-4">
                            <h3 class="">
                                Perbandingan {{ band.category.name }}
                            </h3>
                            <a class="btn btn-danger" @click="hapus(band.id)">Hapus</a>
                        </div>
                        <!-- Compare Table -->
                        <div class="compare-table table-responsive">
                            <table class="table mb-0">
                                <tbody>
                                    <tr>
                                        <td class="first-column">Product</td>
                                        <td class="pro-addtocart justify-content-center" v-for="item in band.comparison_items" :key="item.id">
                                            <!-- <a href="#" class="image"><img src="image/products/product-1.jpg"
                                                    alt="Compare Product"></a> -->
                                            <a href="#" class="category">{{ item.item.merchant.merchant_name }}</a>
                                            <h5 class="title my-4">{{ item.item.name }}</h5>
                                            <a class="add-to-cart" tabindex="0" @click="submit(item.item_id)"><i
                                                    class="fas fa-shopping-cart"></i><span>ADD TO CART</span></a>
                                        </td>
                                    </tr>
                                    <!-- <tr>
                                        <td class="first-column">Delete</td>
                                        <td class="pro-remove"><button><i class="fas fa-trash"></i></button></td>
                                        <td class="pro-remove"><button><i class="fas fa-trash"></i></button></td>
                                        <td class="pro-remove"><button><i class="fas fa-trash"></i></button></td>
                                    </tr> -->
                                </tbody>
                            </table>
                        </div>
                    <!-- </form> -->
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'Compare',
    beforeCreate() {
        axios.get("https://api.siplah.anugrahmal.id/v1/comparisons", {headers:
          {Authorization: 'Bearer ' + window.localStorage.getItem("token")}})
        .then(response => {
            console.log(response.data)
            this.bandingkan = response.data.data.data
        })
    },
    data() {
        return {
            bandingkan: ""
        }
    },
    methods: {
        submit(id) {
            var data = {
                item_id: id,
                // quantity: this.quantity
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
        },
        hapus(id) {
            axios.post("https://api.siplah.anugrahmal.id/v1/"+id+"/set-not-active", {}, {headers:
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
