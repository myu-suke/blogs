<template>
  <section class="text-gray-600 body-font">
    {{ posts }}
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          タグ一覧
        </h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <template v-for="t in tags">
          <div :key="t" class="lg:w-1/3 sm:w-1/2 p-4">
            <router-link :to="'/tags/' + t">
              <div class="flex flex-row flex-wrap mt-0">
                <div
                  :key="tag"
                  class="mt-2 flex items-center text-sm text-gray-500 mr-3"
                >
                  <span
                    class="text-sm font-medium bg-green-100 py-1 px-2 rounded text-green-500 align-middle"
                    >{{ tag }}</span
                  >
                </div>
              </div>
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const query = await $content('posts' || 'index').limit(15)
    const posts = await query.fetch()
    const tagsArray = posts.flatmap((n) => n.tags)
    const tags = [...new Set(tagsArray)]
    return { posts, tags }
  },
}
</script>
