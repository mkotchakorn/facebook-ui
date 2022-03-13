<template>
  <div class="time-line-story">
    <div class="flex xl:hidden justify-between mb-1">
      <p class="text-[13px] font-semibold">Stories</p>
      <p class="text-xs text-gray-700">Your archive</p>
    </div>
    <div class="relative">
      <div class="time-line-story-list">
        <div class="my-story bg-backdrop">
          <img src="https://fakeimg.pl/111x198" class="w-full shadow rounded-lg" />
          <div class="create-story flex justify-center">
            <div class="plus">+</div>
            <div class="hidden xl:block text-[13px] font-semibold mt-auto pb-2 leading-3">Create story</div>
            <div class="caption xl:hidden font-semibold">
              Add to <br />
              Story
            </div>
          </div>
        </div>
        <div v-for="i in 10" :key="i" class="friend-story bg-backdrop">
          <div class="profile">
            <img src="https://fakeimg.pl/32x32" class="rounded-full border-4 border-primary" />
          </div>
          <img src="https://fakeimg.pl/111x198" class="w-full shadow rounded-lg" />
          <div class="caption font-semibold">Title</div>
        </div>

        <div class="hidden xl:flex w-10 h-10 rounded-full bg-white btn-next">
          <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="w-4 h-4 text-gray-700" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineStory',
}
</script>

<style></style>
