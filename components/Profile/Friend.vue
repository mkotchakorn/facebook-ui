<template>
  <div class="profile-friend xl:mt-4">
    <div class="card max-xl:!pb-0 xl:!pb-2">
      <div class="flex items-center justify-between">
        <p class="font-bold text-xl leading-3">Friends</p>
        <p class="text-[15px] xl:text-[17px] text-primary leading-3">
          <span class="max-xl:hidden">See All Friends</span>
          <span class="xl:hidden">Find Friends</span>
        </p>
      </div>
      <p class="text-[17px] text-gray-700 py-1">x,xxx friends</p>

      <div class="max-xl:!hidden friend-list">
        <div v-for="(j, indexFriend) in 9" :key="indexFriend" class="friend-list-profile">
          <img src="https://fakeimg.pl/480x480" class="rounded-lg border border-line" />
          <p class="text-[13px] font-semibold pt-1">Friend Name</p>
        </div>
      </div>

      <div class="xl:!hidden friend-list">
        <div v-for="(i, index) in 6" :key="index" class="friend-list-profile">
          <img src="https://fakeimg.pl/480x480" class="rounded-lg border border-line" />
          <p class="text-[13px] font-semibold pt-1">Friend Name</p>
        </div>
        <div class="btn btn-all mt-3 xl:!hidden">See All Friends</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileFriend',
}
</script>

<style></style>
