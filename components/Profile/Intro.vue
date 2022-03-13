<template>
  <div class="profile-intro">
    <div class="card max-xl:!pb-0">
      <p class="font-bold text-xl leading-3 max-xl:hidden">Intro</p>
      <div class="bio max-xl:hidden pt-4">
        <p class="text-[15px] text-gray-700 text-center">Consectetur voluptate reprehenderit.</p>
        <div class="btn btn-edit-profile mt-3">Edit Bio</div>
      </div>
      <div class="bio-list max-xl:-mt-1">
          <div v-for="(i, indexData) in 3" :key="indexData" class="my-2 xl:my-4 flex items-center">
              <img src='http://fakeimg.pl/16x16' class="rounded-full" />
              <p class="text-[15px] ml-3">Est occaecat commodo qui magna sn.</p>
          </div>
          <div class="btn btn-edit-public xl:!hidden">Edit Public Detail</div>
      </div>
      <div class="btn-addon max-xl:hidden">
          <div class="btn btn-edit mt-5">Edit details</div>
          <div class="btn btn-edit mt-5">Add Hobbies</div>
          <div class="btn btn-edit mt-5">Add Featured</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileIntro',
}
</script>

<style>
</style>