<template>
    <main class="inner-page-sec-padding-bottom mt--50">
        <div class="container">
            <div class="d-flex justify-content-center">
                <div class="col-12 col-lg-6">
                    <h1 class="animate__animated animate__fadeInLeft">Selamat Datang.</h1>
                    <h5 class="animate__animated animate__fadeInLeft animate__delay-1s">Silahkan Pilih Tipe Akun Anda.</h5>
                </div>
                <div class="col-12 col-lg-6" id="buttons" v-if="!forms">
                    <a href="https://dev-sso.datadik.kemdikbud.go.id/app/9b775205-4e4d-4b77-9289-b2415835a73e" class="btn btn-block btn-outlined--primary mb-3 animate__animated animate__rubberBand">Masuk Sebagai Pembeli</a><br/>
                    <a href="https://admin.siplah.anugrahmal.id/#/login?redirect=%2Fdashboard" target="_blank" class="btn btn-block btn-outlined--primary mb-3 animate__animated animate__rubberBand">Masuk Sebagai Penjual</a><br/>
                    <a href="https://admin.siplah.anugrahmal.id/#/login?redirect=%2Fdashboard" target="_blank" class="btn btn-block btn-outlined--primary mb-3 animate__animated animate__rubberBand">Masuk Sebagai Pengawas</a><br/>
                    <a href="https://admin.siplah.anugrahmal.id/#/login?redirect=%2Fdashboard" target="_blank" class="btn btn-block btn-outlined--primary mb-3 animate__animated animate__rubberBand">Masuk Sebagai Mitra</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

export default {
  name: 'Login',
}
</script>
