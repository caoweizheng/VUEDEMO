<template>
  <div class="yin-site-login">
    <van-nav-bar
      title="LOGIN"
      @click-left="onClickLeft">
      <van-icon name="arrow-left" color="rgb(19, 18, 18)" size="0.32rem" slot="left" />
    </van-nav-bar>
    <van-cell-group>
      <van-field
        v-model="username"
        name="USERNAME"
        label="USERNAME"
        :rules="[{ required: true, message: 'USERNAME' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="PASSWORD"
        label="PASSWORD"
        :rules="[{ required: true, message: 'PASSWORD' }]">
      <!-- <van-icon :name="showPW ? 'eye-o' : 'closed-eye'" @click="showPW = !showPW" color="rgb(19, 18, 18)" size="0.32rem" slot="right" /> -->
      </van-field>
    </van-cell-group>
    <div style="margin: 32px;">
      <van-button block type="primary" @click="login(username,password)">
        LOGIN
      </van-button>
    </div>
  </div>
</template>

<script>
import { Button, Field, NavBar, Icon, Form, CellGroup } from 'vant';
export default {
  name: 'LOGIN',
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Form.name]: Form,
    [CellGroup.name]: CellGroup,
  },
  data() {
    return {
      username: '',
      password: '',
      showPW: false
    }
  },
  methods: {
    onClickLeft() {
      //
    },
    login (un, pd) {
      let params = {
        username: this.username,
        password: this.password
      }
      if( !this.username || !this.password) {
        this.$toast({
          message: '请输入账号/密码',
          position: 'bottom',
          duration: '800'
        })
        return;
      }
      this.$http.queryUserInfo(params).then((resp) => {
        this.username = ''
        this.password = ''
        this.$router.push('/')
      })
    }
  },
}
</script>

<style lang="scss" scoped>
// .login {
//   .title {
//     font-size: 0.32rem;
//   }
// }
.yin-site-login {
  background: #fff;
  height: 100%;
  .yin-tips {
    margin-top: 24rem;
    span {
      font-size: 24rem;
      color: #666;
    }
    p {
      font-size: 24rem;
      margin-top: 22rem;
      line-height: 32rem;
      color: #999;
    }
  }
}
</style>

