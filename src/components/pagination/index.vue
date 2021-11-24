<template>
  <div class="flex items-center justify-center">
    <Button
      label="Prev"
      :disabled="currentPage === 1"
      @click="previousPage()"
    />
    <Button
      v-for="pageNumber in pages.slice(currentPage - 1, currentPage + 3)"
      :key="pageNumber"
      :label="`${pageNumber}`"
      :classes="currentPage === activePage && pageNumber === activePage"
      @click="onCurrentPage(pageNumber)"
    />
    <Button
      label="Next"
      :disabled="currentPage === pages.length"
      @click="nextPage()"
    />
  </div>
</template>

<script>
import Button from "../ButtonComponent.vue";

export default {
  name: "pagination",
  components: {
    Button,
  },
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
    limit: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      activePage: 1,
      currentPage: 1,
    };
  },

  methods: {
    previousPage() {
      this.activePage--;
      this.currentPage--;
      this.$store.commit('comments/setCurrentNumberPage', this.currentPage)
      return this.currentPage;
    },

    nextPage() {
      this.activePage++;
      this.currentPage++
      this.$store.commit('comments/setCurrentNumberPage', this.currentPage)
      return this.currentPage;
    },

    onCurrentPage(pageNumber) {
      this.activePage = pageNumber;
      this.currentPage = pageNumber;
      this.$store.commit('comments/setCurrentNumberPage', this.currentPage)
      return this.currentPage
    },
  },

  mounted() {
    this.$store.commit('comments/setCurrentNumberPage', this.currentPage)
  }
};
</script>

<style>
</style>