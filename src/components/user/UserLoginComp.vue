<template>
  <form id="form-container">
    <div class="input-wrapper">
      <label for="input-id">ID</label>
      <b-form-input id="input-id" placeholder="아이디를 입력해주세요" v-model="user.userid"></b-form-input>
    </div>
    <div class="input-wrapper">
      <label for="input-pw">PW</label>
      <b-form-input id="input-pw" placeholder="비밀번호를 입력해주세요" v-model="user.userpwd"></b-form-input>
    </div>
    <div class="button-container">
      <div>
        <b-button type="button" @click.prevent="confirm">로그인</b-button>
      </div>
      <!-- <div class="button-wrapper">
        <button-comp variant="primary" class="m-1" @click.prevent="confirm"></button-comp>
      </div> -->
    </div>
    <div class="link-container">
      <router-link :to="{ name: 'signup' }">회원가입</router-link>
      <router-link :to="{ name: 'signup' }">아이디찾기</router-link>
      <router-link :to="{ name: 'signup' }">비밀번호찾기</router-link>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";

export default {
  name: "UserLoginComp",

  data() {
    return {
      user: {
        userid: null,
        userpwd: null,
      },
    };
  },

  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  // methods: {
  //   login() {
  //     console.log("로그인!");
  //   },
  // },

  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo", "oathLogin"]),
    async confirm() {
      console.log("clicked!");
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      console.log("1. confirm() token >> " + token);
      if (this.isLogin) {
        await this.getUserInfo(token);
        console.log("4. confirm() userInfo :: ", this.userInfo);
        this.$router.push({ name: "main" });
      }
    },

    movePage() {
      this.$router.push({ name: "signup" });
    },
  },
};
</script>

<style scoped>
button {
  background: #b3e5fc;
  color: #2c3e50;
  width: 300px;
  padding: 13px 18px;
  outline: none;
  border: none;
  border-radius: 25px !important;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
}

#form-container {
  width: 280px;
  height: 400px;
}
#form-container .button-container {
  margin: 20px 0;
  gap: 20px;
}
#form-container .button-wrapper {
  display: flex;
  gap: 15px;
}
#form-container .link-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
