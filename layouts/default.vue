<template>
  <div class="min-h-screen bg-gray-500 xl:bg-gray-100">
    <Navbar />
    <div class="xxl:max-w-xxl mx-auto">
        <Nuxt />
    </div>
    <ButtonNewMessage />
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>

<style>
</style>