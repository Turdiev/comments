<template>
  <div class="text-xs text-gray-400">{{ formatDate }}</div>
</template>

<script>

const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December ']

export default {
  name: 'Date',
  props: ['date'],

  computed: {
    formatDate() {
      const formattedDate = this.date.split('T')

      const date = formattedDate[0].split('-')
      const month = allMonths[Number(date[1]) - 1]

      const time = formattedDate[1].split(':')

      return `${date[2]} ${month} ${date[0]}, at ${time[0]}:${time[1]}`
    }
  }
};
</script>

<style>
</style>