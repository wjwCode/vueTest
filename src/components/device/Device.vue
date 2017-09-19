<template>
  <div class="device">
    <el-row type="flex" style="height: 100%">
      <el-col :span="4">
        <div class="device-left-container">
          <div class="device-left-header">
            设备组织结构
          </div>
          <div class="device-left-content">
            <LeftTree v-on:child-say="changeNode" :treeData2="treeData1"></LeftTree>
            <!--<PicButton size="small" name="export"></PicButton>-->
            <div class="create-area-container">
              <a class="create-area" @click="createArea"></a>
            </div>
          </div>
        </div>
        <div class="device-left-container2">
          <div class="device-left-header">
            管理设备模板
            <span class="device-up"></span>
          </div>
        </div>
      </el-col>
      <el-col :span="20" class="device-main">
        <AreaPro :areaData2="areaData1" v-if="this.level1.area"></AreaPro>
        <ProjectPro :projectData2="projectData1" v-if="this.level1.project"></ProjectPro>
        <DeviceList :pdsData2="pdsData1" v-if="this.level1.pds"></DeviceList>
        <!--<pdsPro :pdsData2="pdsData1" v-if="this.level1.pds" ></pdsPro>-->
      </el-col>
    </el-row>
    <el-dialog title="区域" size="tiny" :visible.sync="createAreaDialogVisible">
      <CreateArea></CreateArea>
    </el-dialog>
  </div>
</template>

<script>
  import LeftTree from './pages/LeftTree.vue'
  import AreaPro from './pages/AreaPro.vue'
  import ProjectPro from './pages/ProjectPro.vue'
  import DeviceList from './DeviceList'
  import PicButton from '../utils/PicButton.vue'
  import CreateArea from './pages/area/Create.vue'

  export default {
    name: 'Device',
    data() {
      return {
        createAreaDialogVisible: false,
        level1: {
          area: true,
          project: false,
          pds: false
        },
        treeData1: [
          {
            label: '东区',
            level: 'area',
            id: 1,
            children: [
              {
                label: 'XXXX 项目',
                project_code: 'XM-01-123',
                project_name: 'XXXX 广场项目',
                pds_number: 2,
                device_number: 123,
                touyun_date: '2017-08-10',
                company: 'XXXX有限公司',
                yz_name: 'XXXX',
                address: 'XXX市XXX区XXX路',
                building_square: '123平方米',
                tel: "8888-85679412",
                charger: '张三',
                tel_bak: [
                  {
                    charger: '张三',
                    tel: '8888-12345678',
                    Email: 'XXXXX@XXX.com'
                  }, {
                    connect: '张三',
                    tel: '8888-12345678',
                    Email: 'XXXXX@XXX.com'
                  }, {
                    common_connet: '张三',
                    tel: '8888-12345678',
                    Email: 'XXXXX@XXX.com'
                  },
                ],
                details: 'XXX广场项目是XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                next_level: 'next_level',
                level: 'project',
                id: 2,
                children: [
                  {
                    id: 3,
                    level: 'pds',
                    label: '配电室',
                    pds_number: 'XM-01-123',
                    pds_name: 'XXXX配电室',
                    address: 'XXX市XXX区XXX路XXX号',
                    location: 'E12.3456;W56.2315',
                    number: 123,
                  },
                  {
                    id: 3,
                    level: 'pds',
                    label: '配电室',
                    pds_number: 'XM-01-123',
                    pds_name: 'XXXX配电室',
                    address: 'XXX市XXX区XXX路XXX号',
                    location: 'E12.3456;W56.2315',
                    number: 123,
                  },
                  {
                    id: 4,
                    level: 'pds',
                    label: '配电室',
                    pds_number: 'XM-01-123',
                    pds_name: 'XXXX配电室',
                    address: 'XXX市XXX区XXX路XXX号',
                    location: 'E12.3456;W56.2315',
                    number: 123,
                  }, {
                    id: 5,
                    level: 'pds',
                    label: '配电室',
                    pds_number: 'XM-01-123',
                    pds_name: 'XXXX配电室',
                    address: 'XXX市XXX区XXX路XXX号',
                    location: 'E12.3456;W56.2315',
                    number: 123,
                  }]
              },
              {
                id: 6,
                label: 'XXXX 项目',
                project_code: 'XM-01-123',
                project_name: 'XXXX 广场项目',
                pds_number: 2,
                device_number: 123,
                touyun_date: '2017-08-10',
                company: 'XXXX有限公司',
                tel: "8888-85679412",
                charger: '张三',
                details: 'details',
                next_level: 'next_level',
                level: 'project',
                children: [{
                  id: 7,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }, {
                  id: 8,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }, {
                  id: 9,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }]
              },
              {
                id: 6,
                label: 'XXXX 项目',
                project_code: 'XM-01-123',
                project_name: 'XXXX 广场项目',
                pds_number: 2,
                device_number: 123,
                touyun_date: '2017-08-10',
                company: 'XXXX有限公司',
                tel: "8888-85679412",
                charger: '张三',
                details: 'details',
                next_level: 'next_level',
                level: 'project',
                children: [{
                  id: 7,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }, {
                  id: 8,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }, {
                  id: 9,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }]
              },
              {
                id: 10,
                label: 'XXXX 项目',
                project_code: 'XM-01-123',
                project_name: 'XXXX 广场项目',
                pds_number: 2,
                device_number: 123,
                touyun_date: '2017-08-10',
                company: 'XXXX有限公司',
                tel: "8888-85679412",
                charger: '张三',
                details: 'details',
                next_level: 'next_level',
                level: 'project',
                children: [{
                  id: 11,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }, {
                  id: 12,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }, {
                  id: 13,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }]
              },
            ]
          }, {
            label: '西区',
            level: 'area',
            id: 1,
            children: [
              {
                label: 'XXXX 项目',
                project_code: 'XM-01-123',
                project_name: 'XXXX 广场项目',
                pds_number: 2,
                device_number: 123,
                touyun_date: '2017-08-10',
                company: 'XXXX有限公司',
                tel: "8888-85679412",
                charger: '张三',
                details: 'details',
                next_level: 'next_level',
                level: 'project',
                id: 2,
                /**
                 * {
                 * pds_number
                 * pds_name
                 * address
                 * location
                 * number
                 * }
                 * */
                children: [{
                  id: 3,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                  /**
                   * {
                   * pds_number
                   * pds_name
                   * address
                   * location
                   * number
                   * }
                   * */
                }, {
                  id: 4,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }, {
                  id: 5,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }]
              }, {
                id: 6,
                label: 'XXXX 项目',
                project_code: 'XM-01-123',
                project_name: 'XXXX 广场项目',
                pds_number: 2,
                device_number: 123,
                touyun_date: '2017-08-10',
                company: 'XXXX有限公司',
                tel: "8888-85679412",
                charger: '张三',
                details: 'details',
                next_level: 'next_level',
                level: 'project',
                children: [{
                  id: 7,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }, {
                  id: 8,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }, {
                  id: 9,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }]
              }, {
                id: 10,
                label: 'XXXX 项目',
                project_code: 'XM-01-123',
                project_name: 'XXXX 广场项目',
                pds_number: 2,
                device_number: 123,
                touyun_date: '2017-08-10',
                company: 'XXXX有限公司',
                tel: "8888-85679412",
                charger: '张三',
                details: 'details',
                next_level: 'next_level',
                level: 'project',
                children: [{
                  id: 11,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }, {
                  id: 12,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }, {
                  id: 13,
                  level: 'pds',
                  label: '配电室',
                  pds_number: 'XM-01-123',
                  pds_name: 'XXXX配电室',
                  address: 'XXX市XXX区XXX路XXX号',
                  location: 'E12.3456;W56.2315',
                  number: 123,
                }]
              },
            ]
          },
        ],
        areaData1: [],
        projectData1: [],
        pdsData1: [],
        nodeDetails: {
          level: 'area'
        },
        nodeLevel: 0,

      }
    },
    created: function () {
      this.areaData1 = this.treeData1[0]
    },
    methods: {
      createArea: function () {
        this.createAreaDialogVisible = true
      },
      changeNode: function (node) {
        this.nodeDetails = node;
        if (this.nodeDetails.level == 'area') {
          this.level1 = {
            area: true,
            project: false,
            pds: false
          };
          this.areaData1 = this.nodeDetails
          console.log(this.areaData1);
        } else if (this.nodeDetails.level == 'project') {
          this.level1 = {
            area: false,
            project: true,
            pds: false
          };
          this.projectData1 = this.nodeDetails
        } else if (this.nodeDetails.level == 'pds') {
          this.level1 = {
            area: false,
            project: false,
            pds: true
          };
        }
      }
    },
    components: {
      LeftTree,
      AreaPro,
      ProjectPro,
      DeviceList,
      PicButton,
      CreateArea
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .device {
    width: 100%;
    height: 100%;
  }

  .device-left-content {
    width: 100%;
    height: 100%;
  }

  .device-left-header {
    background: #EAEBEC;
    color: #757677;
    text-align: center;
    line-height: 30px;
    vertical-align: middle;
    /* font-size: 14px; */
    font-weight: bold;
  }

  .create-area-container {
    border-top: 1px solid #ADADAD;
  }

  .create-area {
    display: block;
    width: calc(100% - 10px);
    height: 30px;
    margin: 5px;
    background-image: url("./assets/create-area.png");
    background-size: 100% 100%;
    color: #ffffff;
    text-align: center;
    line-height: 30px;
    vertical-align: middle;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
  }

  .device-left-container {
    width: calc(100% - 12px);
    height: calc(100% - 40px);
    background: #ffffff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 5px;
    padding: 0;
    position: relative;
    overflow: hidden;
    border: 1px solid #ADADAD;
    -webkit-box-shadow: 0px 2px 10px #ADADAD;
    box-shadow: 0px 2px 10px #ADADAD;
  }

  .device-left-container2 {
    width: calc(100% - 12px);
    height: 30px;
    background: #ffffff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 5px;
    padding: 0;
    position: relative;
    overflow: hidden;
    border: 1px solid #ADADAD;
    -webkit-box-shadow: 0px 2px 10px #ADADAD;
    box-shadow: 0px 2px 10px #ADADAD;
  }

  .device-main {
    height: calc(100% - 6px);
    background: #ffffff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 5px;
    padding: 0;
    position: relative;
    overflow: hidden;
    border: 1px solid #ADADAD;
    -webkit-box-shadow: 0px 2px 10px #ADADAD;
    box-shadow: 0px 2px 10px #ADADAD;
  }

  .device-left-tree {
    width: 100%;
    height: calc(100% - 70px);
    overflow-x: hidden;
  }

  .device-up {
    display: block;
    float: right;
    margin: 10px;
    width: 10px;
    height: 10px;
    background-image: url("./assets/up.png");
    background-size: 100% 100%;
  }
</style>
<style>
  .device .el-tree {
    border: none;
    /*border-bottom: 1px solid #cccccc;*/
  }

  .device > .el-dialog__wrapper > .el-dialog.el-dialog--tiny > .el-dialog__body {
    padding: 0;
  }
</style>
