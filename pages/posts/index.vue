<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          記事一覧
        </h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <template v-for="n in posts">
          <div :key="n.slug" class="lg:w-1/3 sm:w-1/2 p-4">
            <router-link :to="'/posts/' + n.slug">
              <div class="flex relative">
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white"
                >
                  <h2
                    class="tracking-widest text-sm title-font font-medium text-green-600 mb-1"
                  >
                    {{ n.date }}
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    {{ n.title }}
                  </h1>
                  <p class="leading-relaxed">
                    {{ n.description }}
                  </p>
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
    const query = await $content('posts' || 'index').sortBy('createdAt', 'desc')
    const posts = await query.fetch()
    return { posts }
  },
  head() {
    return {
      title: '記事一覧 | あることないこと',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '技術メモや思ったことを記憶しておくブログ，記事一覧',
        },
        { hid: 'title', name: 'title', content: 'あることないこと' },
      ],
    }
  },
}
</script>
