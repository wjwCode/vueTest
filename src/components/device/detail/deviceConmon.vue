<template>
  <div class="infoHead">
    <div class="infoHeadTitle">
      <span>#5主变压器-设备类型</span>
      <el-button type="warning" size="small">检修</el-button>
      <a href="javascript:void(0)" v-on:click="stopPropagation">浏览设备二维码</a>
    </div>
    <div class="infoHeadSelect">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div>
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
  export default {
    components: {},
    name: 'deviceInfo',
    data() {
      return {
        options: [{
          value: '选项1',
          label: '更改设备信息'
        }, {
          value: '选项2',
          label: '设为备用'
        }, {
          value: '选项3',
          label: '设为报废'
        }, {
          value: '选项4',
          label: '删除该设备信息'
        },],
        value: '',
        QRdialogVisible:false,
      }
    },
    methods: {
      stopPropagation(e) {
        console.log(e)
        this.QRdialogVisible = true;
      }
    }
  }
</script>
<style scoped>
  .infoHead {
    height: 45px;
    border: solid 1px #000;

  }

  .infoHeadTitle {
    display: inline-block;
  }

  .infoHeadTitle > span {
    font-size: 19px;
    line-height: 45px;
    padding: 0 12px;
  }

  .infoHeadTitle > a {
    padding: 0 8px;
  }

  .infoHeadSelect {
    line-height: 45px;
    float: right;
    margin-right: 12px;
    display: inline-table;
  }
</style>
