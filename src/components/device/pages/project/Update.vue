<template>
  <div class="update-project-dialog">
    <ul>
      <li class="update-project-dialog-info">
        <ul class="update-project-dialog-left">
          <li><span>项目编号：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li><span>项目名称：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li><span>投运日期：</span>
            <el-date-picker
              v-model="value1"
              type="date"
              size="mini"
              placeholder="请选择日期">
            </el-date-picker>
          </li>
          <li><span>所属公司：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li><span>业主名称：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li><span>地址：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li><span>建筑面积：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li><span>值班电话：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
        </ul>
        <div class="update-project-dialog-right">
          <span>项目效果图：</span>
          <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          <button>浏览……</button>
        </div>
        <div class="clearfix"></div>
      </li>
      <li class="update-project-dialog-charger">
        <ul>
          <li class="charger-col-1">
            <span>负责人：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li class="charger-col-2">
            <span>电话：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li class="charger-col-3">
            <span>E-mail：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
        </ul>
        <ul>
          <li class="charger-col-1">
            <span>联系人：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li class="charger-col-2">
            <span>电话：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li class="charger-col-3">
            <span>E-mail：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
        </ul>
        <ul>
          <li class="charger-col-1">
            <span>常备联系人：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li class="charger-col-2">
            <span>电话：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
          <li class="charger-col-3">
            <span>E-mail：</span>
            <el-input placeholder="" size="mini" v-model="areaName"></el-input>
          </li>
        </ul>
        <div class="clearfix"></div>
      </li>
      <li class="update-project-dialog-details">
        <span>简介：</span>
        <textarea name="project-details" rows="3"></textarea>
        <div class="clearfix"></div>
      </li>
      <li class="update-project-dialog-bottom">
        <PicButton size="medium" name="cancel"></PicButton>
        <PicButton size="medium" name="confirm"></PicButton>
        <div class="clearfix"></div>
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
        areaName: '',
        value1: ''
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

  a {
    text-decoration: none;
  }

  .update-project-dialog-info {
    width: calc(100% - 60px);
    height: auto;
    margin: 15px 15px 0 15px;
    padding: 15px;
    border-top: 1px solid #ADADAD;
  }

  .update-project-dialog-left {
    width: 45%;
    height: auto;
    float: left;
  }

  .update-project-dialog-left > li > span {
    display: inline-block;
    width: 80px;
    height: 25px;
    text-align: right;
    line-height: 25px;
    vertical-align: middle;
  }

  .update-project-dialog-charger {
    width: calc(100% - 60px);
    height: auto;
    margin: 0 15px;
    padding: 15px;
    border-top: 1px solid #ADADAD;
  }

  .update-project-dialog-details {
    width: calc(100% - 60px);
    height: auto;
    margin: 0 15px;
    padding: 15px;
    border-top: 1px solid #ADADAD;
  }

  .update-project-dialog-bottom {
    width: calc(100% - 60px);
    height: auto;
    margin: 0 15px;
    padding: 15px 0 15px 15px;
    border-top: 1px solid #ADADAD;
  }

  .update-project-dialog-details span {
    display: block;
    width: 80px;
    height: 100px;
    text-align: right;
    vertical-align: top;
    float: left;
  }

  .update-project-dialog-details textarea {
    display: block;
    float: left;
    width: calc(100% - 90px);
    height: 100px;
  }

  .update-project-dialog-charger > ul > li > span {
    display: inline-block;
    width: 80px;
    height: 25px;
    text-align: right;
    line-height: 25px;
    vertical-align: middle;
  }

  .update-project-dialog-charger > ul > li {
    float: left;
  }

  .charger-col-1 {
    width: 30%;
    height: auto;
  }

  .charger-col-2 {
    width: 30%;
    height: auto;
  }

  .charger-col-3 {
    width: 40%;
    height: auto;
  }

  .update-project-dialog-right {
    float: right;
    width: calc(55% - 20px);
    height: auto;
  }

  .update-project-dialog-right span {
    display: inline-block;
    text-align: right;
    width: 80px;
    height: 25px;
  }

  .update-project-dialog-right button {
    display: block;
    float: right;
    text-align: right;
    width: 70px;
    height: 25px;
  }

  .clearfix {
    clear: both;
  }


  .update-project-dialog-bottom > div {
    float: right;
    margin: 5px;
  }
</style>
<style>
  .update-project-dialog .el-input {
    display: inline-block;
    width: calc(100% - 85px);
  }
</style>
