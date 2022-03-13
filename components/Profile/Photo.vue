<template>
  <div class="profile-photo xl:mt-4">
    <div class="card">
      <div class="flex items-center justify-between mt-1 mb-5">
        <p class="font-bold text-xl leading-3">Photos</p>
        <p class="text-[15px] xl:text-[17px] text-primary leading-3">
          See All Photos
        </p>
      </div>
      <div class="photo-list">
        <div v-for="i in 9" :key="i" class="photo-list-profile">
          <img src="https://fakeimg.pl/480x480" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePhoto',
}
</script>

<style>
</style>