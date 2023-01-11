<template>
  <div class="time-line-video-room">
    <div class="card flex items-center flex-nowrap">
        <div class="rounded-full border border-blue-100 h-10 flex items-center justify-center max-w-[148px] hover:bg-gray-200 px-3 cursor-pointer">
            <img src='https://fakeimg.pl/24x24' class="rounded-full mr-2" />
            <p class="text-[14px] text-primary font-semibold">Create Room</p>
        </div>
        <div class="profile flex items-center flex-1">
            <img v-for="i in 10" :key="i" src='https://fakeimg.pl/40x40' class="rounded-full ml-4" />
        </div>
    </div>
    <div class="btn-next">
        <font-awesome-icon icon="fa-solid fa-chevron-right" class="w-5 h-5 text-gray-700" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineVideoRoom',
}
</script>

<style></style>
