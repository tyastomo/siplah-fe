<template>
    <main class="inner-page-sec-padding-bottom mt--50">
        <div class="faq-area inner-page-sec-padding-bottom">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="inner text-center">
							<h1>Registrasi Penjual</h1>
						</div>
					</div>
				</div>
                <div class="row justify-content-center">
                    <div class="col-6">
                    <h3>Profil Usaha</h3>
                    <div class="mb-3 mt-4">
                        <label for="exampleFormControlInput1" class="form-label">Jenis Usaha</label>
                        <select class="form-select" aria-label="Default select example" v-model="jenis_usaha">
                            <option selected value="">Pilih Salah Satu</option>
                            <option value="0">Individu</option>
                            <option value="1">Badan Hukum</option>
                        </select>  
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nama Toko</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="nama">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Logo</label>
                        <input class="form-control" type="file" id="formFile" ref="logo" v-on:change="handleLogo()">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">No. NPWP</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="no_npwp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Scan NPWP</label>
                        <input class="form-control" type="file" id="formFile" ref="npwp" v-on:change="handleNpwp()">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Status Wajib Pajak </label>
                        <select class="form-select" aria-label="Default select example" v-model="legal_status">
                            <option selected>Open this select menu</option>
                             <option v-for="item in legal" :key="item.id" v-bind:value="item.id">{{ item.name }}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Alamat</label>
                         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="alamat"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Provinsi</label>
                        <select class="form-select" aria-label="Default select example" v-model="provinsi">
                            <option selected>Open this select menu</option>
                            <option v-for="item in provinces" :key="item.id" :value="item.id">{{ item.name }}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Kabupaten / Kota</label>
                        <select class="form-select" aria-label="Default select example" v-model="kota">
                            <option selected>Open this select menu</option>
                            <option v-for="item in cities" :key="item.id" :value="item.id">{{ item.name }}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Kecamatan</label>
                        <select class="form-select" aria-label="Default select example" v-model="jenis_usaha">
                            <option selected>Open this select menu</option>
                            <option v-for="item in districts" :key="item.id" :value="item.id">{{ item.name }}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Kelurahan</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="desa">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Kode POS</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="kodepos">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Koordinat (Lat, Lang)</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="koordinat">
                    </div>

                    <div class="mb-4">
                    <hr/>
                    </div>
                    <h3>Penganggungjawab / Penandatangan</h3>
                    <div class="mb-3 mt-4">
                        <label for="exampleFormControlInput1" class="form-label">Nama Penanggungjawab</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="penanggungjawab">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Jabatan Penanggungjawab</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="jabatan">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Telepon</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="telepon">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">NIK</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="nik">
                    </div>
                     <div class="mb-4">
                    <hr/>
                    </div>
                    <h3>Rekening Bank</h3>
                    <div class="mb-3  mt-4">
                        <label for="exampleFormControlInput1" class="form-label">Nama Bank</label>
                        <select class="form-select" aria-label="Default select example" v-model="nama_bank">
                            <option selected>Open this select menu</option>
                             <option v-for="item in bank_list" :key="item.id" v-bind:value="item.id">{{ item.name }}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Pemilik Rekening</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="pemilik_rek">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nomor Rekening</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="no_rek">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Scan Buku Tabungan</label>
                        <input class="form-control" type="file" id="formFile" ref="buku" v-on:change="handleBuku()">
                    </div>

                    <div class="mb-4">
                    <hr/>
                    </div>
                    <h3>Setting Password</h3>
                    <div class="mb-3 mt-4">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" v-model="password">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Ulangi Password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" v-model="repeat_password">
                    </div>

                    <div class="mb-4">
                        <hr/>
                    </div>
                    <h3>Unggah Dokumen</h3>
                    <div class="mb-3 mt-4">
                        <label for="exampleFormControlInput1" class="form-label">Pilih Jenis Dokumen</label>
                        <select class="form-select" aria-label="Default select example" v-model="jenis_dokumen">
                            <option selected>Open this select menu</option>
                            <option selected value="">Pilih Salah Satu</option>
                            <option value="0">NIB</option>
                            <option value="1">SIUP</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Unggah Dokumen</label>
                        <input class="form-control" type="file" id="formFile" ref="dokumen" v-on:change="handleDokumen()">
                    </div>
                    <div class="mb-3">
                        <hr/>
                    </div>
                    <div class="mb-3">
                        <button type="button" class="btn btn-primary btn-block" @click="sendData()">Simpan</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from "axios";
export default {
    name: 'Register',
    data() {
        return {
            bank_list: "",
            legal: "",
            provinces: "",
            cities: "",
            provinsi: "",
            kota: "",
            districts: "",
            nama: "",
            jenis_usaha: "",
            logo: "",
            no_npwp: "",
            npwp: "",
            alamat: "",
            desa: "",
            kode_pos: "",
            koordinat: "",
            nama_bank: "",
            pemilik_rek: "",
            no_rek: "",
            buku: "",
            jenis_dokumen: "",
            dokumen: "",
            password: "",
            repeat_password: "",
            telepon: "",
            email: "",
            umkm: "",
            nik: "",
            penanggungjawab: "",
            jabatan: "",
            kodepos: ""
        }
    },
    computed: {
        prov() {
            return this.provinsi
        },
        city() {
            return this.kota
        }
    },
    watch: {
        prov(val) {
            if (val) {
                axios.get("https://api.siplah.anugrahmal.id/v1/regions/provinces/"+val+"?with=cities")
                    .then(response => {
                        // console.log(response.data)
                        this.cities = response.data.data.cities
                    }
                );
            }
        },
        city(val) {
            if (val) {
                console.log(val)
                axios.get("https://api.siplah.anugrahmal.id/v1/regions/cities/"+val+"?with=districts")
                    .then(response => {
                        // console.log(response.data)
                        this.districts = response.data.data.districts
                    }
                );
            }
        }
    },
    beforeCreate() {
        axios.get("https://api.siplah.anugrahmal.id/v1/banks")
            .then(response => {
                // console.log(response.data)
                this.bank_list = response.data.data
            }
        );
        axios.get("https://api.siplah.anugrahmal.id/v1/legal-statuses")
            .then(response => {
                // console.log(response.data)
                this.legal = response.data.data
            }
        );
        axios.get("https://api.siplah.anugrahmal.id/v1/regions/provinces?")
            .then(response => {
                // console.log(response.data)
                this.provinces = response.data.data
            }
        );
    },
    methods: {
        handleLogo(){
            this.logo = this.$refs.logo.files[0];
        },
        handleNpwp(){
            this.npwp = this.$refs.npwp.files[0];
        },
        handleBuku(){
            this.buku = this.$refs.buku.files[0];
        },
        handleDokumen(){
            this.dokumen = this.$refs.dokumen.files[0];
        },
        sendData() {
            let formData = new FormData();
            formData.append('merchant_name', this.nama);
            formData.append('logo', this.logo);
            formData.append('npwp', this.no_npwp);
            formData.append('npwp_file', this.npwp);
            formData.append('address', this.alamat);
            formData.append('zip_kode', this.kodepos);
            formData.append('coordinate', this.koordinat);
            formData.append('phone', this.telepon);
            formData.append('email', this.email);
            formData.append('bank_acccount_code', this.nama_bank);
            formData.append('bank_account_name', this.pemilik_rek);
            formData.append('bank_account_number', this.no_rek);
            formData.append('bank_account_book', this.buku);
            formData.append('umkm', this.umkm,);
            formData.append('legal_status_id', this.legal);
            formData.append('corporate', this.jenis_usaha);
            formData.append('nib', this.dokumen);
            formData.append('nik', this.nik);
            formData.append('siup', this.dokumen);
            formData.append('responsible_name', this.penanggungjawab);
            formData.append('responsible_position', this.jabatan);
            formData.append('district_id', this.kota);
            formData.append('village', this.desa);
            formData.append('password', this.password);
            formData.append('password_confirmation', this.repeat_password);
            // )
            console.log(formData)
            axios.post("https://api.siplah.anugrahmal.id/v1/merchants", formData, {headers:
                {Authorization: 'Bearer ' + window.localStorage.getItem("token")}})
                .then(response => {
                    console.log(response)
                });
        }
    }
}
</script>