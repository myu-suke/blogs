<template>
  <div>
    <section
      class="font-sans container m-auto flex flex-col py-8 max-w-xl text-center px-6"
    >
      <h1
        class="my-8 max-w-full m-auto text-3xl md:text-4xl lg:text-5xl font-medium"
      >
        あることないこと
      </h1>
      <p class="mt-1 lg:mt-4 max-w-lg m-auto leading-loose text-left">
        技術メモや気になった事を書いてます
      </p>
      <p class="max-w-lg m-auto leading-loose mb-6 text-left">主に個人用</p>
    </section>
    <section class="font-sans text-center py-8 px-4 lg:px-0 bg-gray-300">
      <div
        class="container flex flex-col sm:flex-row bg-white max-w-xl m-auto shadow"
      >
        <div
          class="w-full sm:w-3/4 px-6 pt-6 text-left flex flex-col justify-center"
        >
          <h2 class="capitalize font-medium">記事一覧</h2>
          <p class="text-gray-700 mt-2 mb-6">
            技術メモが多いです．鵜呑みにせずにご覧ください！
          </p>
        </div>
        <div
          class="w-full sm:w-1/4 flex justify-start sm:justify-center items-center pl-6 pb-6 sm:pl-0 sm:pb-0"
        >
          <router-link
            to="posts"
            tag="button"
            class="bg-black hover:bg-gray-900 text-white hover:text-white py-3 px-6 uppercase text-xs tracking-wide"
          >
            記事一覧へ
          </router-link>
        </div>
      </div>
    </section>
    <section
      class="antialiased font-sans w-full bg-gray-300 text-left text-black pt-3 pb-8"
    >
      <div
        class="container mx-auto max-w-xl py-3 font-normal leading-normal flex flex-col sm:flex-row"
      >
        <div
          class="w-full sm:w-3/4 px-6 sm:px-0 pt-6 text-left flex flex-col justify-center"
        >
          <h2 class="text-2xl">タグ検索</h2>
          <p class="">気になるタグを入力して検索</p>
          <div class="max-w-sm mt-4 sm:flex">
            <input
              type="text"
              class="block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0"
              name="tags"
              placeholder="ex) javascript"
              required="false"
            />
            <router-link
              to="posts"
              tag="button"
              class="bg-black hover:bg-gray-900 text-white hover:text-white py-3 px-6 uppercase text-xs tracking-wide whitespace-nowrap"
            >
              タグ検索
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>
