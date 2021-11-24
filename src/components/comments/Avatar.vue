<template>
  <div class="flex itemas-center">
    <div
      class="
        rounded-full
        h-12
        w-12
        bg-gray-300
        flex
        items-center
        justify-center
        mr-3
      "
    >
      <img :src="avatar" alt="avatar" class=" w-full h-full rounded-full"/>
    </div>
    <div class="flex flex-col">
        <p class="text-base text-gray-800 font-bold">{{ name }}</p>
        <p class="text-xs text-gray-400">{{ company }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: ['avatar', 'name', 'company']
};
</script>

<style>
</style>