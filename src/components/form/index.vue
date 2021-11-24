<template>
  <div class="w-full max-w-xl">
    <div class="flex items-center">
      <textarea
        v-model="commentMessage"
        type="textarea"
        placeholder="Написать..."
        class="
          appearance-none
          bg-gray-100
          border border-white
          rounded-lg
          w-full
          text-gray-800
          py-2
          px-3
          mr-3
          leading-tightt
          focus:outline-none focus:border-gray-500
        "
        :class="{ 'border-red-600': errorMessage.length }"
      />
      <Button
        label="Добавить"
        @click="onSubmitComment"
      />
    </div>
    <p v-if="errorMessage.length" class="text-red-600 my-1">
      {{ this.errorMessage[0] }}
    </p>
  </div>
</template>

<script>
import Button from '../ButtonComponent.vue'

export default {
  name: "Form",
  components: {
    Button
  },
  data() {
    return {
      commentMessage: "",
      errorMessage: [],
    };
  },

  methods: {
    onSubmitComment() {
      this.errorMessage = [];
      const minLength = this.commentMessage.split(" ");
      if (this.commentMessage === "") {
        this.errorMessage.push("Добавьте комментарии!");
        return;
      } else if (this.commentMessage.length >= 1000) {
        this.errorMessage.push(
          "Комментарии слишком большой(Не более 1000 символов)"
        );
        return;
      } else if (minLength.length < 3) {
        this.errorMessage.push("Должно быть не менее 3-x слов");
        return;
      }

      const params = {
        id: Math.floor(Math.random() * (1000 - 256)) + 256,
        body: this.commentMessage,
        created_at: new Date().toISOString(),
        author: {
          id: 16,
          name: "John Doe",
          avatar: "http://placeimg.com/640/480/business",
          company: "BigCountry",
        },
      };

      this.$store.dispatch("comments/submitComment", { params });
      this.commentMessage = ''
    },
  },
};
</script>

<style>
</style>