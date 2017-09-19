<template>
  <div class="area-project">
    pds
    <div class="area-head-container">
      <el-row type="flex">
        <el-col :span="24">
          <div class="area-project-header">
            XXXXX 区域
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="area-project-main">
      <el-row type="flex">
        <el-col :span="24">
          <div>
            <el-table
              :data="tableData"
              border
              stripe
              style="width: 100%">
              <el-table-column
                label="项目编号">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.project_code}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="项目名称">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.project_name}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="配电室数量">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.pds_number}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="设备数量">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.device_number}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="投运日期">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.touyun_date}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="所属公司">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.company}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="值班电话">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.tel}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="负责人">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.charger}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="详情">
                <template scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column
                label="下一级">
                <template scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="area-project-bottom">
      <el-row type="flex">
        <el-col :span="20">

        </el-col>
        <el-col :span="4">
            <a class="create-project">新建项目</a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'pdsPro',
    data() {
      return {
        tableData: [
          {
            project_code: 'XM-01-123',
            project_name: 'XXXX 广场项目',
            pds_number: 2,
            device_number: 123,
            touyun_date: '2017-08-10',
            company: 'XXXX有限公司',
            tel: 8888 - 85679412,
            charger: '张三',
            details: 'details',
            next_level: 'next_level',
          }, {
            project_code: 'XM-01-123',
            project_name: 'XXXX 广场项目',
            pds_number: 2,
            device_number: 123,
            touyun_date: '2017-08-10',
            company: 'XXXX有限公司',
            tel: 8888 - 85679412,
            charger: '张三',
            details: 'details',
            next_level: 'next_level',
          }, {
            project_code: 'XM-01-123',
            project_name: 'XXXX 广场项目',
            pds_number: 2,
            device_number: 123,
            touyun_date: '2017-08-10',
            company: 'XXXX有限公司',
            tel: 8888 - 85679412,
            charger: '张三',
            details: 'details',
            next_level: 'next_level',
          }, {
            project_code: 'XM-01-123',
            project_name: 'XXXX 广场项目',
            pds_number: 2,
            device_number: 123,
            touyun_date: '2017-08-10',
            company: 'XXXX有限公司',
            tel: 8888 - 85679412,
            charger: '张三',
            details: 'details',
            next_level: 'next_level',
          }, {
            project_code: 'XM-01-123',
            project_name: 'XXXX 广场项目',
            pds_number: 2,
            device_number: 123,
            touyun_date: '2017-08-10',
            company: 'XXXX有限公司',
            tel: 8888 - 85679412,
            charger: '张三',
            details: 'details',
            next_level: 'next_level',
          },
        ]
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .area-project {
    width: 99%;
    min-height: 100vh;
    background: #ffffff;
    margin: 5px;
    border: 1px solid #000000;
  }
  .area-project-header{
    padding-left: 15px;
    height: 40px;
    line-height:40px;
    vertical-align: middle;
  }
  .area-output{
    display: block;
    float: right;
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    vertical-align: middle;
    color: #ffffff;
    background: #0000ff;
    border-radius: 5px;
    margin:5px;
  }
  .area-head-container{
    background: #ffffff;
  }
  .area-project-main{
    height: 90vh;
  }
  .area-project-bottom{
    width: 100%;
    min-height: 5vh;
    background: #c0ccda;
  }
  .create-project{
    display: block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    text-align: center;
    margin: 5px;
    background: #0000ff;
    border-radius: 5px;
    color: #ffffff;
    float: right;
  }
  .area-table-column{
    white-space:nowrap;
    width:100%;
    overflow:hidden;
    text-overflow:ellipsis;
  }
</style>
<style>
  .area-project .el-table--border td,
  .area-project .el-table--border th {
    border-right: none;
  }
  .area-project .el-table td,
  .area-project .el-table th {
    height: 30px;
    min-width: 0;
    text-overflow: ellipsis;
    vertical-align: middle;
  }
  .area-project .cell {
    padding-right: 0 !important;
  }
</style>
