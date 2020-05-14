<template>
  <button class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .btn {
    position: relative;
    z-index: 1;
    outline: none;
    padding: 8px;
    background: transparent;
    border: 2px solid #FFAD32;
    border-radius: 4px;
    font-weight: bold;
    font-size: .9em;
    cursor: pointer;

    transition: color .1s ease-in-out .05s;
    will-change: color;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #FFAD32;

      opacity: 0;
      transition: opacity .2s ease-in-out;
      will-change: opacity;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover {
      color: white;
    }
  }
</style>>
