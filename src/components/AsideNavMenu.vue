<template>
    <div>
      <el-menu
        default-active="2"
        :router="true"
        class="el-menu-vertical-demo"
        active-text-color="#ffd04b">
        <el-menu-item index="/main">
          <i class="el-icon-menu"></i>
          <span slot="title">统计资讯</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">项目管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">项目进展</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">信息管理</span>
        </el-menu-item>
        <el-menu-item index="6" disabled>
          <i class="el-icon-setting"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<style scoped>

</style>