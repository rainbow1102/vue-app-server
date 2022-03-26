<template>
  <div id="app">
    <h1>这是首页面</h1>
    <Tabs/>
  </div>
</template>

<script>
  import Tabs from './../common/tabs';
  import axios from 'axios';
  export default {
    name: 'App',
    mounted() {
      this.getList();
    },
    methods: {
      getList() {
        axios.get('http://localhost:9090/api/v2/banner/list')
          .then(res => {
            res = res.data;
            console.log("++====454141");
            console.log(res);
          })
      }
    },
    components: { Tabs }
  }
</script>

<style lang="scss">

</style>
