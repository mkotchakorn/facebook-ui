<template>
  <div class="time-line-create-post">
    <div v-click-outside="back" class="modal">
      <div class="modal-header">
        <div class="text">Create post</div>
        <div class="close" @click="back">
          <font-awesome-icon icon="fa-solid fa-xmark" class="hidden xl:block w-5 h-5 text-gray-700" />
          <font-awesome-icon icon="fa-solid fa-arrow-left-long" class="xl:hidden w-4 h-4 text-gray-700" />
        </div>
        <div class="post xl:hidden" @click="newPost">Post</div>
      </div>
      <div class="modal-body">
        <div class="profile">
          <div class="mr-2 xl:mr-3"><img src="http://fakeimg.pl/40x40" class="rounded-full" /></div>
          <div>
            <p class="text-[15px] font-semibold xl:leading-3">John</p>
            <div class="xl:rounded-lg xl:bg-gray-400 text-[13px] text-gray-700 xl:text-dark xl:h-6 xl:px-[6px] leading-3 flex items-center xl:mt-1">Share with</div>
          </div>
        </div>
        <div class="input px-2 xl:px-0">
          <textarea id="input-post" name="input" class="form-control !rounded-none !bg-transparent !px-0" placeholder="What's on your mind?" />
        </div>
        <div class="opt-1 flex xl:justify-between items-center mt-2 xl:my-5 border-b border-line xl:border-0 pb-2 xl:pb-0">
          <img src="http://fakeimg.pl/32x32" class="hidden xl:block rounded-lg" />
          <img src="http://fakeimg.pl/28x28" class="hidden xl:block rounded-full" />
          <img v-for="(i, indexTheme) in 8" :key="indexTheme" src="http://fakeimg.pl/32x32" class="xl:hidden ml-3 rounded-lg overflow-y-auto" />
        </div>
        <div class="opt-2 hidden xl:flex items-center rounded-lg border border-line px-4 py-2">
          <p class="text-[15px] font-semibold">Add to your post</p>
          <div class="flex items-center justify-center ml-auto -mr-1">
            <div v-for="(i, indexTool) in 6" :key="indexTool" class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-200">
              <img src="http://fakeimg.pl/24x24" class="rounded-full" />
            </div>
          </div>
        </div>
        <div class="opt-3 xl:hidden">
          <div v-for="(i, indexToolList) in 4" :key="indexToolList" class="border-b border-line px-3 py-2 flex items-center">
            <img src="http://fakeimg.pl/20x20" class="rounded-full" />
            <p class="text-sm text-gray-700 ml-3">Title</p>
          </div>
        </div>
        <div class="m-3 xl:my-4 xl:mx-0">
          <button class="btn-post" @click="newPost">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineCreatePost',
  props: {
    createNewPost: {
      type: Function,
      default: () => {},
    },
    cancelPost: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    back() {
      this.$emit('cancelPost')
    },
    newPost() {
      this.$emit('createNewPost')
    },
  },
}
</script>

<style></style>
