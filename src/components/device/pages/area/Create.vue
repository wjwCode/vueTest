<template>
  <div class="create-area-dialog">
    <ul>
      <li>
        <span>区域名称：</span> <el-input placeholder="" v-model="areaName"></el-input>
      </li>
      <li>
        <div>
          <PicButton size="medium" name="npm"></PicButton>
          <PicButton size="medium" name="cancel"></PicButton>
        </div>
        <div style="clear: both;"></div>
      </li>
    </ul>
  </div>
</template>
<script>
  import PicButton from '../../../utils/PicButton.vue'

  export default {
    name: 'EventsDialog',
    methods: {},
    data() {
      return {
        areaName:''
      }
    },
    components: {
      PicButton
    }
  }
</script>

<style lang="scss" scoped>
  div, ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a{
    text-decoration: none;
  }

  div.create-area-dialog {
    margin: 0;
  }
  .create-area-dialog>ul>li{
    width: calc(100% - 50px);
    height: 70px;
    padding: 15px 15px 0 15px;
    line-height: 70px;
    vertical-align: middle;
  }
  .create-area-dialog>ul>li:nth-last-child(1){
    width: calc(100% - 30px);
    height: 35px;
    padding: 15px;
  }
  .create-area-dialog>ul>li>span{
    display: inline-block;
    width: 80px;
    height: 70px;
    text-align: right;
  }

  .create-area-dialog > ul > li > div {
    float: right;
  }

  .create-area-dialog > ul > li > div > div {
    float: left;
  }

  .create-area-dialog > ul > li > .picbutton.picbutton-delete.picbutton-medium {
    float: left;
  }

</style>
<style scoped>
  .create-area-dialog .el-input {
    display: inline-block;
    width: calc(100% - 100px);
  }
</style>
