<template>
    <div class="rolemanagement" id="drag" v-drag="">
        <div class="rolemanagement-header c">
          <h1 class="fl">角色管理</h1>
          <div class="bg el-icon-close fr" @click="rolemanagementhide">
          </div>
        </div>
        <div class="rolemanagement-section c">
          <div class="rolemanagement-section-left fl">
            <div class="rolemanagement-section-left-top">
              <p v-for="item in links" v-text="item.name" :class="{aa:item.isaa}" @click="setaa(item.id)"></p>
            </div>
            <el-button type="primary" active-class="aa" @click="newrolechange">创建</el-button>
            <newrole  class="newrolepopup" @child-say="newrole" v-if="newroleshow"></newrole>
          </div>
          <div class="rolemanagement-section-right fl" v-for="i in links" v-if="indexs==i.id">
            <div class="superAdministrator c">
              <div class="superAdministrator-header fl c">
                <span class="superAdministrator-header-left fl">{{i.name}}</span>
                <div class="superAdministrator-header-right fl text-right">
                  <el-button type="primary" @click="newrolechange">修改</el-button>
                  <el-button type="danger">删除</el-button>
                </div>
              </div>
              <div class="superAdministrator-section fl c">
                <div class="superAdministrator-section-left fl">
                </div>
                <div class="superAdministrator-section-right fl">
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import PicButton from '../utils/PicButton.vue'
  import newrole from './newrole'
  export default {
    components: { PicButton,newrole},
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
            }
          }
      }
    },
    name: 'rolemanagement',
    data () {
      return {
        rolemanagementmsg:false,
        newroleshow: false,
        indexs: 0,
        links:[
          {name:'超级管理员',id: 0,isaa: true},
          {name:'管理员',id: 1,isaa: false},
          {name:'调度员',id: 2,isaa: false},
          {name:'运维人员',id: 3,isaa: false},
          {name:'检修员',id: 4,isaa: false},
          {name:'预试员',id: 5,isaa: false},
          {name:'巡检员',id: 6,isaa: false},
          {name:'巡检+检修',id: 7,isaa: false},
          {name:'预试+检修',id: 8,isaa: false}
        ]
      }
    },
    methods: {
      newrolechange(){
        this.newroleshow = true
      },
      rolemanagementhide(){
        this.$emit('child-say',this.rolemanagementmsg)
      },
      newrole(newrolemsg) {
        this.newroleshow =  newrolemsg
      },
      setaa(index) {
        this.links.map(function(v,i){
          i==index? v.isaa=true: v.isaa=false
        })
        this.indexs=index
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
  .newrolepopup{
    position: absolute;
    z-index: 1;
    left:35%;
    width: 55%;
    height: 68vh;
    cursor: pointer;
  }
  .aa{
    background: #1E90FF;
  }
  .rolemanagement{
    border: 1px solid #98D9DF;
    background: rgba(0,0,0,0.8);
    color: white;
  }
  .rolemanagement .rolemanagement-header{
    width: 96%;
    height: 8vh;
    padding: 0 2%;
    line-height: 8vh;
    border-bottom: 1px solid #546172;
  }
  .rolemanagement .rolemanagement-header h1{
    font-size: 2rem;
  }
  .rolemanagement .rolemanagement-header .bg{
    width: 5%;
    height: 3vh;
    margin-top: 2vh;
    font-size: 2rem;
    font-weight: normal;
  }
  .rolemanagement .rolemanagement-section{
    width: 100%;
  }
  .rolemanagement .rolemanagement-section .rolemanagement-section-left{
    width: 26%;
    padding: 1vh 2%;
    height: 50vh;
    border-right: 1px solid #546172;
  }
  .rolemanagement .rolemanagement-section .rolemanagement-section-left .rolemanagement-section-left-top{
    width: 100%;
    height: 42vh;
    margin-bottom: 2.5vh;
    border: 1px solid #325CA1;
    background: #006582;
  }
  .rolemanagement .rolemanagement-section .rolemanagement-section-left .rolemanagement-section-left-top p{
    height: 3vh;
    text-align: left;
    line-height: 3vh;
    font-size: 1rem;
  }
  .rolemanagement .rolemanagement-section .rolemanagement-section-left .el-button{
    width: 100%;
    height: 8%;
  }
  .rolemanagement .rolemanagement-section .rolemanagement-section-right{
    width: 69.86%;
    height: 50vh;
  }
  .superAdministrator{
    width: 100%;
    height: 100%;
  }
  .superAdministrator .superAdministrator-header{
    width: 100%;
    height: 6vh;
    line-height: 6vh;
    border-bottom: 1px solid #546172;
  }
  .superAdministrator .superAdministrator-header .superAdministrator-header-left{
    width: 47%;
    font-size: 2rem;
    text-align: left;
    padding-left: 3%;
  }
  .superAdministrator .superAdministrator-header .superAdministrator-header-right{
    width: 50%;
  }
  .superAdministrator .superAdministrator-header .superAdministrator-header-right .el-button{
    width: 30%;
    height: 25px;
    margin-right: 3%;
    margin-left: 0;
  }
  .superAdministrator .superAdministrator-section{
    width: 100%;
    height: 46vh;
  }
  .superAdministrator .superAdministrator-section .superAdministrator-section-left{
    width: 70%;
    height: 100%;
    border-right: 1px solid #546172;
  }
  .superAdministrator .superAdministrator-section .superAdministrator-section-right{
    width: 30%;
    height: 100%;
  }
</style>
