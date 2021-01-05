<template>
  <article class="container px-5 py-24 mx-auto">
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="flex-1 min-w-0">
        <h1
          class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
        >
          {{ posts.title }}
        </h1>
        <div class="flex flex-row flex-wrap mt-0">
          <div class="mt-2 flex items-center text-sm text-gray-500 mr-5">
            <svg
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {{ posts.date }}
          </div>
          <div class="mt-2 flex items-center text-sm text-gray-500 mr-1">
            Tags:
          </div>
          <template v-for="tag in posts.tags">
            <router-link :key="tag" :to="'/tags/' + tag">
              <div class="mt-2 flex items-center text-sm text-gray-500 mr-3">
                <span
                  class="text-sm font-medium bg-green-100 py-1 px-2 rounded text-green-500 align-middle"
                  >{{ tag }}</span
                >
              </div>
            </router-link>
          </template>
        </div>
      </div>
    </div>
    <nuxt-content class="pt-3" :document="posts" />
  </article>
</template>

<script lang="js">
export default {
  async asyncData({ $content, params }) {
    const content = $content;
    const posts = await $content('posts', params.slug || 'index').fetch()
    return { posts ,params,content}
  },
  head () {
    return {
      title: this.posts.title + " | あることないこと",
      meta: [
        { hid: 'description', name: 'description', content: this.posts.description },
        { hid: 'title', name: 'title', content: this.posts.title }
      ]
    }
  }
}
</script>
