<template>
  <div class="sidebar-community hidden xl:block overflow">
    <nuxt-link to="/profile" class="menu-list profile">
      <img src="http://fakeimg.pl/36x36" class="rounded-full mr-3" />
      <span class="text-[15px] font-medium">John Doe</span>
    </nuxt-link>

    <div v-for="(i, IndexCommunity) in 8" :key="IndexCommunity" class="menu-list" :class="{ '!items-start': IndexCommunity == 1 }">
      <img src="http://fakeimg.pl/36x36" class="rounded-full mr-3" :class="{ 'mt-1': IndexCommunity == 1 }" />
      <div>
        <p class="text-[15px] font-medium">Title</p>
        <div v-if="IndexCommunity == 1" class="text-xs text-primary flex items-center">
          <div class="w-[7px] h-[7px] rounded-full bg-primary mr-1 mt-[1px]"></div>
          4 new
        </div>
      </div>
    </div>

    <template v-if="seeMore">
      <div v-for="(i, IndexCommunityMore) in 17" :key="IndexCommunityMore" class="menu-list">
        <img src="http://fakeimg.pl/36x36" class="rounded-full mr-3" />
        <p class="text-[15px] font-medium">Title</p>
      </div>
    </template>

    <div class="menu-list" @click="getMoreCommunity">
      <img src="http://fakeimg.pl/36x36" class="rounded-full mr-3" />
      <p class="text-[15px] font-medium">{{ seeMore ? 'See less' : 'See more' }}</p>
    </div>

    <div class="border-t border-line mx-2 mt-[10px] shortcuts">
      <div class="flex items-center justify-between pt-4 pb-2">
        <p class="text-[17px] text-gray-700 font-semibold">Your shortcuts</p>
        <p class="edit-shortcuts hidden text-[15px] text-primary">Edit</p>
      </div>

      <div v-for="(i, IndexShortcuts) in 2" :key="IndexShortcuts" class="menu-list -mx-2">
        <img src="http://fakeimg.pl/36x36" class="rounded-full mr-3" />
        <p class="text-[15px] font-medium">Title</p>
      </div>
    </div>

    <Footer class="pt-3 px-2" />
  </div>
</template>

<script>
export default {
  name: 'SidebarLeft',
  data() {
    return {
      seeMore: false,
    }
  },
  methods: {
    getMoreCommunity() {
      this.seeMore = !this.seeMore
    },
  },
}
</script>

<style></style>
