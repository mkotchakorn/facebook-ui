<template>
  <div class="nav-mobile-tab flex xl:hidden">
      <nuxt-link to="/profile" class="mr-4">
         <font-awesome-icon icon="fa-solid fa-user" class="text-white w-4 h-4" />
      </nuxt-link>
        <div class="w-full h-8 mx-1">
            <div class="h-[25px] border-b border-blue-200 text-center">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-blue-200 w-[14px] h-[14px]" />
                <span class="text-blue-200 text-sm pl-2">Search</span>
            </div>
        </div>
      <div class="ml-4">
          <font-awesome-icon icon="fa-brands fa-facebook-messenger" class="text-white w-4 h-4" />
      </div>
    </div>
</template>

<script>
export default {
    name: 'NavMobileTab'
}
</script>

<style>

</style>