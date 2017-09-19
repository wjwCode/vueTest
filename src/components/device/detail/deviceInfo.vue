<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content">
          <div class="device-info">
            <el-row :gutter="20" style="margin-top: 20px">
              <el-col :span="12"><img src="" class="info-image"></el-col>
              <el-col :span="12">
                <div class="detail-info">
                  <div>
                    <span>设备名称:</span>
                    <span>{{'#101配电所'}}</span>
                  </div>
                  <div>
                    <span>设备编号:</span>
                    <span>{{'SB-123456789'}}</span>
                  </div>
                  <div>
                    <span>项目:</span>
                    <span>{{'XXXXXX'}}</span>
                  </div>
                  <div>
                    <span>配电所:</span>
                    <span>{{'XXXXXX'}}</span>
                  </div>
                  <div>
                    <span>安装位置:</span>
                    <span>{{'XX市xx地区'}}</span>
                  </div>
                  <div>
                    <span>出厂日期:</span>
                    <span>{{'2017-01-05'}}</span>
                  </div>
                  <div>
                    <span>投运日期:</span>
                    <span>{{'2017-05-06'}}</span>
                  </div>
                  <div>
                    <span>地理位置:</span>
                    <span>{{'E12.36541;N56.12312'}}</span>
                  </div>
                  <div>
                    <span>上次检修日期:</span>
                    <span>{{'2017-05-30'}}</span>
                  </div>
                  <div>
                    <span>上次预检日期:</span>
                    <span>{{'2017-05-1'}}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="blank"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="right-regin">
          <div style="margin-top: 20px" class="right-regin-content">
            <div>
              <span>套用模板:</span>
              <span>{{'XX品牌变压器'}}</span>
            </div>
            <div>
              <span>类型:</span>
              <span>{{'油浸式变压器'}}</span>
            </div>
            <div>
              <span>厂家:</span>
              <span>{{'XXXXXX'}}</span>
            </div>
            <div>
              <span>品牌:</span>
              <span>{{'XXXXXX'}}</span>
            </div>
            <div>
              <span>型号:</span>
              <span>{{'XX市xx地区'}}</span>
            </div>
            <br>
            <br>
            <div>
              <span class="tech-param">技术参数:</span>
              <span></span>
            </div>
            <div>
              <span>额定容量(kW):</span>
              <span>{{'XXX'}}</span>
            </div>
            <div>
              <span>额定电压(V):</span>
              <span>{{'2017-05-06'}}</span>
            </div>
            <div>
              <span>额定电流(A):</span>
              <span>{{'XXX'}}</span>
            </div>
          </div>
          <div></div>
        </div>
      </el-col>
    </el-row>

  </div>

</template>

<script>


  export default {
    components: {},
    name: 'deviceInfo',
    data() {
      return {}
    },
  }
</script>
<style scoped>
  .device-info {
    min-width: 300px;
    font-size: 18px;
  }

  .device-info > div.el-row {
    border-bottom: solid 1px #D4D4D4;
  }

  .detail-info > div > span:first-child {
    text-align: right;
    min-width: 100px;
    display: inline-block;
    margin: 7px 5px;
    font-size: 15px;
  }

  .detail-info > div > span:last-child {
    text-align: left;
    margin: 5px 5px;
    font-size: 15px;
  }

  .right-regin .right-regin-content > div > span:first-child {
    text-align: right;
    min-width: 100px;
    display: inline-block;
    margin: 7px 5px;
    font-size: 15px;

  }

  .right-regin .right-regin-content > div > span:last-child {
    text-align: left;
    margin: 5px 5px;
    font-size: 15px;
  }

  .tech-param {
    margin-top: 40px !important;
  }

  .blank {
    width: 350px;
    height: 200px
  }

  .info-image {
    height: 270px;
    width: 270px
  }
</style>
