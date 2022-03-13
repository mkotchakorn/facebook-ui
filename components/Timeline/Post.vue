<template>
  <div class="time-line-post">
    <div class="post">
      <div v-for="(post, indexPosts) in posts" :key="indexPosts" class="card">
        <div class="card-header">
          <img src="https://fakeimg.pl/38x38" class="rounded-full mr-3" />
          <div class="flex flex-col">
            <p class="text-[15px] font-semibold">{{ post.name }}</p>
            <p class="text-[13px] text-gray-700 leading-3">{{ $moment(post.date).fromNow() }} · <span class="h-3 w-3 bg-gray-500 inline-block rounded-full align-middle"></span></p>
          </div>
        </div>
        <div class="card-body">
          <div class="message">
            {{ post.message }}
          </div>
          <div class="sum flex items-center justify-between">
            <div class="flex items-center">
              <img src="https://fakeimg.pl/18x18" class="rounded-full" />
              <span class="text-[15px] text-gray-700 ml-[6px]">180</span>
            </div>
            <div class="text-[15px] text-gray-700">134 comments 30 shares</div>
          </div>
        </div>
        <div class="card-footer">
          <div v-for="(action, indexPostAction) in postAction" :key="indexPostAction" class="flex items-center justify-center flex-grow xl:p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <img src="https://fakeimg.pl/18x18" class="rounded-full mr-2" />
            <p class="text-[15px] font-semibold text-gray-700">{{ action }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mockup-post">
      <div v-for="(i, indexMockup) in 10" :key="indexMockup" class="card">
        <div class="card-header">
          <img src="https://fakeimg.pl/38x38" class="rounded-full mr-3" />
          <div class="flex flex-col">
            <p class="text-[15px] font-semibold">Name</p>
            <p class="text-[13px] text-gray-700 leading-3">3 h · <span class="h-3 w-3 bg-gray-500 inline-block rounded-full align-middle"></span></p>
          </div>
        </div>
        <div class="card-body">
          <div class="message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam a, ad aperiam qui asperiores, tenetur voluptatibus dolores tempora laboriosam placeat obcaecati, adipisci dolor beatae
            consectetur voluptate itaque sint est.
          </div>
          <div class="sum flex items-center justify-between">
            <div class="flex items-center">
              <img src="https://fakeimg.pl/18x18" class="rounded-full" />
              <span class="text-[15px] text-gray-700 ml-[6px]">180</span>
            </div>
            <div class="text-[15px] text-gray-700">134 comments 30 shares</div>
          </div>
        </div>
        <div class="card-footer">
          <div v-for="(action, indexPostAction) in postAction" :key="indexPostAction" class="flex items-center justify-center flex-grow xl:p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <img src="https://fakeimg.pl/18x18" class="rounded-full mr-2" />
            <p class="text-[15px] font-semibold text-gray-700">{{ action }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelinePost',
  data() {
    return {
      postAction: ['Like', 'Comment', 'Share'],
    }
  },
  computed: {
    posts() {
      const posts = this.$getState('posts')
      return this.$_.orderBy(posts, ['date'], ['desc'])
    },
  },
}
</script>

<style></style>
