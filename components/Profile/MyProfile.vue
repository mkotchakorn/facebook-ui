<template>
  <div class="profile-my-profile">
    <div class="profile-my-profile-wrap">
      <div class="menu-profile flex flex-col xl:flex-row xl:pb-4">
        <div class="profile-img">
          <img src="http://fakeimg.pl/168x168" class="img rounded-full" />
          <div class="my-text text-center xl:hidden">
            <p class="font-bold text-2xl mt-1">John Doe</p>
            <p class="text-xs text-gray-700 pt-1 pb-4">Consectetur voluptate reprehenderit.</p>
          </div>
        </div>
        <div class="hidden xl:block ml-4 relative top-9">
          <p class="font-bold text-[32px] mt-3">John Doe</p>
          <p class="font-semibold text-[17px] text-gray-700">2.2K Friends</p>
          <div class="flex items-center justify-center mt-1">
            <img v-for="(i, indexFriend) in 8" :key="indexFriend" src="http://fakeimg.pl/32x32" class="-ml-3 relative rounded-full border-2 border-white" :style="`z-index: -${indexFriend}`" />
          </div>
        </div>
        <div class="action xl:mt-auto xl:ml-auto">
          <div class="hidden xl:flex mb-3">
            <div class="btn btn-story">
              <img src="http://fakeimg.pl/16x16" class="rounded-full" />
              <span class="ml-2">Add to Story</span>
            </div>
          </div>
          <div class="max-xl:w-full xl:mb-3">
            <div class="btn btn-edit-profile">
              <img src="http://fakeimg.pl/16x16" class="rounded-full" />
              <span class="ml-2">Edit Profile</span>
            </div>
          </div>
          <div class="xl:hidden h-9 w-12 bg-gray-400 rounded-md flex items-center justify-center ml-2">
            <img src="http://fakeimg.pl/16x16" class="rounded-full" />
          </div>
        </div>
      </div>

      <div class="menu-tab hidden xl:flex" :class="{ affix: affix }">
        <template v-if="!affix">
          <div v-for="(i, indexMenu) in 5" :key="indexMenu" class="menu" :class="{ active: indexMenu == 0 }">Menu</div>
          <div class="ml-auto h-9 w-12 bg-gray-400 rounded-md flex items-center justify-center hover:bg-gray-500">
            <img src="http://fakeimg.pl/16x16" class="rounded-full" />
          </div>
        </template>
        <div v-else class="menu-tab-profile">
          <div class="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg w-max ml-2 cursor-pointer" @click="backToTop">
            <div class="flex items-center">
              <img src="http://fakeimg.pl/40x40" class="rounded-full mr-3" />
              <p class="text-[17px] font-medium">John Doe</p>
            </div>
          </div>
          <div class="h-9 w-12 bg-gray-400 rounded-md flex items-center justify-center">
            <img src="http://fakeimg.pl/16x16" class="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMyProfile',
  data() {
    return {
      affix: '',
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 500) this.affix = true
      else this.affix = false
    },
    backToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style></style>
