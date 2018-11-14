<template>
    <el-container>
        <el-header>
          <page-header></page-header>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
          <page-footer></page-footer>
        </el-footer>
  </el-container>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

  export default {
      components: {
        PageHeader,
        PageFooter,
      },
    name: 'Home',
  }
</script>

<style>
    .el-header, .el-footer {
    background-color: #FFFFFF;
  }
  .el-footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
    .el-main {
    height: calc(100vh - 120px);
    overflow-y: scroll;
        background-color: #E9EEF3;
  }
</style>
