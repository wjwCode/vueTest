<template>
  <div class="area-project">
    <div class="area-head-container">
      <el-row type="flex">
        <el-col :span="20">
          <div class="area-project-header">
            <!--<li class="history"></li>-->
            <li>{{this.projectData2.label}}</li>
            <li class="row-detail" @click="queryProject(projectData2)"></li>
          </div>
        </el-col>
        <el-col :span="4">
          <PicButton size="small" name="export" class="project-export"></PicButton>
        </el-col>
      </el-row>
    </div>
    <div class="area-project-main">
      <el-row type="flex">
        <el-col :span="24">
          <div>
            <el-table
              :data="this.projectData2.children"
              border
              stripe
              style="width: 100%">
              <el-table-column
                label="配电室编号">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.pds_number}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="配电室名称">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.pds_name}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="地址">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.address}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="位置">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.location}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="设备数量">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.number}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="下一级">
                <template scope="scope">
                  <el-button
                    @click.native.prevent="nextLevel(scope.$index, projectData2.children)"
                    type="text"
                    size="small"
                    class="row-next-level">
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
          <span class="total-project">共{{this.projectData2.children.length}}个配电室</span>
        </el-col>
        <el-col :span="4">
          <a class="create-pds"></a>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="区域" size="small" :visible.sync="queryProjectDialogVisible">
      <QueryProject :rowData1="projectData2"></QueryProject>
    </el-dialog>
  </div>
</template>

<script>
  import PicButton from '../../utils/PicButton.vue'
  import QueryProject from './project/Query.vue'

  export default {
    name: 'areaPro',
    props: ['projectData2'],
    /**
     * {
     * pds_number
     * pds_name
     * address
     * location
     * number
     * }
     * */
    data() {
      return {
        queryProjectDialogVisible:false
      };
    },
    methods: {
      queryProject: function (projectData) {
        console.log(projectData)
        this.queryProjectDialogVisible = true
      },
      handleNodeClick(data) {
        console.log(data)
      },
      rowDetail(index, row) {
        console.log(index)
        console.log(row)
      },
      nextLevel(index, row) {
        console.log(index)
        console.log(row)
      }
    },
    components: {
      PicButton,
      QueryProject
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul, li {
    list-style: none;
  }

  .area-project {
    /*width: 99%;*/
    /*min-height: 100vh;*/
    /*background: #ffffff;*/
    /*margin: 5px;*/
    /*border: 1px solid #ACB1B1;*/
    height: 100%;
  }

  .area-project-header {
    padding-left: 15px;
    height: 30px;
    padding-top: 10px;
  }

  .area-project-header li {
    float: left;
    margin: 0 2.5px;
  }

  .area-output {
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
    margin: 5px;
  }

  .area-head-container {
    background: #ffffff;
  }

  .area-project-main {
    height: calc(100% - 80px);
    overflow-x: hidden;
  }

  .area-project-bottom {
    width: 100%;
    min-height: 40px;
    background: #EEEFF0;
  }

  .create-pds {
    display: block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    text-align: center;
    margin: 5px;
    background-image: url("../assets/create-pds.png");
    background-size: 100% 100%;
    border-radius: 5px;
    color: #ffffff;
    float: right;
  }

  .area-table-column {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .total-project {
    display: block;
    width: auto;
    height: 40px;
    /* background: red; */
    padding-left: 15px;
    line-height: 40px;
    vertical-align: middle;
  }

  .row-detail {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("../assets/details.png");
    background-size: 100% 100%;
    border-radius: 50%;
  }

  .row-next-level {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("../assets/next-level.png");
    background-size: 100% 100%;
    border-radius: 50%;
  }

  .history {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("../assets/history.png");
    background-size: 100% 100%;
    border-radius: 50%;
  }

  .device-output {
    display: block;
    width: 60px;
    height: 30px;
    background-image: url("../assets/output.png");
    background-size: 100% 100%;
    border-radius: 5px;
    float: right;
    margin: 5px;
  }
  .project-export{
    float: right;

  }
</style>
<style>
  .area-project .el-table--border td,
  .area-project .el-table--border th {
    border: none;
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

  .area-project .el-table th > .cell {
    color: #8D8E8F;
    background: #EEEFF1;
    word-wrap: normal;
    text-overflow: ellipsis;
    line-height: 30px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
