<template>
  <div class="newuser" id="drag" v-drag="">
    <div class="newuser-header c">
      <h1 class="fl text-left">添加用户</h1>
      <div class="bg el-icon-close fr" @click="newuserhide">
      </div>
    </div>
    <form action="">
      <div class="newuser-section1 c">
          <div class="newuser-section1-form c">
            <i class="fl">用户名*：</i>
            <input class="fl" type="text" placeholder="请填写用户名">
          </div>
          <div class="newuser-section1-form c">
            <i class="fl">密码设置*：</i>
            <input class="fl" type="password" placeholder="两次输入的密码不一致">
          </div>
          <div class="newuser-section1-form c">
            <i class="fl">密码确认*：</i>
            <input class="fl" type="password" placeholder="两次输入的密码不一致">
          </div>
      </div>
      <div class="newuser-section2 c">
        <div class="newuser-section2-form c">
          <i class="fl">角色*：</i>
          <select>
            <option v-for="item in links" value="">{{item.name}}</option>
          </select>
        </div>
        <div class="newuser-section2-form c">
          <i class="fl">项目授权*：</i>
          <select>
            <option v-for="i in lists" value="">{{i.name}}</option>
          </select>
        </div>
      </div>
      <div class="newuser-section3 c">
        <div class="newuser-section3-form c">
          <i class="fl">姓名*：</i>
          <input class="fl" type="text">
        </div>
        <div class="newuser-section3-form c">
          <i class="fl">联系方式*：</i>
          <input class="fl" type="number">
        </div>
        <div class="newuser-section3-form c">
          <i class="fl">部门*：</i>
          <select>
            <option v-for="v in list" value="">{{v.name}}</option>
          </select>
        </div>
        <el-button type="primary" @click="success();newuserhide()">确定</el-button>
        <el-button type="primary" @click="newuserhide">取消</el-button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'newuser',
    directives:{
      drag:{//自定义指令
        bind: function (el) {
          let oDiv = el   //当前元素
          oDiv.onmousedown = function (e) {
            //鼠标按下，计算当前元素距离可视区的距离
            let disX = e.clientX - oDiv.offsetLeft
            let disY = e.clientY - oDiv.offsetTop
            document.onmousemove = function (e) {
              //通过事件委托，计算移动的距离
              let l = e.clientX - disX
              let t = e.clientY - disY
              //移动当前元素
              oDiv.style.left = l + 'px'
              oDiv.style.top = t + 'px'
            }
            document.onmouseup = function (e) {
              document.onmousemove = null
              document.onmouseup = null
              //改变当前对象的z-index值
              oDiv.style.zIndex++
            }
            el.stopPropagation()
            console.log(oDiv)
          }
        }
      }
    },
    data () {
      return {
        newusermsg:false,
        indexs: 0,
        links:[
          {name:'请选择',id: 0,isaa: true},
          {name:'超级管理员',id: 1,isaa: false},
          {name:'管理员',id: 2,isaa: false},
          {name:'调度员',id: 3,isaa: false},
          {name:'运维人员',id: 4,isaa: false},
          {name:'检修员',id: 5,isaa: false},
          {name:'预试员',id: 6,isaa: false},
          {name:'巡检员',id: 7,isaa: false},
          {name:'巡检+检修',id: 8,isaa: false},
          {name:'预试+检修',id: 9,isaa: false}
        ],
        lists: [
          {name:'请选择',id: 0,isaa: true},
          {name:'所有',id: 1,isaa: false},
          {name:'东部3项目管理组',id: 2,isaa: false},
          {name:'西部4项目管理组',id: 3,isaa: false},
          {name:'新增项目组',id: 4,isaa: false}
        ],
        list: [
          {name:'请选择',id: 0,isaa: true},
          {name:'XXXX部门',id: 1,isaa: false},
          {name:'XXXX部门',id: 2,isaa: false},
          {name:'XXXX部门',id: 3,isaa: false},
          {name:'XXXX部门',id: 4,isaa: false}
        ]
      }
    },
    methods: {
      newuserhide(){
        this.$emit('child-say',this.newusermsg);
      },
      success(){
        this.$alert('已增加', '操作成功', {
          confirmButtonText: '确定'
        })
      }
    }
  }
</script>

<style scoped>
  /*公用样式*/
  *{margin: 0;
    padding:0;}
  a{text-decoration: none}
  html{font-size: 10px !important;font-family: '微软雅黑';}
  body{font-size:1rem;}
  .fl{float: left;}
  .fr{float: right;}
  .c{clear: both;}
  .text-left{text-align: left;}
  .text-right{text-align: right}
  .text-center{text-align: center;}
  i{font-style: normal;display: inherit;}
  span,a{display: inherit;}
  ul{list-style: none;}
  span{display: inline-block}

  /*单页面样式*/
  .aa{
    background: #1E90FF;
  }
  .newuser{
    border: 1px solid #98D9DF;
    background: rgba(0,0,0,0.8);
    color: white;
  }
  .newuser .newuser-header{
    width: 96%;
    height: 8vh;
    padding: 0 2%;
    line-height: 8vh;
    border-bottom: 1px solid #546172;
  }
  .newuser .newuser-header h1{
    font-size: 2rem;
  }
  .newuser .user-header .bg{
    width: 5%;
    height: 3vh;
    margin-top: 2vh;
    font-size: 2rem;
    font-weight: normal;
  }
  body .newuser .newuser-header{
    padding: 0 2% 0 3%;
    width: 95%;
  }
  body .newuser .newuser-header .bg{
    width:10%;
    margin-top: 2.5vh;
    font-size: 2rem;
  }
  .newuser .newuser-section1,.newuser .newuser-section2{
    width: 100%;
    height: 21vh;
    border-bottom: 1px solid #546172;
  }
  body .newuser .newuser-section2{
    height: 14vh;
  }
  .newuser .newuser-section1 .newuser-section1-form,.newuser .newuser-section2 .newuser-section2-form,.newuser .newuser-section3 .newuser-section3-form{
    width: 90%;
    height: 5vh;
    line-height: 7vh;
    display: inherit;
    font-size: 1.5rem;
    color: #7a7a7b;
    text-align: left;
    margin: 0 5%;
  }
  .newuser .newuser-section1 .newuser-section1-form i,.newuser .newuser-section2 .newuser-section2-form i,.newuser .newuser-section3 .newuser-section3-form i{
    width: 22%;
    height: 100%;
  }
  .newuser .newuser-section1 .newuser-section1-form input,.newuser .newuser-section2 .newuser-section2-form select ,.newuser .newuser-section3 .newuser-section3-form input,.newuser .newuser-section3 .newuser-section3-form select{
    width: 75%;
    height: 45%;
    margin-top: 1.5vh;
    background: #006582;
    text-align: right;
    color: white;
  }
  body .newuser .newuser-section1 .newuser-section1-form input::input-placeholder{
    color: red !important;
  }
  body .newuser .newuser-section2 .newuser-section2-form select,body .newuser .newuser-section3 .newuser-section3-form select{
    height: 60%;
    background: #006582;
    text-align: left;
    width: 76%;
    color: white;
  }
  .newuser .newuser-section3 .el-button{
    width: 20%;
    height: 4vh;
    margin-top: 4vh;
    text-align: center;
  }
  .newuser .newuser-section3 .el-button:nth-child(4){
    margin-left: 28vh;
  }
  .newuser .newuser-section3 .el-button span{
    width: 100% !important;
    background: #079DF0;
    height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    line-height: 0.8vh;
  }
</style>
