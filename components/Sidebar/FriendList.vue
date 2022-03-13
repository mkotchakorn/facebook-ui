<template>
  <div class="sidebar-friend-list hidden xl:block overflow">
    <div class="border-b border-line mx-2 pb-2">
      <p class="px-4 py-1 text-[17px] text-gray-700 font-semibold -mx-4">Sponsored</p>
      <div v-for="(i, IndexSponsored) in 2" :key="IndexSponsored" class="menu-list -mx-2">
        <img src="https://fakeimg.pl/131x131" class="rounded-lg mr-3" />
        <div>
          <p class="text-[15px] font-medium">Title</p>
          <p class="text-[13px] text-gray-700">Subtitle</p>
        </div>
      </div>
    </div>
    <div class="pt-5">
      <div class="flex items-center justify-between px-2">
        <p class="text-[17px] text-gray-700 font-semibold leading-3">Contacts</p>
        <div class="flex items-center">
          <template v-for="(i, IndexContact) in 3">
            <img :key="IndexContact" src="https://fakeimg.pl/16x16" class="rounded-full mx-3" />
          </template>
        </div>
      </div>

      <div class="mt-2">
        <div v-for="(i, IndexFriendList) in 50" :key="IndexFriendList" class="menu-list">
          <div class="relative">
            <img src="https://fakeimg.pl/36x36" class="rounded-full" />
            <div class="online absolute right-0 bottom-0 w-[10px] h-[10px] rounded-full border-2 border-gray-100 bg-positive"></div>
          </div>
          <p class="text-[15px] font-medium ml-3">Friend Name</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarFriendList',
}
</script>

<style></style>
