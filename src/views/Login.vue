<template>
<el-container>
  <el-header>
    <el-row>
      <el-col :offset="23" :span="1">
        <el-button type="text">首页→</el-button>
      </el-col>
    </el-row>
  </el-header>
  <el-main>
    <el-row>
      <el-col :span="8" :offset="8">
        <el-card shadow="hover" class="box-card">
          <el-form label-position="right" label-width="40px" :model="loginForm">
            <el-form-item label="账号">
              <el-input v-model="loginForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="loginForm.region"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="submit" type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</el-container>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        name: '',
        region: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      let {data} = await this.$http({
        method: 'post',
        url: this.$url.login,
        withCredentials: true,
        data: {
          name: loginForm.name,
          password: loginForm.region
        }
      })
      console.log(data)
    }
  }
}
</script>

<style>
.submit {
  width: 100%;
}
</style>
