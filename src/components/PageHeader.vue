<template>
    <header>
        <el-row>
            <el-col :span="3" :offset="1">
                <div>
                    <p><img src="../assets/img/pdf_02.png" alt="pdflux"/></p>
                </div>
            </el-col>
            <el-col :span="12" :offset="8">
                <div v-if="isLogin" id="info">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{user.name}}<i class="el-icon-caret-bottom"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">个人信息 1</el-dropdown-item>
                            <el-dropdown-item command="b">个人信息 2</el-dropdown-item>
                            <el-dropdown-item command="c">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div v-else id="login">
                    <el-form :inline="true" :model="user" class="demo-form-inline">
                        <el-form-item label="用户名">
                            <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" :loading="isLoading" @click="login">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </header>
</template>

<script>
//  import {mapGetters} from 'vuex'
  import ElInput from '../../node_modules/element-ui/packages/input/src/input.vue'

  export default {
    components: {ElInput},
    name: 'page-header',
    data() {
      return {
        user: {
          name: '',
          password: '',
        },
        isLoading: false,
      }
    },
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command)
      },
      async login() {
        this.isLoading = true
        try {
          await this.$store.dispatch('user/login', this.user);
          this.$router.push({path: '/admin'})
        } catch (e) {
          console.log(e)
          this.$notify.error({
            message: '错误的用户名或密码'
          });
        } finally {
          this.isLoading = false
        }
      }
    },
    computed: {
//      ...mapGetters('user', ['isLogin']),
      isLogin () {
        return false;
      }
    }
  }
</script>

<style scoped>
    img {
        height: 60px;
    }

    #info {
        line-height: 60px;
    }

    #info i {
        padding: 0 10px;
    }

    #login {
        padding-top: 10px;
    }
</style>