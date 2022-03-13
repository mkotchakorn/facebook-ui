<template>
  <div class="profile-event xl:mt-4">
    <div class="card">
      <div class="flex items-center justify-between mt-1 mb-5">
        <p class="font-bold text-xl leading-3">Life events</p>
        <p class="text-[15px] xl:text-[17px] text-primary leading-3">
          See all
        </p>
      </div>
      <div class="event-list">
          <div class="w-[166px] h-[249px] border border-line rounded-lg flex flex-col items-center justify-center p-4">
              <img src='http://fakeimg.pl/48x48' class="rounded-full" />
              <div class="m-2 text-center">
                  <p class="text-[15px] font-semibold leading-snug truncate truncate-3">Culpa consectetur irure tempor pariatur ut.</p>
                  <p class="text-[13px] text-gray-700">2020</p>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileEvent',
}
</script>

<style>
</style>