<template>
    <main class="inner-page-sec-padding-bottom mt--50">
        Sedang Login...
    </main>
</template>

<script>

export default {
  name: 'SSO',
  mounted() {
      localStorage.setItem("token", this.$route.params.token)
  },
}
</script>
