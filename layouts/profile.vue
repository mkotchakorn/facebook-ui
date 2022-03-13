<template>
  <div class="min-h-screen bg-gray-500 xl:bg-gray-100">
      <Navbar class="hidden xl:flex" />
      <Header class="xl:hidden" />
    <div class="xxl:max-w-xxl mx-auto">
        <Nuxt />
    </div>
    <ButtonNewMessage />
  </div>
</template>

<script>
export default {
  name: 'ProfileLayout',
}
</script>

<style>
</style>