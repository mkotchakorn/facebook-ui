<template>
  <div class="nav xl:h-nav">
    <NavbarNavTab />
    <nuxt-link to="/" class="nav-logo">
      <font-awesome-icon icon="fa-brands fa-facebook" class="w-10 h-10 text-primary" />
    </nuxt-link>
    <div class="hidden xl:block">
      <NavbarSearch />
    </div>
    <NavbarCommunity />
    <div class="hidden xl:block">
      <NavbarMenu />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarLayout',
}
</script>

<style></style>
