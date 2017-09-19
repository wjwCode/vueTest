<template>
  <div @click="handleClick"
      :class="[
        'userinfo'
      ]"
  >
    <div class="usertext">{{userInfo.userName}}<br/>{{userInfo.roleName}}</div>
  </div>
</template>
<script>
  export default {
    name: 'UserInfo',

    props: {
      userInfo: Object
    },
    methods: {
      handleClick (evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .userinfo {
    background-color: transparent;
    border-width: 0px;
    background-repeat: no-repeat;
    background-image: url('./userAssets/userinfo.png');
    cursor: pointer;
    width: 131px;
    height: 93px;
  }
  .usertext {
    position: absolute;
    left: 67px;
    top: 25px;
    right: 0px;
    bottom: 0px;
    color:#FFF;
  }
</style>
