<template>
  <div class="flex">
    <div class="hidden xl:block flex-grow min-w-[280px] max-w-[360px]">
      <SidebarCommunity />
    </div>
    <div class="flex flex-col xl:block flex-grow max-w-[590px] mx-auto">
      <TimelineStory />
      <TimelineNewPost />
      <TimelineVideoRoom />
      <TimelinePost />
    </div>
    <div class="hidden xl:block flex-grow min-w-[280px] max-w-[360px]">
      <SidebarFriendList />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
