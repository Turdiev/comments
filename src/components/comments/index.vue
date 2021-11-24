<template>
  <div class="comment-wrapper bg-white rounded-lg p-4">
    <div class="flex justify-between flex-wrap items-center mb-2">
      <Avatar
        :name="comment.author.name"
        :avatar="comment.author.avatar"
        :company="comment.author.company"
      />
      <Date :date="comment.created_at" class="my-2" />
    </div>
    <BodyComment :body="comment.body" />
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import Date from "./Date.vue";
import BodyComment from "./BodyComment.vue";

export default {
  name: "Comments",
  components: {
    Avatar,
    Date,
    BodyComment,
  },
  props: ["comment"]
};
</script>

<style scoped>
.comment-wrapper {
  width: 100%;
  max-width: 36rem;
}

@media (max-width: 1280px) {
  .comment-wrapper {
    max-width: 29rem;
  }
}

@media (max-width: 1020px) {
  .comment-wrapper {
    max-width: 100%;
  }
}
</style>
