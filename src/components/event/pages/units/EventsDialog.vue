<template>
  <div class="event-dialog-container">
    <ul class="event-dialog-center">
      <li>
        <span class="event-dialog-label">项目：</span> {{this.rowData2.project}}
      </li>
      <li>
        <span class="event-dialog-label">设备：</span>
        <textarea name="project" class="event-equipment" row="3">{{this.rowData2.equipment}}</textarea>
      </li>
      <li>
        <span class="event-dialog-label">类型：</span> {{this.rowData2.type}}
      </li>
      <li>
        <span class="event-dialog-label">等级：</span> <span v-bind:class="this.rowData2.level_class"></span>
      </li>
      <li>
        <span class="event-dialog-label">描述：</span> {{this.rowData2.details}}
      </li>
      <li>
        <span class="event-dialog-label">处理结果：</span> {{this.rowData2.status}}
      </li>
    </ul>
    <ul class="event-dialog-center2">
      <li>
        <a @click="realTimeMonitor(rowData2)">
          查看该设备实时监控 >
        </a>
      </li>
      <li>
        <a @click="equipmentInfo(rowData2)">
          查看该设备信息 >
        </a>
      </li>
      <li>
        <a @click="monitorVideo(rowData2)">
          查看该设备监控视频 >
        </a>
      </li>
      <li>
        <a @click="worksheet(rowData2)">
          查看该设备对应工单 >
        </a>
      </li>
    </ul>
    <ul class="event-dialog-bottom">
      <PicButton size="medium" class="event-dialog-btn" name="createorder-medium" @click=""></PicButton>
      <PicButton size="medium" class="event-dialog-btn" name="processed" @click=""></PicButton>
    </ul>
  </div>
</template>
<script>
  import PicButton from '../../../utils/PicButton.vue'
  export default {
    name: 'EventsDialog',
    props: ['rowData1'],
    methods: {
      realTimeMonitor: function (data) {
        console.log(data)
      },
      equipmentInfo: function (data) {
        console.log(data)
      },
      monitorVideo: function (data) {
        console.log(data)
      },
      worksheet: function (data) {
        console.log(data)
      }
    },
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
  div,
  ul,
  li {
    padding: 0;
    margin: 0;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    cursor: pointer;
  }

  .event-dialog-label {
    display: inline-block;
    width: 80px;
    height: 30px;
    text-align: right;
    vertical-align: top;
  }
  .event-dialog-btn{
    display: inline-block;
  }

  .event-dialog-center {
    border-top: 1px solid #cccccc;
    padding: 10px;
  }
  .event-dialog-center2 {
    border-top: 1px solid #cccccc;
    padding: 10px 10px 10px 28px;
  }
  .event-dialog-center li {
    min-height: 30px;
    line-height: 30px;
    vertical-align: middle;
    color: #78797A;
  }
  .event-dialog-center2 li {
    min-height: 30px;
    line-height: 30px;
    vertical-align: middle;
    color: #78797A;
  }

  .event-dialog-bottom {
    padding-top: 15px;
    border-top: 1px solid #cccccc;
    text-align: right;
  }

  .event-button {
    display: inline-block;
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    vertical-align: middle;
    border-radius: 5px;
    color: #ffffff;
  }

  .event-create-sheet {
    background: #0000ff;
  }

  .event-set-dealed {
    background: #0000ff;
  }

  .event-equipment {
    width: 270px;
    height: 50px;
    color: #78797A;
  }

  /**
*等级level_class
*/
  .accident {
    display: inline-block;
    width: calc(100% - 100px);
    height: 25px;
    border-radius: 5px;
    background: url("../../assets/alarm/accident.png") no-repeat;
    background-position: -3px 0;
  }

  .alarm {
    display: inline-block;
    width: calc(100% - 100px);
    height: 25px;
    border-radius: 5px;
    background: url("../../assets/alarm/accident.png") center center no-repeat;
    background-position: -3px 0;
  }

  .general {
    display: inline-block;
    width: calc(100% - 100px);
    height: 25px;
    border-radius: 5px;
    background: url("../../assets/alarm/general.png") center center no-repeat;
    background-position: -3px 0;
  }

  .other {
    display: inline-block;
    width: calc(100% - 100px);
    height: 25px;
    border-radius: 5px;
    background: url("../../assets/alarm/other.png") center center no-repeat;
    background-position: -3px 0;
  }

  .prealarm {
    display: inline-block;
    width: calc(100% - 100px);
    height: 25px;
    border-radius: 5px;
    background: url("../../assets/alarm/prealarm.png") center center no-repeat;
    background-position: -3px 0;
  }
</style>
<style>
  .event .el-dialog__body {
    padding: 10px;
    margin: 0;
  }
</style>
