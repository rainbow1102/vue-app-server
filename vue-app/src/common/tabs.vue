<template>
  <nav class="tabs">
    <a class="tab" href="/">首页</a>
    <a class="tab" href="/setting.html">设置</a>
  </nav>
</template>

<script>
  export default {}
</script>

<style>
  .tabs {
    width: 100%;
    height: 49px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    background: pink;
  }
  a { text-decoration: none; }
  .tabs .tab {
    flex: 1;
    text-align: center;
    line-height: 49px;
  }
</style>
