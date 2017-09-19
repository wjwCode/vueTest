<template>
  <div class="navbar">
    <NavItem class="navitem firstitem" :pressed="pressedItem" name="home"   @click="navhandler">全局监测</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="event" @click="navhandler">事件</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="order" @click="navhandler">工单</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="realtime" @click="navhandler">实时监控</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="patrol" @click="navhandler">巡检</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="prerun" @click="navhandler">预试</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="device" @click="navhandler">设备</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="user" @click="navhandler">用户管理</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="consumption" @click="navhandler">能效综合</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="dataquery" @click="navhandler">数据查询</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="log" @click="navhandler">操作日志</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="knowledge" @click="navhandler">知识库</NavItem>
    <NavItem class="navitem" :pressed="pressedItem" name="systemconfig" @click="navhandler">系统设置</NavItem>
  </div>
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
    watch: {
      // 直接修改url，导航联动
      '$route' (to, from) {
        this.pressedItem = to.name
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
  .navbar {
    background-image:url('./navbarAssets/navbackground.png');
    background-repeat:no-repeat;
  }
  .navitem {
    float:left;
    height: 100%;
  }
  .firstitem {
    margin-left: 13px;
  }
</style>
