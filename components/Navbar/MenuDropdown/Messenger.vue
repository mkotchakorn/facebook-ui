<template>
  <div class="nav-menu-list-dropdown-wrap nav-menu-list-dropdown-messenger !bg-white">
    <div class="overflow">
      <div class="flex items-end justify-between">
        <p class="px-4 pt-3 pb-1 -mx-4 capitalize text-2xl font-bold">{{ title }}</p>
        <div class="flex items-center pb-2">
          <template v-for="(i, indexIcon) in 4">
            <img :key="indexIcon" src="https://fakeimg.pl/20x20" class="rounded-full mx-3" />
          </template>
        </div>
      </div>
      <div class="card mr-1">
        <div class="search from-control-icon my-2">
          <input type="text" class="form-control h-9 w-full" placeholder="Search Menu" />
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon w-4 h-4" />
        </div>
        <div v-for="(i, indexChat) in 20" :key="indexChat" class="chat-list flex items-center -mx-2 p-2">
          <img src='https://fakeimg.pl/56x56' class="rounded-full mr-3" />
          <div>
            <div class="text-[15px]">John Doe</div>
            <div class="text-[13px] text-gray-700 flex items-center">
              <p class="truncate max-w-[200px]">Pariatur excepteur proident laboris do ipsum voluptate sunt mollit.</p>
              <p class="mx-1">·</p>
              <p>37 m</p>
              </div>
          </div>
          <div class="more hidden">
            <font-awesome-icon icon="fa-solid fa-ellipsis" class="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 text-center leading-3 border-t border-line/80 -mx-1 text-[15px] font-semibold text-primary">
      See all in Messenger
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarMenuDropdownMessenger',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
