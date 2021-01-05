<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          タグ一覧
        </h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <template v-for="tag in tags">
          <div :key="tag" class="p-4">
            <router-link :to="'/tags/' + tag">
              <div class="flex flex-row flex-wrap mt-0">
                <div class="mt-2 flex items-center text-sm text-gray-500 mr-3">
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
    const query = await $content('posts' || 'index')
    const posts = await query.fetch()
    const tagsArray = posts.flatMap((n) => n.tags)
    const tags = [...new Set(tagsArray)]
    tags.sort()
    return { posts, tags }
  },
  head() {
    return {
      title: 'タグ一覧 | あることないこと',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '技術メモや思ったことを記憶しておくブログ',
        },
        { hid: 'title', name: 'title', content: 'あることないこと' },
      ],
    }
  },
}
</script>
