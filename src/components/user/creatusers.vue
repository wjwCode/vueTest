<template>
  <div class="creatusers" id="creatusers" v-drag="">
    <div class="creatusers-header c">
      <h1 class="fl">添加用户组</h1>
      <div class="bg el-icon-close fr" @click="creatusershide">
      </div>
    </div>
    <form action="" class="creatusers-section">
      <div class="creatusers-section1">
        <div class="creatusers-section1-form c">
          <i class="fl">用户组名*：</i>
          <input class="fl" type="text"/>
        </div>
      </div>
      <div class="creatusers-section2">
        <textarea class="creatusers-section2-section">
        </textarea>
      </div>
      <div class="creatusers-section3">
        <p class="text-left">共选择了：个项目</p>
        <el-button type="primary">确定</el-button>
        <el-button type="primary" @click="creatusershide">取消</el-button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'creatusers',
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
    data () {
      return {
        msg3:false,
        indexs: 0,
        links:[

        ]
      }
    },
    methods: {
      creatusershide: function(){
        this.$emit('child-say',this.msg4)
      },
      setaa: function (index) {
        this.links.map(function(v,i){
          i==index? v.isaa=true: v.isaa=false;
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
  .aa{
    background: #1E90FF;
  }
  .creatusers{
    border: 1px solid #98D9DF;
    background: rgba(0,0,0,0.8);
    color: white;
  }
  .creatusers .creatusers-header{
    width: 96%;
    height: 8vh;
    padding: 0 2%;
    line-height: 8vh;
    border-bottom: 1px solid #546172;
  }
  body .creatusers{
    top: -6vh;
  }
  body .creatusers .creatusers-header{
    padding: 0 2% 0 3%;
    width: 95%;
  }
  body .creatusers .creatusers-header .bg{
    width:10%;
    margin-top: 2.5vh;
    font-size: 2rem;
  }
  body .creatusers .creatusers-section1{
    width: 100%;
    height: 7vh;
    border-bottom: 1px solid #546172;
  }
  body .creatusers .creatusers-section1 .creatusers-section1-form{
    width: 90%;
    height: 5vh;
    line-height: 7vh;
    display: inherit;
    font-size: 1.5rem;
    color: #7a7a7b;
    text-align: left;
    margin: 0 5%;
  }
  body .creatusers .creatusers-section1 .creatusers-section1-form i{
    width: 22%;
    height: 100%;
  }
  body .creatusers .creatusers-section1 .creatusers-section1-form input{
    width: 75%;
    height: 45%;
    margin-top: 1.5vh;
    background: #006582;
    text-align: right;
    color: white;
  }
  body .creatusers .creatusers-section2{
    width: 90%;
    height: 38vh;
    padding: 2vh 5%;
    border-bottom: 1px solid #546172;
  }
  body .creatusers .creatusers-section2 .creatusers-section2-section{
    width: 100%;
    height: 100%;
    background: white;
  }
  body .creatusers .creatusers-section3{
    width: 90%;
    padding: 1.5vh 5%;
    height: 8vh;
    color: #7a7a7b;
  }
  body .creatusers .creatusers-section3 .el-button{
    width: 20% !important;
    height: 4vh;
    margin-top: 1vh;
    text-align: center;
  }
  body .creatusers .creatusers-section3 .el-button:nth-child(2){
    margin-left: 55% !important;
  }
  body .creatusers .creatusers-section3 .el-button span{
    width: 100% !important;
    background: #079DF0;
    height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    line-height: 0.8vh;
  }
</style>
