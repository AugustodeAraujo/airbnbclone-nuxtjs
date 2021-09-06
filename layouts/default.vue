<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <input type="text" ref="citySearch" />
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$maps.makeAutoComplete(this.$refs.citySearch)
  }
}
</script>

<style lang="scss" scoped></style>
