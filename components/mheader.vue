<template>
  <nav
    class="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden pl-3"
  >
    <router-link to="/" class="block text-left">
      <h1 class="py-2 text-xl md:text-2xl">あることないこと</h1>
    </router-link>
    <ul
      class="text-sm md:text-base text-gray-700 list-none p-0 flex items-center"
    >
      <li>
        <router-link
          to="/posts"
          class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
          >Posts</router-link
        >
      </li>
      <li>
        <router-link
          to="/tags"
          class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
          >Tags</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  date() {
    return {}
  },
}
</script>
