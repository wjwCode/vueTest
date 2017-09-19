<template>
  <div class="query-area">
    <ul>
      <li>
        <span>区域名称：</span><a>{{this.areaData1.label}}</a>
      </li>
      <li>
        <PicButton size="medium" name="delete"></PicButton>
        <div>
          <PicButton size="medium" name="close"></PicButton>
          <PicButton size="medium" name="close"></PicButton>
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
    props: ['areaData1'],
    methods: {},
    data() {
      return {
        areaData: this.areaData1
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

  div.query-area {
    margin: 0;
  }
  .query-area>ul>li{
    width: calc(100% - 30px);
    height: 70px;
    padding: 15px 15px 0 15px;
    line-height: 70px;
    vertical-align: middle;
  }
  .query-area>ul>li:nth-last-child(1){
    width: calc(100% - 30px);
    height: 35px;
    padding: 15px;
  }
  .query-area>ul>li>span{
    display: inline-block;
    width: 80px;
    height: 70px;
    text-align: right;
  }

  .query-area > ul > li > div {
    float: right;
  }

  .query-area > ul > li > div > div {
    float: left;
  }

  .query-area > ul > li > .picbutton.picbutton-delete.picbutton-medium {
    float: left;
  }

</style>
