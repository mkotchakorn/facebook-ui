<template>
  <div class="profile-post-manage xl:mt-4">
    <div class="card xl:!pb-0">
      <div class="max-xl:!hidden flex items-center justify-between border-b border-line -mt-2 -mx-4 pb-2 px-4">
        <p class="font-bold text-xl leading-3">Posts</p>
        <div class="flex items-center">
          <div class="btn btn-solid-gray">
            <img src="https://fakeimg.pl/16x16" class="rounded-full" />
              <span class="ml-2">Filters</span>
          </div>
          <div class="btn btn-solid-gray ml-2">
            <img src="https://fakeimg.pl/16x16" class="rounded-full" />
              <span class="ml-2">Manage posts</span>
          </div>
        </div>
      </div>
      <div class="max-xl:!hidden grid-view-list">
          <div class="grid-view active">
            <img src="https://fakeimg.pl/16x16" class="rounded-full" />
              <span class="ml-2">List view</span>
          </div>
          <div class="grid-view">
            <img src="https://fakeimg.pl/16x16" class="rounded-full" />
              <span class="ml-2">Grid view</span>
          </div>
      </div>
      <div class="xl:hidden flex items-center">
          <div class="btn btn-solid-gray !rounded-full">
            <img src="https://fakeimg.pl/16x16" class="rounded-full" />
              <span class="ml-2">Photos</span>
          </div>
          <div class="btn btn-solid-gray !rounded-full ml-2">
            <img src="https://fakeimg.pl/16x16" class="rounded-full" />
              <span class="ml-2">Life events</span>
          </div>
          <div class="btn btn-solid-gray !rounded-full ml-2">
            <img src="https://fakeimg.pl/16x16" class="rounded-full" />
              <span class="ml-2">Music</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostManage',
}
</script>

<style></style>
