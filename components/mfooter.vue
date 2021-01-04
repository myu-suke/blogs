<template>
  <footer class="font-sans bg-black text-white py-8 px-4">
    <div
      class="mx-auto max-w-xl overflow-hidden flex justify-between items-center"
    >
      <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
        <li>
          <router-link to="/" class="block mr-4 w-32">
            <img
              src="https://stitches.hyperyolo.com/images/logo-white.png"
              class=""
              alt="logo"
            />
          </router-link>
        </li>
        <li>
          <router-link
            to="posts"
            class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline"
            >Posts</router-link
          >
        </li>
        <li>
          <router-link
            to="posts"
            class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline"
            >Tags</router-link
          >
        </li>
      </ul>
      <p class="inline-block py-2 px-3 text-gray-700 text-xs">©2021 myuske.</p>
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
