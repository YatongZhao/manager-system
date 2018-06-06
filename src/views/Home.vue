<docs>
  ## 这是首页组件
</docs>

<template>
  <el-container>
    <el-header>
      Header
      <el-button>返回首页</el-button>
    </el-header>
    <el-container>
      <el-aside >
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-table size="mini" :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="skill"></el-table-column>
          <el-table-column header-align="center" label="handle" width="70">
            <template slot-scope="scope">
              <el-button @click="handleDelete(scope.row.id)" size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button class="add" type="primary" @click="dialogVisible = true">添加</el-button>
        <el-dialog
          class="dialog"
          :show-close="false"
          :visible.sync="dialogVisible"
          width="30%">
          <el-form label-width="0px" :model="form" :rules="rules" ref="form">
            <el-form-item prop="skill">
              <el-input v-model="form.skill" placeholder="请输入添加的skill名称"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="danger" @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleSubmit">确 定</el-button>
          </span>
        </el-dialog>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      isCollapse: true,
      dialogVisible: false,
      form: {
        skill: ''
      },
      rules: {
        skill: [
          { required: true, message: '请输入skill', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let {data} = await this.$http({
            method: 'post',
            url: this.$url.skill.add,
            withCredentials: true,
            data: {
              name: this.form.skill
            }
          })
          console.log(data)
          if (data.code === 0) {
            this.$message.success('添加skill成功')
          }
          this.dialogVisible = false
        } else {
          // this.$message.error('请检查输入!')
          return false
        }
      })
    },
    async handleDelete (id) {
      console.log(id)
      let {data} = await this.$http({
        method: 'post',
        url: this.$url.skill.remove,
        withCredentials: true,
        data: {
          id
        }
      })
      if (data.code === 0) {
        this.$message.success('删除成功')
      }
    }
  },
  async created () {
    let {data} = await this.$http({
      method: 'get',
      url: this.$url.home,
      withCredentials: true
    })
    this.tableData = data
  }
}
</script>

<style lang="scss">
.add.el-button {
  width: 100%;
  border-radius: 0;
  border: none;
}
.dialog {
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__body {
    padding: 30px 10px;
    .el-input {
      input {
        border-radius: 0;
        border-left: 0;
        border-right: 0;
      }
    }
  }
  .el-dialog__footer {
    padding: 0;
    .dialog-footer {
      display: flex;
      .el-button {
        border: none;
        border-radius: 0;
        width: 50%;
        &+.el-button {
          margin: 0;
        }
      }
    }
  }
}
</style>
