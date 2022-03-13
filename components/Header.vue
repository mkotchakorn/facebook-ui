<template>
  <div class="header h-11 bg-blue-700 relative flex items-center justify-center">
    <div class="back absolute top-1/2 -translate-y-1/2 left-4" @click="back">
      <font-awesome-icon icon="fa-solid fa-arrow-left-long" class="xl:hidden w-4 h-4 text-white" />
    </div>
    <span class="text-white">John Doe</span>
  </div>
</template>

<script>
export default {
  name: 'HeaderTap',
  methods: {
    back() {
      this.$router.back()
    },
  },
}
</script>

<style>
</style>