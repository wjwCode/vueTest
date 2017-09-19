<template>
  <div id="app">
    <Navbar class="navbar"></Navbar>
    <User class="user" :userInfo="userInfo"></User>
    <Notice class="notice" :noticeInfo="noticeInfo"></Notice>
    <div class="cotent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/frame/Navbar'
  import User from './components/frame/User'
  import Notice from './components/frame/Notice'

  export default {
    name: 'app',
    data () {
      return {
        userInfo: {
          userId: 123,
          userName: '张三',
          roleId: 23,
          roleName: '调度员'
        },
        noticeInfo: {
          noticeNum: 45,
          noticeList: [
            {
              noticeId: 345,
              noticeStr: 'test'
            }
          ]
        }
      }
    },
    components: {Navbar, User, Notice}
  }
</script>

<style>
  html,body,#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    margin: 0px;
    background-color: #E8E8E8;
  }
  * {
    font-family: '微软雅黑';
    font-size: 12px;
  }
</style>

<style scoped>
  .navbar {
    position: absolute;
    height: 93px;
    top:0px;
    left:0px;
    right:201px;
    z-index: 1;
  }
  .user {
    position: absolute;
    top: 0px;
    right:0px;
    z-index: 1;
  }
  .notice {
    position: absolute;
    top: 0px;
    right:131px;
    z-index: 1;
  }
  .cotent {
    position: absolute;
    width: 100%;
    top: 93px;
    bottom: 0px;
    left:0px;
  }

</style>
