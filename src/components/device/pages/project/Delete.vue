<template>
  <div class="project-dialog">
    <ul>
      <li>
        <div class="dialog-left">
          <div><span>项目编号：</span>{{this.rowData1.project_code}}</div>
          <div><span>项目名称：</span>{{this.rowData1.project_name}}</div>
          <div><span>投运日期：</span>{{this.rowData1.touyun_date}}</div>
          <div><span>所属公司：</span>{{this.rowData1.company}}</div>
          <div><span>业主名称：</span>{{this.rowData1.yz_name}}</div>
          <div><span>地址：</span>{{this.rowData1.address}}</div>
          <div><span>建筑面积：</span>{{this.rowData1.building_square}}</div>
          <div><span>值班电话：</span>{{this.rowData1.tel}}</div>
        </div>
        <div class="dialog-right"></div>
        <div style="clear: both;"></div>
      </li>
      <li class="dialog-charger">
        <ul>
          <li>
            <span>负责人：</span>{{this.rowData1.tel_bak[0].charger}}
          </li>
          <li>
            <span>电话：</span>{{this.rowData1.tel_bak[0].tel}}
          </li>
          <li>
            <span>E-mail：</span>{{this.rowData1.tel_bak[0].Email}}
          </li>
          <div style="clear: both;"></div>
        </ul>
        <ul>
          <li>
            <span>联系人：</span>{{this.rowData1.tel_bak[1].connect}}
          </li>
          <li>
            <span>电话：</span>{{this.rowData1.tel_bak[1].tel}}
          </li>
          <li>
            <span>E-mail：</span>{{this.rowData1.tel_bak[1].Email}}
          </li>
          <div style="clear:both;"></div>
        </ul>
        <ul>
          <li>
            <span>常用联系人：</span>{{this.rowData1.tel_bak[2].common_connet}}
          </li>
          <li>
            <span>电话：</span>{{this.rowData1.tel_bak[2].tel}}
          </li>
          <li>
            <span>E-mail：</span>{{this.rowData1.tel_bak[2].Email}}
          </li>
          <div style="clear: both;"></div>
        </ul>
      </li>
      <li class="dialog-details">
        <span>简介：</span><a>{{this.rowData1.details}}</a>
      </li>
      <li>
        <div>

        </div>
        <PicButton size="medium" name="delete" style="float: left"></PicButton>
        <div style="float: right;">
          <PicButton size="medium" name="close" style="float: left;"></PicButton>
          <PicButton size="medium" name="close" style="float: left;"></PicButton>
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
    props: ['rowData1'],
    methods: {},
    data () {
      return {
        rowData2: this.rowData1
      }
    },
    components: {
      PicButton
    }
  }
</script>

<style scoped>
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .project-dialog {
    width: 100%;
    height: 100%;
  }

  .project-dialog > ul {
    width: calc(100% - 20px);
    padding: 10px;
  }

  .project-dialog > ul > li {
    width: calc(100% - 40px);
    min-height: 30px;
    border-top: 1px solid #ADADAD;
    margin: 10px;
    padding: 10px;
  }

  .dialog-left {
    width: calc(100% - 407px);
    min-height: 30px;
    overflow-x: hidden;
    float: left;
    padding: 10px;
  }

  .dialog-left div {
    min-height: 30px;
    line-height: 30px;
    vertical-align: middle;
  }

  .dialog-left span {
    display: inline-block;
    width: 80px;
    text-align: right;
  }

  .dialog-right {
    width: 365px;
    min-height: 238px;
    margin: 10px;
    border: 1px solid #ADADAD;
    float: right;
    background: url("../../assets/ProjectDetailsPic.png") no-repeat center center;
    background-size: contain;
  }
  .dialog-charger > ul > li {
    width: 33%;
    float: left;
    min-height: 30px;
    line-height: 30px;
    vertical-align: middle;
  }
  .dialog-charger>ul>li>span{
    display: inline-block;
    width: 80px;
    text-align: right;
  }
  .dialog-details>span{
    display: inline-block;
    width: 80px;
    height: 30px;
    text-align: right;
    vertical-align: middle;
  }
  .dialog-details>a{
    text-decoration: none;
    display: inline-block;
    width: calc(100% - 80px);
    overflow-wrap: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 30px;
    text-align: left;
    vertical-align: middle;
  }

</style>
