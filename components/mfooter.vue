<template>
  <footer class="font-sans bg-black text-white py-4 px-4 min-w-full">
    <div
      class="mx-auto max-w-xl overflow-hidden flex justify-between items-center"
    >
      <ul
        class="text-sm md:text-base text-gray-700 list-none p-0 flex items-center"
      >
        <li>
          <router-link
            to="/posts"
            class="inline-block py-2 px-3 text-gray-300 hover:text-gray-100 no-underline"
            >Posts</router-link
          >
        </li>
        <li>
          <router-link
            to="/tags"
            class="inline-block py-2 px-3 text-gray-300 hover:text-gray-100 no-underline"
            >Tags</router-link
          >
        </li>
      </ul>
      <p class="inline-block py-2 px-3 text-gray-400 text-xs">©myu-ske.</p>
    </div>
  </footer>
</template>

<script>
export default {
  date() {
    return {}
  },
}
</script>
