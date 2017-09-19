<template>
  <div class="user-section c">
    <div class="user-section-left fl">
      <div class="user-section-left-wrap">
        <div class="user-section-left-top">
          <div class="text-left">系统用户总数</div>
          <h1 class="text-center">{{total}}</h1>
          <hr/>
        </div>
        <div class="user-section-left-bottom">
          <div class="text-left">分角色统计</div>
          <ul class="user-section-left-bottom-ul text-left">
            <li class="c" v-for="item in lists">
              <span class="fl">{{item.post}}：</span>
              <i name="total" class="fl">{{item.number}}</i>
            </li>
          </ul>
          <div class="user-section-left-bottom-div">
            <el-button type="primary" class="fl" @click="dialogVisible">角色管理</el-button>
            <rolemanagement  class="rolemanagementpopup" @child-say="rolemanagement" v-if="rolemanagementshow"/>
            <el-button type="primary" class="fl" @click="dialogVisible1">项目授权方案管理</el-button>
            <projectAuthorization  class="projectAuthorizationpopup" @child-say="projectAuthorization" v-if="projectAuthorizationshow"/>
          </div>
        </div>
      </div>
    </div>
    <div class="user-section-right fl">
      <div class="user-section-right-wrap">
        <div class="user-section-right-wrap-header">
          <h1 class="text-left fl">用户列表</h1>
          <div class="user-section-right-wrap-header-newuser fl">
            <PicButton name="export" size="small" class="fr" @click="dialogVisible2"></PicButton>
            <newuser class="newuserpopup" @child-say="newuser" v-if="newusershow"></newuser>
            <PicButton name="export" size="small" class="fr"></PicButton>
          </div>
        </div>
        <ul>
          <li class="c">
            <span>序号</span>
            <span>用户名</span>
            <span>角色</span>
            <span>姓名</span>
            <span>联系方式</span>
            <span>部门</span>
            <span>项目授权</span>
            <span>状态</span>
          </li>
          <li v-for="i in links" class="c" v-if="i.isremove">
            <span>{{i.id}}</span>
            <span>{{i.username}}</span>
            <span>{{i.role}}</span>
            <span>{{i.name}}</span>
            <span>{{i.phone}}</span>
            <span>{{i.branch}}</span>
            <span>{{i.projectAuthorization}}</span>
            <span :class="i.classname">{{i.state}}</span>
            <a type="danger" class="fr" @click="del(i.id-1)">{{i.remove}}</a>
            <a type="primary" class="fr" @click="dialogVisible2">{{i.alter}}</a>
            <a type="primary" v-if="i.clear" class="fr" @click="success(i.id-1)">{{i.clear}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import rolemanagement from './rolemanagement'
import projectAuthorization from './projectAuthorization'
import newuser from './newuser'
import PicButton from '../utils/PicButton.vue'
export default {
  components: {rolemanagement,projectAuthorization,newuser,PicButton},
  mounted() {
    this.count()
  },
  methods: {
    dialogVisible(){
      this.rolemanagementshow = true
    },
    dialogVisible1(){
      this.projectAuthorizationshow = true
    },
    dialogVisible2(){
      this.newusershow = true
    },
    rolemanagement(rolemanagementmsg) {
      this.rolemanagementshow = rolemanagementmsg
    },
    projectAuthorization (projectAuthirizationhidemsg) {
      this.projectAuthorizationshow = projectAuthirizationhidemsg
    },
    newuser(newusermsg) {
      this.newusershow = newusermsg
    },
    success(index){
      this.$alert('已解锁', '操作成功', {
          confirmButtonText: '确定'
      });
      this.links.map(function(v,i){
        if(i==index){
          v.state='正常'
          v.classname='cgreen'
          v.clear=""
        }
      })
    },
    del(index){
      this.remove = false
      this.links.map(function(v,i){
        if(i==index){
          v.isremove=false
        }
      })
    },
    count(){
      let total = document.getElementsByName('total')
      let alltotal=0
      for (let i = 0; i <total.length; i++) {
         alltotal += Number(total[i].innerText)
      }
      this.total = alltotal
    }
  },
  name: 'user',
  data () {
    return {
      rolemanagementshow: false,
      projectAuthorizationshow: false,
      newusershow: false,
      total: 45,
      links:[
        {
          id: 1,
          username: 'Cylic_1',
          role: '调度员',
          name: '张三1',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cgreen',
          state: '正常',
          clear: '',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 2,
          username: 'Cylic_2',
          role: '调度员',
          name: '张三2',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cgreen',
          state: '正常',
          clear: '',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 3,
          username: 'Cylic_3',
          role: '调度员',
          name: '张三3',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cgreen',
          state: '正常',
          clear: '',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 4,
          username: 'Cylic_4',
          role: '调度员',
          name: '张三4',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cgreen',
          state: '正常',
          clear: '',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 5,
          username: 'Cylic_5',
          role: '调度员5',
          name: '张三',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cgreen',
          state: '正常',
          clear: '',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 6,
          username: 'Cylic_6',
          role: '调度员',
          name: '张三6',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cyellow',
          state: '锁定',
          clear: '解锁',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 7,
          username: 'Cylic_7',
          role: '调度员',
          name: '张三7',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cgreen',
          state: '正常',
          clear: '',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 8,
          username: 'Cylic_8',
          role: '调度员',
          name: '张三8',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cyellow',
          state: '锁定',
          clear: '解锁',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 9,
          username: 'Cylic_9',
          role: '调度员',
          name: '张三9',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cgreen',
          state: '正常',
          clear: '',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 10,
          username: 'Cylic_10',
          role: '调度员',
          name: '张三10',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cgreen',
          state: '正常',
          clear: '',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 11,
          username: 'Cylic_11',
          role: '调度员',
          name: '张三11',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cgreen',
          state: '正常',
          clear: '',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 12,
          username: 'Cylic_12',
          role: '调度员',
          name: '张三12',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cgreen',
          state: '正常',
          clear: '',
          alter: '修改',
          remove: '删除',
          isremove: true
        },
        {
          id: 13,
          username: 'Cylic_13',
          role: '调度员',
          name: '张三13',
          phone: '13512345678',
          branch: 'XXXXX部门',
          projectAuthorization: '所有项目',
          classname: 'cgray',
          state: '已删除',
          clear: '',
          alter: '修改',
          remove: '删除',
          isremove: true
        }
      ],
      lists:[
        {post: '超级管理员',number: 1},
        {post: '管理员',number: 2},
        {post: '调度员',number: 4},
        {post: '检修员',number: 12},
        {post: '巡检员',number: 6},
        {post: '预试员',number: 8},
        {post: '业主用户',number: 16},
      ]
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
  .cgreen{color: #66CC33 !important;}
  .cyellow{color: #FF9900 !important;}
  .cgray{color: #999999 !important;}
  .rolemanagementpopup{
    position: absolute;
    z-index: 1;
    top:0;
    left:20%;
    width: 60%;
    height: 68.5%;
    cursor: pointer;
  }
  .projectAuthorizationpopup{
    position: absolute;
    z-index: 1;
    top:-2%;
    left:20%;
    width: 60%;
    height: 68.5%;
    cursor: pointer;
  }
  .newuserpopup{
    position: absolute;
    z-index: 1;
    top:-5%;
    left:35%;
    width: 32%;
    height: 77.5%;
    cursor: pointer;
  }
  .user-section{
    width:100%;
    min-height: 90%;
    margin-top: 1%;
  }
  .user-section .user-section-left{
    width: 28%;
    background: black;
    margin: 0 0.5% 0 1.5%;
    border-radius: 1.5%;
  }
  .user-section .user-section-left .user-section-left-wrap{
    width: 96%;
    padding: 3% 2% 4.5%;
    color: white;
    font-size: 1.3rem;
  }
  .user-section .user-section-left .user-section-left-wrap .user-section-left-top{
    width: 100%;
  }
  .user-section .user-section-left .user-section-left-wrap .user-section-left-top h1{
    width: 100%;
    line-height: 15vh;
    color: #FFCC01;
    font-size: 3rem;
  }
  .user-section .user-section-left .user-section-left-wrap .user-section-left-bottom{
    width: 100%;
    min-height: 56vh;
    padding: 2vh 0 0 0;
  }
  .user-section .user-section-left .user-section-left-wrap .user-section-left-bottom ul{
    width: 90%;
    margin: 4% 3% 0;
    border-radius: 2%;
    background: #333333;
    padding: 5% 2%;
  }
  .user-section .user-section-left .user-section-left-wrap .user-section-left-bottom ul li{
    width: 96%;
    min-height: 4.5vh;
    line-height: 4.5vh;
    color: #999999;
  }
  body .user-section .user-section-left .user-section-left-wrap .user-section-left-bottom ul li:hover,.user-section .user-section-right .user-section-right-wrap ul li:hover{
    background: #09546A;
  }
  .user-section .user-section-left .user-section-left-wrap .user-section-left-bottom ul li span{
    width: 30%;
  }
  .user-section .user-section-left .user-section-left-wrap .user-section-left-bottom ul li i{
    width: 70%;
    text-align: right;
    color: #B3F4F8;
  }
  .user-section .user-section-left .user-section-left-wrap .user-section-left-bottom .user-section-left-bottom-div{
    width: 96%;
    margin: 0 2% 0;
    padding-top: 23%;
    height: 40px;
  }
  .user-section .user-section-left .user-section-left-wrap .user-section-left-bottom .user-section-left-bottom-div .el-button {
    width: 48%;
    line-height: 3vh;
    padding: 1vh 3%;
  }
  .user-section .user-section-left .user-section-left-wrap .user-section-left-bottom .user-section-left-bottom-div a:nth-child(1){
    margin-right: 1%;
  }
  .user-section .user-section-left .user-section-left-wrap .user-section-left-bottom .user-section-left-bottom-div a:nth-child(2){
    margin-left: 1%;
  }
  .user-section .user-section-right{
    width: 68%;
    margin: 0 1.5% 0 0.5%;
    height: 79vh;
    background: black;
    border-radius: 1%;
  }
  .user-section .user-section-right .user-section-right-wrap{
    width: 100%;
    min-height: 75vh;
    padding: 2vh 0;
  }
  .user-section .user-section-right .user-section-right-wrap .user-section-right-wrap-header{
    width: 96%;
    margin: 0 2%;
    height: 5vh;
  }
  .user-section .user-section-right .user-section-right-wrap .user-section-right-wrap-header h1{
    font-size: 2.5rem;
    color: white;
    width:50%;
  }
  .user-section .user-section-right .user-section-right-wrap .user-section-right-wrap-header .user-section-right-wrap-header-newuser{
    width:50%;
    height: 100%;
    color: white;
  }
  .user-section .user-section-right .user-section-right-wrap .user-section-right-wrap-header .user-section-right-wrap-header-newuser .picbutton-medium{
    width:80px;
  }
  .user-section .user-section-right .user-section-right-wrap ul{
    width: 100%;
    height: 74vh;
  }
  .user-section .user-section-right .user-section-right-wrap ul li{
    width: 96%;
    height:4vh;
    margin: 1vh 2%;
    border: 1px solid #546172;
    line-height: 4vh;
    font-size: 1.3rem;
  }
  body .user-section .user-section-right .user-section-right-wrap ul li:nth-child(1){
    border: 2px solid #546172;
    border-style: solid none;
    font-size: 1.2rem;
    height:2.5vh;
    line-height: 2.5vh;
    width: 96%;
    padding: 0 2%;
    margin: 0;
  }
  body .user-section .user-section-right .user-section-right-wrap ul li:nth-child(1) span {
    text-align: center;
    color: #999999;
  }
  .user-section .user-section-right .user-section-right-wrap ul li span{
    width: 9.2%;
    height: 2vh;
    color: white;
    float: left;
    height: 100%;
    text-align: center;
  }
  .user-section .user-section-right .user-section-right-wrap ul li a{
    height: 100%;
    width: 6%;
    color: white;
    text-align: center;
    display: none;
    cursor: pointer;
  }
  .user-section .user-section-right .user-section-right-wrap ul li:hover a{
    display: block;
  }
  .user-section .user-section-right .user-section-right-wrap ul li a:nth-child(9){
    background: red;
  }
  .user-section .user-section-right .user-section-right-wrap ul li a:nth-child(10),.user-section .user-section-right .user-section-right-wrap ul li a:nth-child(11){
    background: #09546A;
  }
  .user-section .user-section-right .user-section-right-wrap ul li a
  body .user-section .user-section-right .user-section-right-wrap ul li span:nth-child(5),body .user-section .user-section-right .user-section-right-wrap ul li span:nth-child(6){
    width: 12%;
  }
</style>
