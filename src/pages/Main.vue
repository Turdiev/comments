<template>
  <div class="bg-gray-300 pt-4">
    <div class="container mx-auto px-4">
      <h2 class="my-2 text-gry-800 text-xl md:text-red sm:text-green">
        Комментарии
      </h2>
      <Form />
      <div class="bg-gray-500 border border-opacity-0 mt-2"></div>
      <div class="flex justify-between flex-wrap">
        <div v-for="comment in displayComments" :key="comment.id">
          <div class="py-4">
            <Comments :comment="comment" />
          </div>
        </div>
      </div>
      <Pagination
        maxViewData="20"
        :pages="pages"
        class="pb-6"
      />
    </div>
  </div>
</template>

<script>
import Comments from "../components/comments";
import Form from "../components/form";
import Pagination from "../components/pagination"

export default {
  name: "Main",
  components: {
    Comments,
    Form,
    Pagination
  },
  data() {
    return {
      pages: [],
      commentsList: [],
      limit: 20,
      activePage: 1,
    };
  },

  watch: {
    getComments() {
      this.setPages();
    },
  },

  computed: {
    getComments() {
      return this.sortComment(this.$store.state.comments.comments);
    },

    displayComments() {
      return this.pagination(this.getComments);
    },

    currentPage() {
      return this.$store.state.comments.currentNumberPage;
    }
  },

  methods: {
    sortComment(data) {
      return data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
    },

    setPages() {
      let numberOfPage = Math.ceil(this.getComments.length / this.limit);
      this.pages = [];
      for (let index = 1; index <= numberOfPage; index++) {
        this.pages.push(index);
      }
    },

    pagination(comments) {
      let page = this.currentPage;
      let maxComments = this.limit;
      let from = maxComments * page - maxComments;
      let to = maxComments * page;
      return comments.slice(from, to);
    },
  },

  created() {
    this.$store.dispatch("comments/getComments");
  },
};
</script>