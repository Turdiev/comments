<template>
  <button
    class="
      text-lg text-white
      py-1
      px-4
      rounded-lg
      border-2 border-white
      hover:bg-white hover:border-gray-500 hover:text-gray-500
    "
    :class="
      classes
        ? 'bg-white border-gray-500 text-gray-500'
        : 'bg-gray-500 border-white text-white '
    "
    :disabled="disabled"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>