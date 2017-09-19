<template>
  <el-dialog
    :modal=false
    title="事件详情"
    :visible.sync="dialogVisible"
    size="tiny">
    <el-form class="customformheight" :model="form">
      <el-form-item label="项目：" :label-width="formLabelWidth">
        <div>{{form.activityName}}</div>
      </el-form-item>
      <el-form-item label="设备：" :label-width="formLabelWidth">
        <el-input
          type="textarea"
          :rows="2"
          placeholder=""
          v-model="form.textarea"
          :disabled="true">
        </el-input>
      </el-form-item>
      <el-form-item label="类型：" :label-width="formLabelWidth">
        <div>{{form.type}}</div>
      </el-form-item>
      <el-form-item label="等级：" :label-width="formLabelWidth">
        <div>{{form.level}}</div>
      </el-form-item>
      <el-form-item label="描述：" :label-width="formLabelWidth">
        <div>{{form.description}}</div>
      </el-form-item>
      <el-form-item label="处理结果：" :label-width="formLabelWidth">
        <div>{{form.result}}</div>
      </el-form-item>
      <hr/>
      <div><a href="javascript:void(0)" @click="dosomething">查看该设备实时监控 ></a></div>
      <div><a href="javascript:void(0)" @click="dosomething">查看该设备信息 ></a></div>
      <div><a href="javascript:void(0)" @click="dosomething">查看该设备监控视频 ></a></div>
      <div><a href="javascript:void(0)" @click="dosomething">查看该设备对应工单 ></a></div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogFormVisible = false">创建工单</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">设为已处理</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'eventdetail',
    watch: {
      dialogVisible: function (val, oldVal) {
        this.$emit('update:dialogVisible', val)
      }
    },
    props: ['dialogVisible'],
    methods: {
      dosomething: function () {
        alert('test')
      }
    },
    data () {
      return {
        dialogFormVisible: false,
        form: {
          activityName: 'x区域x项目',
          textarea: 'X配电室-X设备',
          type: '设备跳闸',
          level: '警报',
          description: 'xxxxx',
          result: '待处理'
        },
        formLabelWidth: '120px'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .customformheight .el-form-item {
    margin-bottom:0px;
  }

</style>
