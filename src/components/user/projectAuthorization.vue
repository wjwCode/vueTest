<template>
  <div class="projectAuthirization" id="drag" v-drag="">
    <div class="projectAuthirization-header c">
      <h1 class="fl">项目授权方案管理</h1>
      <div class="bg el-icon-close fr" @click="projectAuthirizationhide">
      </div>
    </div>
    <div class="projectAuthirization-section c">
      <div class="projectAuthirization-section-left fl">
        <div class="projectAuthirization-section-left-top">
          <p v-for="item in links" v-text="item.name" :class="{aa:item.isaa}" @click="setaa(item.id)"></p>
        </div>
        <el-button type="primary" active-class="aa" @click="dialogVisible">创建</el-button>
        <creatusers class="popup3" @child-say="creatusers" v-if="creatusersshow"></creatusers>
      </div>
      <div class="projectAuthirization-section-right fl" v-for="i in links" v-if="indexs==i.id">
        <div class="superAdministrator c">
          <div class="superAdministrator-header fl c">
            <span class="superAdministrator-header-left fl">{{i.name}}</span>
            <div class="superAdministrator-header-right fl text-right">
              <el-button type="primary" @click="dialogVisible">修改</el-button>
              <el-button type="danger">删除</el-button>
            </div>
          </div>
          <div class="superAdministrator-section fl c">
            <div class="superAdministrator-section-left fl">
              <p class="text-left">权限预览：</p>
              <div class="superAdministrator-section-left-section">
                <ul>
                  <li v-for="x in i.allsection">
                    <h3 class="c">
                      <i name="icon" :class="classname" @click="areasectionchange(x.areaid, x.areaid)"></i>
                      <input @click="checkbox(x.inputId, x.inputname)" :id="x.inputId" type="checkbox">{{x.area}}
                    </h3>
                    <div :id="x.areaid" class="superAdministrator-section-left-section-div">
                      <span  v-for="v in x.areasection">
                        <input :name="x.inputname" type="checkbox">{{v.text}}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <p class="text-left">共个项目</p>
            </div>
            <div class="superAdministrator-section-right fl">
              <p>关联的用户：</p>
              <div class="superAdministrator-section-right-section">
                <p v-for="x in i.users" name="username" :id="x.usersid" :class="x.classname" @click="seta(x.usersid, 'username')">{{x.name}}</p>
              </div>
              <p>共人</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import creatusers from './creatusers'
  export default {
    components: { creatusers},
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
    name: 'projectAuthirization',
    data () {
      return {
        projectAuthirizationhidemsg:false,
        creatusersshow: false,
        eastaressectionshow: false,
        classname: 'el-icon-caret-top',
        indexs: 0,
        links:[
        {
          name:'全局项目',
          id: 0,
          isaa: true,
          allsection:[
            {
              area: '东区',
              areaid: 0,
              divId: 'i1',
              inputId: 'a1',
              inputname: 'allcheckbox',
              areasection:[
              {text: '东区XXXXX项目组1'},
              {text: '东区XXXXX项目组2'},
              {text: '东区XXXXX项目组3'},
              {text: '东区XXXXX项目组4'}
            ]},
            {
              area: '西区',
              areaid: 1,
              divId: 'i2',
              inputId: 'a2',
              inputname: 'allcheckbox2',
              areasection: [
                {text: '西区XXXXX项目组1'},
                {text: '西区XXXXX项目组2'},
                {text: '西区XXXXX项目组3'},
                {text: '西区XXXXX项目组4'}
              ]
            }
          ],
          users: [
            {name: '张三',usersid: "usersid0",isaa: true,classname:'aa'},
            {name: '李四',usersid: "usersid1",isaa: false,classname:''},
            {name: '王五',usersid: "usersid2",isaa: false,classname:''}
          ]
        },
        {
          name:'东区项目管理组',
          id: 1,
          isaa: false,
          allsection:[
          {
            area: '东1区',
            areaid: 0,
            divId: 'i1',
            inputId: 'a1',
            inputname: 'allcheckbox',
            areasection:[
              {text: '东1区XXXXX项目组1'},
              {text: '东1区XXXXX项目组2'},
              {text: '东1区XXXXX项目组3'},
              {text: '东1区XXXXX项目组4'}
            ],
          },
          {
            area: '西1区',
            areaid: 1,
            divId: 'i2',
            inputId: 'a2',
            inputname: 'allcheckbox2',
            areasection: [
              {text: '西1区XXXXX项目组1'},
              {text: '西1区XXXXX项目组2'},
              {text: '西1区XXXXX项目组3'},
              {text: '西1区XXXXX项目组4'}
            ]
          }
        ],
          users: [
            {name: '张三1',usersid: "usersid0",isaa: true,classname:'aa'},
            {name: '李四1',usersid: "usersid1",isaa: false,classname:''},
            {name: '王五1',usersid: "usersid2",isaa: false,classname:''}
          ]},
        {name:'西区项目管理组',id: 2,isaa: false,
          allsection:[
            {
              area: '东2区',
              areaid: 0,
              divId: 'i1',
              inputId: 'a1',
              inputname: 'allcheckbox',
              areasection:[
                {text: '东2区XXXXX项目组1'},
                {text: '东2区XXXXX项目组2'},
                {text: '东2区XXXXX项目组3'},
                {text: '东2区XXXXX项目组4'}
              ]},
            {
              area: '西2区',
              areaid: 1,
              divId: 'i2',
              inputId: 'a2',
              inputname: 'allcheckbox2',
              areasection: [
                {text: '西2区XXXXX项目组1'},
                {text: '西2区XXXXX项目组2'},
                {text: '西2区XXXXX项目组3'},
                {text: '西2区XXXXX项目组4'}
              ]
            }
          ],
          users: [
            {name: '张三3',usersid: "usersid0",isaa: true,classname:'aa'},
            {name: '李四3',usersid: "usersid1",isaa: false,classname:''},
            {name: '王五3',usersid: "usersid2",isaa: false,classname:''}
          ]},
        {name:'新项目管理组',id: 3,isaa: false,
          allsection:[
            {
              area: '东3区',
              areaid: 0,
              divId: 'i1',
              inputId: 'a1',
              inputname: 'allcheckbox',
              areasection:[
                {text: '东3区XXXXX项目组1'},
                {text: '东3区XXXXX项目组2'},
                {text: '东3区XXXXX项目组3'},
                {text: '东3区XXXXX项目组4'}
              ]},
            {
              area: '西3区',
              areaid: 1,
              divId: 'i2',
              inputId: 'a2',
              inputname: 'allcheckbox2',
              areasection: [
                {text: '西3区XXXXX项目组1'},
                {text: '西3区XXXXX项目组2'},
                {text: '西3区XXXXX项目组3'},
                {text: '西3区XXXXX项目组4'}
              ]
            }
          ],
          users: [
            {name: '张三3',usersid: "usersid0",isaa: true,classname:'aa'},
            {name: '李四3',usersid: "usersid1",isaa: false,classname:''},
            {name: '王五3',usersid: "usersid2",isaa: false,classname:''}
          ]},
        {name:'A项目',id: 4,isaa: false},
        {name:'B项目',id: 5,isaa: false},
        {name:'C项目',id: 6,isaa: false},
        {name:'DE项目',id: 7,isaa: false},
        {name:'E项目',id: 8,isaa: false},
        {name:'F项目',id: 9,isaa: false},
        {name:'G项目',id: 10,isaa: false},
        {name:'H项目',id: 11,isaa: false}
      ]
      }
    },
    methods: {
      dialogVisible(){
        this.creatusersshow = true
      },
      projectAuthirizationhide(){
        this.$emit('child-say',this.projectAuthirizationhidemsg)
      },
      creatusers(msg4) {
        this.creatusersshow = msg4
      },
      setaa(index) {
        this.links.map(function(v,i){
          i==index? v.isaa=true: v.isaa=false;
        })
        this.indexs=index
      },
      seta(x, y){
        var a = document.getElementById(x)
        var x = document.getElementsByName(y)
        console.log(x)
        for (var i=0; i< x.length; i++) {
          x[i].className = ''
        }
        if (a.className === ''){
          a.className = 'aa'
        }else{
          a.className = ''
        }
      },
      areasectionchange(id, x){
        var add = document.getElementsByName('icon')
        if (add[id].className === 'el-icon-caret-bottom') {
          add[id].className = 'el-icon-caret-top'
        }else {
          add[id].className = 'el-icon-caret-bottom'
        }
        var s = document.getElementById(x)
        if (s.style.display === 'block') {
          s.style.display = 'none'
          s.style.opacity = 0
        } else {
          s.style.display = 'block'
          s.style.opacity = 1
        }
      },
      checkbox(x, y) {
        var s = document.getElementById(x)
        var z = document.getElementsByName(y)
        console.log(s)
        for (var i=0;i<z.length;i++) {
          z[i].checked = s.checked
        }
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
  .popup3{
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
  .projectAuthirization{
    border: 1px solid #98D9DF;
    background: rgba(0,0,0,0.8);
    color: white;
  }
 .projectAuthirization .projectAuthirization-header{
    width: 96%;
    height: 8vh;
    padding: 0 2%;
    line-height: 8vh;
    border-bottom: 1px solid #546172;
  }
  .projectAuthirization .projectAuthirization-header h1{
    font-size: 2rem;
  }
.projectAuthirization .projectAuthirization-header .bg{
    width: 5%;
    height: 3vh;
    margin-top: 2vh;
    font-size: 2rem;
    font-weight: normal;
  }
  .projectAuthirization .projectAuthirization-section{
    width: 100%;
  }
  .projectAuthirization
    .projectAuthirization-section
      .projectAuthirization-section-left{
    width: 26%;
    padding: 1vh 2%;
    height: 50vh;
    border-right: 1px solid #546172;
  }
  .projectAuthirization
    .projectAuthirization-section
      .projectAuthirization-section-left
        .projectAuthirization-section-left-top{
    width: 100%;
    height: 42vh;
    margin-bottom: 2.5vh;
    border: 1px solid #325CA1;
    background: #006582;
  }
  .projectAuthirization
    .projectAuthirization-section
      .projectAuthirization-section-left
        .projectAuthirization-section-left-top p{
    height: 3vh;
    text-align: left;
    line-height: 3vh;
    font-size: 1rem;
  }
  .projectAuthirization
  .projectAuthirization-section
  .projectAuthirization-section-left .el-button{
    width: 100%;
    height: 8%;
  }
  .projectAuthirization
    .projectAuthirization-section
      .projectAuthirization-section-right{
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
  .superAdministrator
    .superAdministrator-header
      .superAdministrator-header-left{
    width: 47%;
    font-size: 2rem;
    text-align: left;
    padding-left: 3%;
  }
  .superAdministrator
    .superAdministrator-header
      .superAdministrator-header-right{
    width: 50%;
  }
  .superAdministrator
    .superAdministrator-header
      .superAdministrator-header-right .el-button{
    width: 30%;
    height: 25px;
    margin-right: 3%;
    margin-left: 0;
  }
  .superAdministrator
    .superAdministrator-section{
    width: 100%;
    height: 46vh;
  }
  .superAdministrator
    .superAdministrator-section
      .superAdministrator-section-left{
    width: 64%;
    height: 93%;
    border-right: 1px solid #546172;
    padding: 2% 3%;
    color: #7A7A7B;
  }
  .superAdministrator
    .superAdministrator-section
      .superAdministrator-section-left
        .superAdministrator-section-left-section,
  .superAdministrator
    .superAdministrator-section
      .superAdministrator-section-left
        .superAdministrator-section-left-section ul{
    width: 100%;
    height: 21.5rem;
  }
  .superAdministrator
    .superAdministrator-section
      .superAdministrator-section-left
        .superAdministrator-section-left-section ul{
    width: 100%;
    height: 21.5rem;
    margin-top: 1.5rem;
    color: #84ABAD;
  }
  .superAdministrator
    .superAdministrator-section
      .superAdministrator-section-left
        .superAdministrator-section-left-section ul li h3 i,
  .superAdministrator
  .superAdministrator-section
  .superAdministrator-section-left
  .superAdministrator-section-left-section ul li h3 input{
    display: inline;
  }
  .superAdministrator
  .superAdministrator-section
  .superAdministrator-section-left
  .superAdministrator-section-left-section ul li h3 input{
    margin: 0 1%;
  }
  .superAdministrator
    .superAdministrator-section
      .superAdministrator-section-left
        .superAdministrator-section-left-section ul li
          .superAdministrator-section-left-section-div{
    width: 93%;
    margin-left: 7%;
    display: none;
    opacity: 0;
    animation: show 0.8s linear 1 ;
  }
  @keyframes show {
    0%{opacity: 0;}
    100%{opacity: 1;}
  }
  .superAdministrator
    .superAdministrator-section
      .superAdministrator-section-left
        .superAdministrator-section-left-section ul li
          .superAdministrator-section-left-section-div span{
    width: 100%;
    margin: 0.3rem 0;
  }
  .superAdministrator
  .superAdministrator-section
  .superAdministrator-section-left
  .superAdministrator-section-left-section ul li
  .superAdministrator-section-left-section-div span input{
    margin: 0 1%;
  }
  .superAdministrator
    .superAdministrator-section
      .superAdministrator-section-right{
    width: 23.5%;
    height: 96%;
    padding: 2% 3%;
    color: #7A7A7B;
  }
  .superAdministrator
  .superAdministrator-section
  .superAdministrator-section-right
  .superAdministrator-section-right-section{
    width: 100%;
    height: 20rem;
    background: #006582;
    margin-bottom: 3rem;
    color: white;
  }
  .superAdministrator
  .superAdministrator-section
  .superAdministrator-section-right
  .superAdministrator-section-right-section p{
    margin: 1rem 0;
  }
</style>
