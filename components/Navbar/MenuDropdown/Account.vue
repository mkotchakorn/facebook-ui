<template>
  <div class="nav-menu-list-dropdown-wrap nav-menu-list-dropdown-account !bg-white !p-2">
    <div class="border-b-2 border-line mx-2 mb-2 pb-2">
      <nuxt-link to="/profile">
        <div class="profile -mx-2 p-2 rounded-lg hover:bg-gray-200 flex items-center">
          <img src="http://fakeimg.pl/60x60" class="rounded-full" />
          <div class="ml-3">
            <p class="text-[17px] font-semibold">John Doe</p>
            <p class="text-gray-700 text-[15px]">See your profile</p>
          </div>
        </div>
      </nuxt-link>
    </div>

    <div class="border-b border-line mx-2 mb-2 pb-2">
      <div class="menu -mx-2 p-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer">
        <img src="http://fakeimg.pl/36x36" class="rounded-full" />
        <div class="ml-3">
          <p class="text-[15px] font-semibold">Title</p>
          <p class="text-gray-700 text-[13px] leading-3">Exercitation sunt deserunt.</p>
        </div>
      </div>
    </div>

    <div class="menu p-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer">
      <img src="http://fakeimg.pl/36x36" class="rounded-full" />
      <p class="text-[15px] font-semibold ml-3">Title</p>
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="w-6 h-6 ml-auto text-gray-700" />
    </div>

    <div class="menu p-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer">
      <img src="http://fakeimg.pl/36x36" class="rounded-full" />
      <p class="text-[15px] font-semibold ml-3">Title</p>
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="w-6 h-6 ml-auto text-gray-700" />
    </div>

    <div class="menu p-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer">
      <img src="http://fakeimg.pl/36x36" class="rounded-full" />
      <p class="text-[15px] font-semibold ml-3">Title</p>
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="w-6 h-6 ml-auto text-gray-700" />
    </div>

    <div class="menu p-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer">
      <img src="http://fakeimg.pl/36x36" class="rounded-full" />
      <p class="text-[15px] font-semibold ml-3">Title</p>
    </div>

    <div class="pt-1 pb-1 px-2 text-gray-700 text-[13px] leading-snug">
      <span>Privacy</span>
      <span>· Terms</span>
      <span>· Advertising</span>
      <span>· Ad choices<span class="h-3 w-3 bg-gray-500 inline-block rounded-full align-middle"></span></span>
      <span>· Cookies</span>
      <span>· More</span>
      <span>· Meta © 2022</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarMenuDropdownAccount',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
