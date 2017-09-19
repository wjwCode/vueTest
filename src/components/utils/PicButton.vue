<template>
  <div @click="handleClick"
       :class="[
            'picbutton',
            name ? 'picbutton-' + name : '',
            size ? 'picbutton-' + size : '',
            disabled ? 'picbutton-' + name + '-disabled' : ''
          ]"
  >
  </div>
</template>
<script>
  export default {
    name: 'PicButton',

    props: {
      name: String,
      size: {
        type: String,
        default: 'medium'
      },
      disabled: Boolean
    },

    methods: {
      handleClick (evt) {
        if (this.disabled !== true) {
          this.$emit('click', evt)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .picbutton {
    background-color: transparent;
    border-width: 0px;
    background-repeat: no-repeat;
    cursor: pointer;
    display: inline-block;
  }

  .picbutton-small {
    width: 78px;
    height: 38px;
  }

  .picbutton-medium {
    width: 109px;
    height: 37px;
  }

  .picbutton-large {
    width: 293px;
    height: 41px;
  }

  /*小按钮列表*/
  $smallbuttonList: export, copyto, current, download, export, moveto, nextday, nextperiod, preday, preperiod, rename, upload, create-device, create-project, create-user;
  /*需要disabled效果小按钮列表*/
  $disabledsmallbuttonList: export, copyto, current, download, export, moveto, nextday, nextperiod, preday, preperiod, rename, upload;

  @each $member in $smallbuttonList {
    .picbutton-#{$member} {
      background-image: url("./picbuttonAssets/small/#{$member}.png");
    }
    .picbutton-#{$member}:hover {
      background-image: url("./picbuttonAssets/small/#{$member}-over.png");
    }
    .picbutton-#{$member}:active {
      background-image: url("./picbuttonAssets/small/#{$member}-press.png");
    }
  }

  @each $member in $disabledsmallbuttonList {
    .picbutton-#{$member}-disabled {
      background-image: url("./picbuttonAssets/small/#{$member}-disabled.png") !important;
      cursor: auto !important;
    }
  }

  /*中按钮列表*/
  $mediumbuttonList: abandon, assign, cancel, check, close, confirm, createorder-medium, delete, pass, processed,
  reassignment, repulse, abandoned, add-record, modify, reserved, adddevice, addrealdata;
  /*需要disabled效果中按钮列表*/
  $disabledmediumbuttonList: abandon, assign, check, pass, repulse;

  @each $member in $mediumbuttonList {
    .picbutton-#{$member} {
      background-image: url("./picbuttonAssets/medium/#{$member}.png");
    }
    .picbutton-#{$member}:hover {
      background-image: url("./picbuttonAssets/medium/#{$member}-over.png");
    }
    .picbutton-#{$member}:active {
      background-image: url("./picbuttonAssets/medium/#{$member}-press.png");
    }
  }

  @each $member in $disabledmediumbuttonList {
    .picbutton-#{$member}-disabled {
      background-image: url("./picbuttonAssets/medium/#{$member}-disabled.png") !important;
      cursor: auto !important;
    }
  }

  /*大按钮列表*/
  $largebuttonList: createdirectory, createorder-large, createplan, query, create-region;

  @each $member in $largebuttonList {
    .picbutton-#{$member} {
      background-image: url("./picbuttonAssets/large/#{$member}.png");
    }
    .picbutton-#{$member}:hover {
      background-image: url("./picbuttonAssets/large/#{$member}-over.png");
    }
    .picbutton-#{$member}:active {
      background-image: url("./picbuttonAssets/large/#{$member}-press.png");
    }
  }

  /*一些特殊大小的按钮*/
  $specialbuttonList1: create-powerroom;

  @each $member in $specialbuttonList1 {
    .picbutton-#{$member} {
      background-image: url("./picbuttonAssets/special/#{$member}.png");
      width: 88px !important;
      height: 38px !important;
    }
    .picbutton-#{$member}:hover {
      background-image: url("./picbuttonAssets/special/#{$member}-over.png");
    }
    .picbutton-#{$member}:active {
      background-image: url("./picbuttonAssets/special/#{$member}-press.png");
    }
  }

  $specialbuttonList2: projectmanage, rolemanager;

  @each $member in $specialbuttonList2 {
    .picbutton-#{$member} {
      background-image: url("./picbuttonAssets/special/#{$member}.png");
      width: 150px !important;
      height: 41px !important;
    }
    .picbutton-#{$member}:hover {
      background-image: url("./picbuttonAssets/special/#{$member}-over.png");
    }
    .picbutton-#{$member}:active {
      background-image: url("./picbuttonAssets/special/#{$member}-press.png");
    }
  }
</style>
