<template>
  <div class="footer">
    <p v-once>Copyright by Aleksander Skubała {{ date }} &copy;</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
  .footer {
    padding-left: 15px;
    font-size: .8em;
    background-color: #ffcc80; //rgba(255, 173, 50, .6)
  }
</style>
