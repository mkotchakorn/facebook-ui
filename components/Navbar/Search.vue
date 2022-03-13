<template>
  <div class="nav-search">
    <div class="nav-search-index from-control-icon w-[280px]" @click="searchPanel">
      <input type="text" class="form-control h-10 w-full pt-2 pb-3" placeholder="Search Facebook" />
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon w-4 h-4" />
    </div>
    <div v-if="search" v-click-outside="hideSearchPanel" class="nav-search-panel">
      <div class="flex items-center">
        <div @click="searchPanel">
          <font-awesome-icon icon="fa-solid fa-arrow-left-long" class="w-4 h-4 ml-1 mr-4 text-gray-700" />
        </div>
        <input type="text" class="form-control h-10 w-full pt-2 pb-3" placeholder="Search Facebook" autofocus />
      </div>
      <p class="text-[15px] text-center text-gray-600 py-4">No recent searches</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarSearch',
  data() {
    return {
      search: false,
    }
  },
  methods: {
    searchPanel() {
      this.search = !this.search
    },
    hideSearchPanel() {
      this.search = false
    },
  },
}
</script>

<style></style>
