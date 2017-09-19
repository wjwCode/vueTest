<template>
  <div @click="handleClick"
      :class="[
        'noticeInfo',
        single ? 'noticeInfo-single' : '',
        double ? 'noticeInfo-double' : ''
      ]"
  >
    <div class="noticetext">{{noticeNum}}</div>
  </div>
</template>
<script>
  export default {
    name: 'Notice',

    props: {
      noticeInfo: Object
    },
    computed: {
      single: function () {
        return this.noticeInfo.noticeNum < 10 && this.noticeInfo.noticeNum > 0
      },
      double: function () {
        return this.noticeInfo.noticeNum >= 10
      },
      noticeNum: function () {
        return this.noticeInfo.noticeNum ? this.noticeInfo.noticeNum : ''
      }
    },
    methods: {
      handleClick (evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .noticeInfo {
    background-color: transparent;
    border-width: 0px;
    background-repeat: no-repeat;
    background-image: url('./noticeAssets/notice.png');
    cursor: pointer;
    width: 70px;
    height: 93px;
  }
  .noticeInfo-single {
    background-image: url('./noticeAssets/notice-single.png') !important;
  }
  .noticeInfo-double {
    background-image: url('./noticeAssets/notice-double.png') !important;
  }
  .noticetext {
    position: absolute;
    left: 50px;
    top: 11px;
    right: 0px;
    bottom: 0px;
    color:#FFF;
  }
</style>
