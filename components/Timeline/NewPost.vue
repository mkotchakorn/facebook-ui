<template>
  <div class="time-line-new-post">
    <div class="card">
      <div class="card-body">
        <img src="http://fakeimg.pl/40x40" class="rounded-full mr-2 xl:mr-3" />
        <input type="text" class="form-control !bg-transparent xl:!bg-gray-100 xl:hover:!bg-gray-400" placeholder="What's on your mind?" @click="toggleNewPost" />
        <div class="flex flex-col ml-2 xl:hidden">
          <img src="http://fakeimg.pl/20x20" class="rounded-full mx-auto" />
          <span class="text-[10px] text-gray-700">Photo</span>
        </div>
      </div>
      <div class="card-footer hidden xl:block">
        <div class="flex items-center">
          <div v-for="(i, index) in 3" :key="index" class="flex items-center justify-center flex-grow p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <img src="http://fakeimg.pl/24x24" class="rounded-full mr-2" />
            <p class="text-[15px] font-semibold text-gray-700">Menu</p>
          </div>
        </div>
      </div>
    </div>
    <TimelineCreatePost v-if="createPost" @cancelPost="toggleNewPost" @createNewPost="createNewPost" />
  </div>
</template>

<script>
export default {
  name: 'TimelineNewPost',
  data() {
    return {
      createPost: false,
    }
  },
  watch: {
    createPost(newV, oldVal) {
      if (newV && newV !== oldVal) document.querySelector('body').classList.add('overflow-hidden')
      else document.querySelector('body').classList.remove('overflow-hidden')
    },
  },
  methods: {
    toggleNewPost() {
      this.createPost = !this.createPost
    },
    createNewPost() {
      this.createPost = false
    },
  },
}
</script>

<style>
</style>