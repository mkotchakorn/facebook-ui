<template>
  <div class="nav-menu">
    <nuxt-link to="/profile" class="nav-menu-profile">
      <div class="profile mr-6px">
        <img src="http://fakeimg.pl/28x28" alt="profile" class="rounded-full" />
      </div>
      <span class="text-[15px]">John</span>
    </nuxt-link>

    <div v-click-outside="hideMenu" class="nav-menu-list">
      <button
        v-for="(menu, index) in menus"
        :key="index"
        class="nav-menu-list-item"
        :class="{ active: activeMenu == menu.case }"
        @click="expandMenu(menu.case)"
      >
        <font-awesome-icon :icon="menu.icon" />
        <span class="tooltip capitalize hidden">{{ menu.case }}</span>
        <span v-if="menu.notification" class="notification-badge">{{
          menu.notification
        }}</span>
      </button>

      <div class="nav-menu-list-dropdown">
        <NavbarMenuDropdownDMenu v-if="activeMenu == 'menu'" title="menu" />     
        <NavbarMenuDropdownMessenger v-if="activeMenu == 'messenger'" title="messenger" />
        <NavbarMenuDropdownNotifications v-if="activeMenu == 'notifications'" title="notifications" />
        <NavbarMenuDropdownAccount v-if="activeMenu == 'account'" title="John Doe" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarAccount',
  data() {
    return {
      menus: [
        {
          case: 'menu',
          icon: 'fa-solid fa-bars',
        },
        {
          case: 'messenger',
          icon: 'fa-brands fa-facebook-messenger',
          notification: 2,
        },
        {
          case: 'notifications',
          icon: 'fa-solid fa-bell',
        },
        {
          case: 'account',
          icon: 'fa-solid fa-sort-down',
        },
      ],
      activeMenu: '',
    }
  },
  methods: {
    expandMenu(key) {
      if (this.activeMenu === key) this.activeMenu = ''
      else this.activeMenu = key
    },
    hideMenu() {
      this.activeMenu = ''
    }
  },
}
</script>

<style></style>
