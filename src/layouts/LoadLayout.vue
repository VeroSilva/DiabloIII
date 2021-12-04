<template>
  <div class="loading-layout">
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'LoadLayout'
}
</script>

<style lang="stylus">
  .loading-layout
    display flex
    align-items center
    justify-content center
    height 100vh
</style>
