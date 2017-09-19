<template>
  <div class="newrole">
    <div class="newrole-header c">
      <h1 class="fl">添加角色</h1>
      <div class="bg el-icon-close fr" @click="newrolehide">
      </div>
    </div>
    <form action="" class="newrole-section">
      <div class="newrole-section1">
        <div class="newrole-section1-form">
          <i class="fl">角色名*：</i>
          <input class="fl" type="text"/>
        </div>
      </div>
      <div class="newrole-section2">
        <textarea class="newrole-section2-section">

        </textarea>
      </div>
      <div class="newrole-section3">
        <p class="text-left">共选择了：个项目</p>
        <el-button type="primary">确定</el-button>
        <el-button type="primary" @click="newrolehide">取消</el-button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'newrole',
    data () {
      return {
        newrolemsg:false,
        indexs: 0,
        links:[]
      }
    },
    methods: {
      newrolehide: function(){
        this.$emit('child-say',this.newrolemsg)
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
  .newrole{
    border: 1px solid #98D9DF;
    background: rgba(0,0,0,0.8);
    color: white;
  }
  .newrole .newrole-header{
    width: 96%;
    height: 8vh;
    padding: 0 2%;
    line-height: 8vh;
    border-bottom: 1px solid #546172;
  }
  body .newrole{
    top: -6vh;
  }
  body .newrole .newrole-header{
    padding: 0 2% 0 3%;
    width: 95%;
  }
  body .newrole .newrole-header .bg{
    width:10%;
    margin-top: 2.5vh;
    font-size: 2rem;
  }
  body .newrole .newrole-section1{
    width: 100%;
    height: 7vh;
    border-bottom: 1px solid #546172;
  }
  body .newrole .newrole-section1 .newrole-section1-form{
    width: 90%;
    height: 5vh;
    line-height: 7vh;
    display: inherit;
    font-size: 1.5rem;
    color: #7a7a7b;
    text-align: left;
    margin: 0 5%;
  }
  body .newrole .newrole-section1 .newrole-section1-form i{
    width: 22%;
    height: 100%;
  }
  body .newrole .newrole-section1 .newrole-section1-form input{
    width: 75%;
    height: 45%;
    margin-top: 1.5vh;
    background: #006582;
    text-align: right;
    color: white;
  }
  body .newrole .newrole-section2{
    width: 90%;
    height: 38vh;
    padding: 2vh 5%;
    border-bottom: 1px solid #546172;
  }
  body .newrole .newrole-section2 .newrole-section2-section{
    width: 100%;
    height: 100%;
    background: white;
  }
  body .newrole .newrole-section3{
    width: 90%;
    padding: 1.5vh 5%;
    height: 8vh;
    color: #7a7a7b;
  }
  body .newrole .newrole-section3 .el-button{
    width: 20% !important;
    height: 4vh;
    margin-top: 1vh;
    text-align: center;
  }
  body .newrole .newrole-section3 .el-button:nth-child(2){
    margin-left: 54% !important;
  }
  body .newrole .newrole-section3 .el-button span{
    width: 100% !important;
    background: #079DF0;
    height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    line-height: 0.8vh;
  }
</style>
