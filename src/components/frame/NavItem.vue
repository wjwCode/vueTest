<template>
  <div @click="handleClick"
      :class="[
        'navitem',
        name ? 'navitem-' + name : '',
        isPressed ? 'navitem-pressed-' + name : ''
      ]"
  >
  </div>
</template>
<script>
  export default {
    name: 'NavItem',

    props: {
      name: String,
      pressed: String
    },

    computed: {
      // 根据父组件中当前激活name和自己name比较得出，true表示是激活状态，false则为非激活状态
      isPressed: function () {
        return this.name === this.pressed
      }
    },

    methods: {
      handleClick (evt) {
        this.$emit('click', this.name, evt)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .navitem {
    background-color: transparent;
    border-width: 0px;
    background-repeat: no-repeat;
    cursor: pointer;
    width:90px;
  }
 /* 能效综合评估名称过长，为特殊的项*/
  .navitem-consumption {
    width:108px !important;
  }

  /*导航列表*/
  $navlist:dataquery,device,event,home,knowledge,log,order,patrol,prerun,realtime,systemconfig,user,consumption;

  @each $member in $navlist {
    .navitem-#{$member} {
      background-image:url("./navbarAssets/#{$member}.png");
    }
    .navitem-#{$member}:hover {
      background-image:url("./navbarAssets/#{$member}-over.png");
    }
    .navitem-#{$member}:active {
      background-image:url("./navbarAssets/#{$member}-press.png");
    }
    .navitem-pressed-#{$member} {
      background-image:url("./navbarAssets/#{$member}-press.png") !important;
    }
  }
</style>
