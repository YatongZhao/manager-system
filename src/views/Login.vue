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
          <el-form label-position="right" label-width="40px" :model="loginForm" :rules="rules" ref="form">
            <el-form-item label="账号" prop="name">
              <el-input v-model="loginForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="region">
              <el-input v-model="loginForm.region"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="submit" type="primary" @click="onSubmit('form')">登录</el-button>
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
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let {data} = await this.$http({
            method: 'post',
            url: this.$url.login,
            withCredentials: true,
            data: {
              name: this.loginForm.name,
              password: this.loginForm.region
            }
          })
          console.log(data)
          if (data.code === 0) {
            this.$router.push('/')
          } else {
            this.$message.success(data.msg)
          }
        } else {
          this.$message.error('请检查表单是否完整')
          return false
        }
      })
    }
  }
}
</script>

<style>
.submit {
  width: 100%;
}
</style>
