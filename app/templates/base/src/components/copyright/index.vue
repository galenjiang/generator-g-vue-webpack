<template>
  <p class="copyright">{{ copyright }}</p>
</template>
<style>
  #my-app .copyright{
    position: absolute;
    bottom: 0px;
    width: 100%;
    color: #ccc;
    text-align: center;
  }
</style>

<script>
  import Vue from 'vue'
  export default {
    data() {
      return {
        copyright: 'copyright@galen!',
      }
    }
  }
</script>
