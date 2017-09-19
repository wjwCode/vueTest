<template>
  <el-row class="greyback">
    <el-col :span="4" class="grey-col-one">
      <div class="left-region">
        <div class="box-card" id="pjoList">
          <div v-for="item in menuItems" class="text item" name="itemList" v-on:click="togglePjo(item,$event)">
            <i class="el-icon-date"/>
            {{item.title}}
          </div>
        </div>
        <el-button type="primary" class="new-folder" @click="dialogVisibleNewFold = true">新建目录</el-button>
      </div>
    </el-col>
    <el-col :span="20" class="grey-col-second">
      <div class="right-region">
        <div class="top-colum">
          <div id="pjoTitlePage" class="pjo-title-page">{{titleName}}</div>
          <div class="handle-btn">
            <PicButton @click="dialogVisibleRename = true" v-on:click="editTitleName()" name="rename"
                       class="pic-button">
              重命名
            </PicButton>
            <el-button type="warning" @click="dialogVisibleDelete= true">删除</el-button>
          </div>
        </div>

        <el-table ref="multipleTable" :data="knowledgeTable" stripe tooltip-effect="dark" class="knowledge-el-table"
                  @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column prop="name" label="标题" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="type" label="类型" width="120">
          </el-table-column>
          <el-table-column prop="size" label="大小" width="120">
          </el-table-column>
          <el-table-column label="发布时间" width="200">
            <template scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column label="重命名" width="120">
            <template scope="scope">
              <i @click="handleRename(scope.$index, scope.row)" class="el-icon-edit">
              </i>
            </template>
          </el-table-column>
          <el-table-column label="下载" width="120">
            <template scope="scope">
              <i @click="handleDown(scope.$index, scope.row)" class="el-icon-date">
              </i>
            </template>
          </el-table-column>
        </el-table>
        <div class="bottom-section">
          <div class="handle-btn">
            <PicButton name="upload" class="pic-button"></PicButton>
            <PicButton name="download" class="pic-button"></PicButton>
            <PicButton name="moveto" class="pic-button"></PicButton>
            <PicButton name="copyto" class="pic-button"></PicButton>
          </div>
        </div>
      </div>

    </el-col>
    <div class="dialog">
      <!--重命名-->
      <el-dialog
        title="请输入名称"
        :visible.sync="dialogVisibleRename"
        size="tiny"
        :before-close="handleClose">
        <span style="float:left;line-height: 36px;">名称:&nbsp&nbsp&nbsp&nbsp</span>
        <div class="input-box">
          <el-input v-model="input.inputRename" placeholder="请输入内容"></el-input>
        </div>

        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibleRename = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisibleRename = false" v-on:click="confirnRename()">确 定</el-button>
  </span>
      </el-dialog>
      <!--新建目录-->
      <el-dialog
        title="请输入名称"
        :visible.sync="dialogVisibleNewFold"
        size="tiny"
        :before-close="handleClose">
        <span class="knowledge-rename">名称:&nbsp&nbsp&nbsp&nbsp</span>
        <div class="input-box">
          <el-input v-model="input.inputNewFold" placeholder="请输入内容"></el-input>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibleNewFold = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisibleNewFold = false" v-on:click="confirnNewFold()">确 定</el-button>
  </span>
      </el-dialog>
      <!--删除目录-->
      <el-dialog
        title="确定要删除所选项吗？"
        :visible.sync="dialogVisibleDelete"
        size="tiny"
        :before-close="handleClose">
        <span>将删除所选项及其所有子项。</span><br>
        <span>操作密码：</span>
        <div class="input-box">
          <el-input v-model="input.inputDelete" placeholder="请输入密码"></el-input>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibleDelete = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisibleDelete = false" v-on:click="confirnDelete()">确 定</el-button>
  </span>
      </el-dialog>
    </div>
  </el-row>
</template>


<script>
  import PicButton from '../utils/PicButton.vue'

  export default {
    name: 'knowledge',
    data() {
      return {
        dialogVisibleRename: false,
        dialogVisibleNewFold: false,
        dialogVisibleDelete: false,
        menuItems: [
          {title: '精华资源（推荐）'}, {title: '报告资源（定期发布）'}, {title: '标准规程（电力运行相关）'}, {title: '辅助资源'}, {title: '新建目录1'},
        ],
        titleName: '精华资源（推荐）',
        input: {inputRename: '', inputNewFold: '', inputDelete: ''},
        knowledgeTable: [{
          date: '2016-05-03',
          name: 'CET电力运营管理软件V1.0',
          type: '.doc',
          size: '102kb'
        }, {
          date: '2016-05-03',
          name: 'CET电力运营管理软件V1.0',
          type: '.doc',
          size: '102kb'
        }, {
          date: '2016-05-03',
          name: 'CET电力运营管理软件V1.0',
          type: '.doc',
          size: '102kb'
        }, {
          date: '2016-05-03',
          name: 'CET电力运营管理软件V1.0',
          type: '.doc',
          size: '102kb'
        }, {
          date: '2016-05-03',
          name: 'CET电力运营管理软件V1.0',
          type: '.doc',
          size: '102kb'
        }, {
          date: '2016-05-03',
          name: 'CET电力运营管理软件V1.0',
          type: '.doc',
          size: '102kb'
        }, {
          date: '2016-05-03',
          name: 'CET电力运营管理软件V1.0',
          type: '.doc',
          size: '102kb'
        }],
        datanew: [{
          date: '2019-05-03',
          name: 'CET电力运营管理软件V2.0',
          type: '.doc',
          size: '00'
        }, {
          date: '2019-05-03',
          name: 'CET电力运营管理软件V2.0',
          type: '.doc',
          size: '00'
        }],
        dataold: [{
          date: '2016-05-03',
          name: 'CET电力运营管理软件V1.0',
          type: '.doc',
          size: '102kb'
        }, {
          date: '2016-05-03',
          name: 'CET电力运营管理软件V1.0',
          type: '.doc',
          size: '102kb'
        }, {
          date: '2016-05-03',
          name: 'CET电力运营管理软件V1.0',
          type: '.doc',
          size: '102kb'
        }],
        multipleSelection: []
      }
    },
    methods: {
      //左侧菜单切换
      togglePjo(item, e) {
        var itemList = document.getElementsByName('itemList');
        for (var i = 0; i < itemList.length; i++) {
          itemList[i].classList.remove('active');
        }
        var e = e.target || e.srcElement;
        e.classList.add('active');
        this.titleName = e.innerText;
        if (item.title == '新建目录1') {
          console.log('true');
          this.titleName = '新建目录1';
          this.knowledgeTable = this.datanew;
        } else if (item.title == '辅助资源') {
          this.titleName = '辅助资源';
          this.knowledgeTable = this.dataold;
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      handleRename(index, row) {

      },
      handleDown(index, row) {
        console.log(index, row)
      },
      editTitleName() {
        this.input.inputRename = this.titleName;
      },

      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      //重命名功能
      confirnRename() {
        this.titleName = this.input.inputRename;
//        this.menuItems[titleNameIndex].title=this.input;
        var itemList = document.getElementById('pjoList');
        itemList = itemList.childNodes;
        console.log(itemList);
        for (var j = 0; j < itemList.length; j++) {
          if (itemList[j].classList.contains("active")) {
            this.menuItems[j].title = this.input.inputRename;
          }
        }
      },
      // 创建新项目并添加选中事件
      confirnNewFold() {
        var newFold = {};
        newFold.title = this.input.inputNewFold;
        this.menuItems.push(newFold);
        this.knowledgeTable = [];
        var itemList = document.getElementsByName('itemList');
        for (var i = 0; i < itemList.length; i++) {
          itemList[i].classList.remove('active');
        }
        itemList[itemList.length - 1].classList.add('active');
      },

    },
    components: {PicButton}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box-card > div {
    border: 1px solid #ADADAD;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    margin: 5px 3px;
    padding: 9px 9px;
  }

  .active {
    background-color: #fff;
  }

  .knowledge-rename {
    float: left;
    line-height: 36px;
  }

  .grey-col-one {
    height: 100%;
    overflow: hidden;
  }

  .grey-col-second {
    height: 100%;
    overflow: hidden;
  }

  .knowledge-el-table {
    width: 100%;
  }

  .right-region {
    border: solid 1px #ADADAD;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    /*height: 768px;*/
    background-color: #fff;
    margin: 0 8px 5px;
    height: 99%;
    position: relative;

  }

  .greyback {
    height: 100%;
    background-color: #E8E8E8;
  }

  .left-region {
    height: 100%;
    position: relative;
  }

  .left-region .new-folder {
    position: absolute;
    bottom: 0px;
    width: 165px;
    margin: 0 auto 18px;
    left: 0;
    right: 0;
  }

  .top-colum {
    height: 50px;
  }

  .pjo-title-page {
    float: left;
    line-height: 50px;
    margin-left: 10px;
  }

  .top-colum > .handle-btn {
    float: right;
    line-height: 50px;
    margin-right: 10px;
  }

  .bottom-section {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 63px;
    background: #EFEFEF;
    border-top: solid #C1C1C1 2px;
    /*border-bottom: solid #C1C1C1 2px;*/

  }

  .bottom-section > .handle-btn {
    float: right;
    line-height: 50px;
    margin: 5px 20px;
  }

  .input-box {
    float: left;
    width: 85%;
  }

  .pic-button {
    display: inline-block;
  }

  .handle-btn > .pic-button {
    vertical-align: middle;
  }
</style>
