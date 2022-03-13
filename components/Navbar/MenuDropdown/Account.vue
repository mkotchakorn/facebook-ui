<template>
  <div class="nav-menu-list-dropdown-wrap nav-menu-list-dropdown-account !bg-white !p-2">
    <div class="border-b-2 border-line mx-2 mb-2 pb-2">
      <nuxt-link to="/profile">
        <div class="profile -mx-2 p-2 rounded-lg hover:bg-gray-200 flex items-center">
          <img src="https://fakeimg.pl/60x60" class="rounded-full" />
          <div class="ml-3">
            <p class="text-[17px] font-semibold">John Doe</p>
            <p class="text-gray-700 text-[15px]">See your profile</p>
          </div>
        </div>
      </nuxt-link>
    </div>

    <div class="border-b border-line mx-2 mb-2 pb-2">
      <div class="menu -mx-2 p-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer">
        <img src="https://fakeimg.pl/36x36" class="rounded-full" />
        <div class="ml-3">
          <p class="text-[15px] font-semibold">Title</p>
          <p class="text-gray-700 text-[13px] leading-3">Exercitation sunt deserunt.</p>
        </div>
      </div>
    </div>

    <div class="menu p-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer">
      <img src="https://fakeimg.pl/36x36" class="rounded-full" />
      <p class="text-[15px] font-semibold ml-3">Title</p>
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="w-6 h-6 ml-auto text-gray-700" />
    </div>

    <div class="menu p-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer">
      <img src="https://fakeimg.pl/36x36" class="rounded-full" />
      <p class="text-[15px] font-semibold ml-3">Title</p>
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="w-6 h-6 ml-auto text-gray-700" />
    </div>

    <div class="menu p-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer">
      <img src="https://fakeimg.pl/36x36" class="rounded-full" />
      <p class="text-[15px] font-semibold ml-3">Title</p>
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="w-6 h-6 ml-auto text-gray-700" />
    </div>

    <div class="menu p-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer">
      <img src="https://fakeimg.pl/36x36" class="rounded-full" />
      <p class="text-[15px] font-semibold ml-3">Title</p>
    </div>

    <Footer class="pt-1 pb-1 px-2" />
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
