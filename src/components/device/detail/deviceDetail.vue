<template>
    <el-dialog title="收货地址" :visible.sync="this.deviceDetailVisible" >
      <el-tabs type="border-card">
        <el-tab-pane label="设备信息">
          <!--<deviceInfo></deviceInfo>-->
        </el-tab-pane>
        <el-tab-pane label="事件">
          <!--<incident></incident>-->
        </el-tab-pane>
        <el-tab-pane label="维护记录">
          <!--<tendRecord></tendRecord>-->
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
</template>

<script>
  import deviceInfo from './deviceInfo'
  import incident from './incident.vue'
  import tendRecord from './tendRecord.vue'
  export default {
    components: {deviceInfo,incident,tendRecord},
    props:['deviceDetailVisible'],
    name: 'deviceList',
    data() {
      return {



      }
    },
    methods:{
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    }
  }
</script>
<style scoped>


</style>
