<template>
  <el-container>
    <el-header>
      <page-header></page-header>
    </el-header>
    <el-container id="main">
      <el-aside>
        <aside-nav-menu></aside-nav-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>
      <page-footer></page-footer>
    </el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import AsideNavMenu from '@/components/AsideNavMenu.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'home',
  components: {
    PageHeader,
    AsideNavMenu,
    PageFooter,
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #FFFFFF;
  }
  .el-footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  #main {
    height: calc(100vh - 120px);
    overflow-y: scroll;
  }
  .el-aside {
    height: 100%;
    background-color: #FFFFFF;
  }
  .el-main {
    height: 100%;
    background-color: #E9EEF3;
  }
</style>