<template>
  <div class="nav-menu-list-dropdown-wrap nav-menu-list-dropdown-notifications !bg-white">
    <div class="overflow">
      <div class="flex items-end justify-between pb-2">
        <p class="px-4 pt-3 -mx-4 capitalize text-2xl font-bold">{{ title }}</p>
        <img :key="indexIcon" src="https://fakeimg.pl/20x20" class="rounded-full mb-1 mr-4" />
      </div>
      <div class="flex items-center">
        <div class="rounded-full bg-blue-100 text-[15px] font-semibold h-9 px-3 flex items-center justify-center">All</div>
        <div class="rounded-full bg-gray-400 text-[15px] font-semibold h-9 px-3 flex items-center justify-center ml-2">Unread</div>
      </div>
      <div class="card mr-1">
        <div class="flex items-center justify-between pt-2 -mx-2 px-2">
          <p class="text-[17px] font-semibold">New</p>
          <p class="text-[15px] text-primary pr-2">View all</p>
        </div>

        <div v-for="(i, indexNotification) in 20" :key="indexNotification" class="notification-list flex items-center -mx-2 p-2 relative">
          <div class="relative">
            <img src="https://fakeimg.pl/56x56" class="rounded-full mr-3" />
            <div class="absolute right-2 -bottom-1 bg-gray-500 w-7 h-7 rounded-full"></div>
          </div>
          <div class="-mt-1">
            <div class="text-[15px]">
              <span class="font-semibold">John Doe</span> posted in
              <span class="font-semibold">John Group</span>
            </div>
            <p class="text-primary font-semibold text-[13px] -mt-1">4 hours ago</p>
          </div>
          <div class="more hidden">
            <font-awesome-icon icon="fa-solid fa-ellipsis" class="w-5 h-5" />
          </div>
          <div class="h-3 w-3 absolute top-1/2 -translate-y-1/2 right-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarMenuDropdownNotification',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
