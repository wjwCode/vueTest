<template>
  <div class="device-left-tree">
    <el-input
      placeholder="输入关键字以检索"
      class="device-search"
      v-model="filterText">
    </el-input>

    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      node-key="id"
      :filter-node-method="filterNode"
      @node-click="handleNodeClick"
      ref="tree2">
    </el-tree>
  </div>
</template>
<script>
  export default {
    name: 'leftTree',
    props: ['treeData2'],
    data() {
      return {
        node: {},
        filterText: '',
        data: this.treeData2,
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleNodeClick(data) {
        this.node = data;
        console.log(this.node);
        this.$emit('child-say', this.node);
      }
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .device-search {
    border-radius: 50%;
    width: calc(100% - 10px);
    height: auto;
    margin: 5px;
    font-style: italic;
  }


  .device-left-tree input.el-input__inner {
    border-radius: 25px;
    height: 20px;
  }
</style>
<style>

  .device-search input {
    font-style: italic;
    font-size: 12px;
  }
  .device-left-tree input.el-input__inner {
    border-radius: 25px;
    height: 20px;
  }

  .device-left-tree .el-tree-node__content {
    height: 20px;
    line-height: 20px;
  }

  .device-left-tree .el-tree-node__content:hover {
    background: #D6F2FD;
  }

  .device-left-tree .el-tree-node__label {
    font-size: 12px;
    font-family: '\5FAE\8F6F\96C5\9ED1';
    font-size: 12px;
  }
</style>
