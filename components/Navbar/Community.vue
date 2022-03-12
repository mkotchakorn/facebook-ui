<template>
  <div class="nav-community">
    <template v-for="(community, index) in communities">
      <nuxt-link :key="index" :to="community.path" class="nav-community-link text-center" :class="[community.display, community.name]" :exact="community.path == '/'">
        <font-awesome-icon :icon="community.icon" class="w-5 h-5 xl:w-6 xl:h-6" />
        <span class="tooltip capitalize hidden">{{ community.name }}</span>
        <span v-if="community.notification" class="notification-badge">{{ community.notification }}</span>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NavbarCommunity',
  data() {
    return {
      communities: [
        {
          path: '/',
          icon: 'fa-solid fa-house',
          name: 'home',
          display: 'flex',
        },
        {
          path: '/friend',
          icon: 'fa-solid fa-user-group',
          name: 'friend',
          display: 'flex xl:hidden',
        },
        {
          path: '/watch',
          icon: 'fa-solid fa-tv',
          name: 'watch',
          notification: 1,
          display: 'flex',
        },
        {
          path: '/marketplace',
          icon: 'fa-solid fa-store',
          name: 'marketplace',
          display: 'flex',
        },
        {
          path: '/notifications',
          icon: 'fa-solid fa-bell',
          name: 'notifications',
          display: 'flex xl:hidden',
        },
        {
          path: '/groups',
          icon: 'fa-solid fa-users',
          name: 'groups',
          display: 'hidden xl:flex',
        },
        {
          path: '/gaming',
          icon: 'fa-solid fa-gamepad',
          name: 'gaming',
          display: 'hidden xl:flex',
        },
        {
          path: '/menu',
          icon: 'fa-solid fa-bars',
          name: 'menu',
          display: 'flex xl:hidden',
        },
      ],
    }
  },
}
</script>

<style></style>
