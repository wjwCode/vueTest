<template>
  <div class="login"></div>
</template>

<script>
  import NavItem from './NavItem'
  export default {
    name: 'nav',
    data () {
      return {
        // 当前激活导航项
        pressedItem: ''
      }
    },
    methods: {
      navhandler: function (componentName) {
        // 点击后激活对应的路由
        this.$router.push({name: componentName})
        // 修改激活导航项
        this.pressedItem = componentName
      }
    },
    created: function () {
      // 初次进入页面，导航根据url联动
      this.pressedItem = this.$route.name
    },
    components: {NavItem}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    position: absolute;
    left: 0px;
    right: 0px;
    top:0px;
    bottom:0px;
    z-index: 2;
    background-color: #000000;
  }
</style>
