<template>
  <div class="device-wrap">
    <div class="device-head">
      <div class="device-title">
        <div>XXXX配电室</div>
        <div class="detail" @click="createDeviceDialog = true">
          详细图标
        </div>
      </div>
      <div class="device-filter">
        <div class="filter-box">
          <span>类型过滤:</span>
          <el-select v-model="value" placeholder="全部设备" v-on:change="deviceTypeFilter">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="export">
          <PicButton name="export" size="small" @click="exportVisible = true">导出…</PicButton>
        </div>
      </div>
    </div>
    <div class="device-table">
      <el-table
        :data="deviceTableData"
        stripe
        height=""
      class="device-el-table">
        <el-table-column
          prop="deviceNum"
          label="设备编号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="deviceName"
          label="设备名称"
          width="">
        </el-table-column>
        <el-table-column
          prop="usedModule"
          label="套用模板">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="150">
        </el-table-column>
        <el-table-column
          prop="typeNum"
          label="型号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="time"
          label="投运时间">
        </el-table-column>
        <el-table-column
          prop="latestTime"
          label="最近运维时间"
          width="">
        </el-table-column>
        <el-table-column label="状态" width="80">
          <template scope="scope">
            <el-button
              size="small"
              :type="scope.row.state|stateType"
            >{{scope.row.state}}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="详情" width="80">
          <template scope="scope">
            <i class="el-icon-edit" v-on:click="deviceDetail(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
        <el-table-column label="编辑" width="80">
          <template scope="scope">
            <i class="el-icon-edit"></i>
          </template>
        </el-table-column>
        <el-table-column label="删除" width="80">
          <template scope="scope">
            <i class="el-icon-close"></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="device-list-botton">
      <div class="device-list-bt-info">共{{1}}个配电设备&nbsp&nbsp&nbsp&nbsp{{1}}个只能仪器仪表&nbsp&nbsp&nbsp&nbsp{{1}}个用能设备</div>
      <div class="device-new-create">
        <el-button type="primary">新建设备</el-button>
      </div>
    </div>
    <div>
      <el-dialog
        title="创建配电室"
        :visible.sync="createDeviceDialog"
        size="tiny"
        :before-close="handleClose">
        <div class="device-info">
          <span>配电室编号</span>
          <span>{{deviceInfo.NO}}</span>
        </div>
        <div class="device-info">
          <span>配电室名称</span>
          <span>{{deviceInfo.name}}</span>
        </div>
        <div class="device-info">
          <span>配电室地址</span>
          <span>{{deviceInfo.address}}</span>
        </div>
        <div class="device-info">
          <span>经度</span>
          <span>{{deviceInfo.Long}}</span>
        </div>
        <div class="device-info">
          <span>纬度</span>
          <span>{{deviceInfo.lat}}</span>
        </div>
        <span slot="footer" class="dialog-footer">
         <el-button @click="createDeviceDialog = false;createDeviceDialog3 = true" type="danger">删除配电室</el-button>
    <el-button type="primary" @click="createDeviceDialog2 = true;createDeviceDialog = false">修改</el-button>
          <!--<PicButton name="close" @click="createDeviceDialog = false"></PicButton>-->
    <el-button type="primary" @click="createDeviceDialog = false">关闭</el-button>
  </span>
      </el-dialog>
      <el-dialog
        title="创建配电室"
        :visible.sync="createDeviceDialog2"
        size="tiny"
        :before-close="handleClose">
        <div>
          <span>配电室名称:</span>
          <el-input v-model="input" placeholder="请输入内容" class="device-input"></el-input>
        </div>
        <div>
          <span>配电室编号:</span>
          <el-input v-model="input" placeholder="请输入内容" class="device-input"></el-input>
        </div>
        <div>
          <span>配电室地址:</span>
          <el-input v-model="input" placeholder="请输入内容" class="device-input"></el-input>
        </div>
        <div>
          <span>经度:</span>
          <el-input v-model="input" placeholder="请输入内容" class="device-input4"></el-input>
        </div>
        <div>
          <span>纬度:</span>
          <el-input v-model="input" placeholder="请输入内容" class="device-input5"></el-input>
        </div>
        <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="createDeviceDialog2 = false">确 定</el-button>
    <el-button @click="createDeviceDialog2 = false">取 消</el-button>

  </span>
      </el-dialog>
      <el-dialog
        title="确定要删除所选项吗？"
        :visible.sync="createDeviceDialog3"
        size="tiny"
        :before-close="handleClose">
        <span>将要删除所选项及其所有子项。</span><br>
        <span>操作密码:</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span slot="footer" class="dialog-footer">
    <el-button @click="createDeviceDialog3 = false">取 消</el-button>
    <el-button type="primary" @click="createDeviceDialog3 = false">确 定</el-button>
  </span>
      </el-dialog>
      <el-dialog
        title="要导出？"
        :visible.sync="exportVisible"
        size="tiny"
        :before-close="handleClose"
        class="expotInfo">
        <!--<span>要导出？</span>-->
        <el-radio class="radio" v-model="radio" label="1">该配电室所有设备信息</el-radio>
        <br>
        <el-radio class="radio" v-model="radio" label="2">该配电室所有设备二维码</el-radio>
        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="exportVisible = false">确 定</el-button>
    <el-button @click="exportVisible = false">取 消</el-button>

  </span>
      </el-dialog>
      <el-dialog :visible.sync="deviceDetailVisible" class="device-list-dialog">
        <div class="info-head">
          <div class="info-head-title">
            <span>#5主变压器-设备类型</span>
            <el-button type="warning" size="small">检修</el-button>
          </div>
        </div>
        <a href="javascript:void(0)" v-on:click="stopPropagation" class="view-QR">浏览设备二维码</a>
        <el-tabs v-model="activeName" type="card" @tab-click="">
          <el-tab-pane label="设备信息" name="first">
            <deviceInfo></deviceInfo>
          </el-tab-pane>
          <el-tab-pane label="事件" name="second">
            <incident></incident>
          </el-tab-pane>
          <el-tab-pane label="维护记录" name="third">
            <tendRecord></tendRecord>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>
      <el-dialog
        title="提示"
        :visible.sync="QRdialogVisible"
        size="tiny"
        :modal=false
        :modal-append-to-body=true>
        <span>这是一段信息</span>
      </el-dialog>
    </div>
  </div>
</template>

<script>

  import deviceInfo from './detail/deviceInfo'
  import incident from './detail/incident.vue'
  import tendRecord from './detail/tendRecord.vue'
  import PicButton from '../utils/PicButton.vue'

  export default {
    components: {deviceInfo, incident, tendRecord, PicButton},
    name: 'deviceList',
    data() {
      return {
        createDeviceDialog: false,
        createDeviceDialog2: false,
        createDeviceDialog3: false,
        exportVisible: false,
        input: '',
        radio: 1,
        deviceDetailVisible: false,
        activeName: 'first',
        QRdialogVisible: false,

        deviceInfo: {
          name: '#1配电室',
          NO: 'PDS-0102-39123',
          address: 'XXX市XXX区XXX路',
          Long: '12.36514',
          lat: '56.12454'

        },
        options: [{
          value: '1',
          label: '全部设备'
        }, {
          value: '2',
          label: '配电设备'
        }, {
          value: '3',
          label: '智能仪器仪表'
        }, {
          value: '4',
          label: '用能设备'
        }],
        value: '',
        deviceTableData: [{
          deviceNum: "SB123456",
          deviceName: "XXX主变压器",
          usedModule: "T1019变压器",
          type: "变压器",
          typeNum: "T1019",
          time: "2019-08-10",
          latestTime: "2017-08-12 22:00",
          state: "故障",
        }, {
          deviceNum: "SB123456",
          deviceName: "XXX主变压器",
          usedModule: "T1019变压器",
          type: "变压器",
          typeNum: "T1019",
          time: "2019-08-10",
          latestTime: "2017-08-12 22:00",
          state: "检修",
        }, {
          deviceNum: "SB123456",
          deviceName: "XXX主变压器",
          usedModule: "T1019变压器",
          type: "变压器",
          typeNum: "T1019",
          time: "2019-08-10",
          latestTime: "2017-08-12 22:00",
          state: "运营",
        }]
      }
    },
    methods: {
      deviceDetail(index, row) {
        this.deviceDetailVisible = true;
        console.log(index, '', row)
      },
      handleEdit() {
        console.log("111");
      },
      handleDelete() {

      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      deviceTypeFilter(value) {
      },
      stopPropagation(e) {
        this.QRdialogVisible = true;
      }
    },
    filters: {
      stateType(data) {
        if (data == '故障') {
          return 'danger'
        } else if (data == '检修') {
          return 'warning'
        } else if (data == '运营') {
          return 'success'
        } else if (data == '报废') {
          return 'text'
        }
      }
    },

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .device-list-dialog {
    .el-tabs__item {
      border-top: solid #A8A8A8 1px !important;
      border-left: solid #A8A8A8 1px !important;
      border-right: solid #A8A8A8 1px !important;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      margin: 0 5px;
      height: 30px;
      width: 120px;
      line-height: 30px;
      text-align: center;
    }
    .el-tabs__item.is-active {
      border: 1px solid #A8A8A8 !important;
      border-bottom-color: #fff !important;
      color: #000;
    }
    .view-QR {
      position: absolute;
      right: 20px;
      margin-top: 5px;
    }
    .el-dialog__header {
      position: absolute;
      right: 15px;
      padding: 6px 0;
    }
    .el-dialog__body{
      padding-top: 0px;
    }
    .el-tabs__header{
      margin: 0;
    }
    .el-tabs__content{
      border-bottom: solid 1px #D4D4D4;
      .el-tab-pane{
        div>div>div.el-col.el-col-16{
          border-right: solid 1px #D4D4D4;
        }
      }
    }
  }
</style>
<style scoped>
  .device-title, .device-title > div, .device-filter, .device-filter > div, .device-list-botton > div, .device-filter > div > PicButton {
    display: inline;
  }

  .device-head {
    height: 46px;
  }

  .device-title {
    line-height: 46px;
    padding: 0 18px;
  }

  .device-wrap {
    position: relative;
    min-height: 100%;
    background: #fff;
  }

  .device-filter {
    padding: 5px 8px;
    float: right;
  }
  .device-el-table{
    width: 100%;
  }

  .device-list-botton {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 50px;
    background-color: #EFEFEF;

  }

  .device-new-create {
    float: right;
    padding: 0px 16px;
    line-height: 50px;
  }

  .device-list-bt-info {
    line-height: 50px;
    padding-left: 16px;
  }

  .device-info {
    padding: 3px 5px;
  }

  .device-info span:last-child {
    float: right;
  }

  .device-filter .export {
    float: right;
    display: inline-block;
    /*line-height: 46px;*/
  }

  .device-filter div {
    margin: 0 3px;
  }

  .device-input, .device-input4, .device-input5 {
    width: 70%;
    margin-left: 36px;
  }

  .device-input4, .device-input5 {
    margin-left: 72px;
  }

  .view-QR:before {
    /*background-image: url('');*/
  }
  .info-head {
    height: 30px;
    margin-top: 5px;
    margin-bottom: 5px;

  }

  .info-head-title {
    display: inline-block;
  }

  .info-head-title > span {
    font-size: 19px;
    font-weight: bold;
    line-height: 30px;
    padding-right: 6px;
    font-size: 15px!important;
  }


</style>
