<template>
  <form id="form-container">
    <div class="input-wrapper">
      <label for="input-id">아이디</label>
      <b-form-input id="input-id" v-model="user.userId" placeholder="아이디를 입력해주세요"></b-form-input>
    </div>
    <div class="input-wrapper">
      <label for="input-pw">패스워드</label>
      <b-form-input type="password" id="input-pw" v-model="user.userPass" placeholder="비밀번호를 입력해주세요"></b-form-input>
    </div>
    <div class="input-wrapper">
      <label for="input-name">이름</label>
      <b-form-input id="input-name" v-model="user.userName" placeholder="이름을 입력해주세요"></b-form-input>
    </div>
    <div class="input-wrapper signup-radio">
      <label>GENDER</label>
      <div>
        <b-form-radio name="some-radios" v-model="user.gender" value="F"><span></span>F</b-form-radio>
        <b-form-radio name="some-radios" v-model="user.gender" value="M"><span></span>M</b-form-radio>
      </div>
    </div>
    <div class="input-wrapper">
      <label for="input-email">E-MAIL</label>
      <b-form-input id="input-email" v-model="user.email" placeholder="이메일을 입력해주세요"></b-form-input>
    </div>
    <div class="input-wrapper">
      <label for="input-phone">PHONE</label>
      <b-form-input id="input-phone" v-model="user.phone" placeholder="전화번호를 입력해주세요"></b-form-input>
    </div>
    <div class="input-wrapper">
      <label for="input-info">INFO</label>
      <b-form-textarea id="input-info" v-model="user.info" placeholder="자기소개를 입력해주세요"></b-form-textarea>
    </div>
    <div class="button-container">
      <div>
        <button-comp @onClickButton="signUp" title="SIGNUP"></button-comp>
      </div>
    </div>
  </form>
</template>

<script>
import ButtonComp from "@/components/common/ButtonComp";
import {signup} from "@/api/member";

export default {
  name: "UserSignupComp",
  components: {
    ButtonComp,
  },

  data() {
    return {
      user: {
        userId: "",
        userPass: "",
        userName: "",
        email: "",
        phone: "",
        gender: "",
        info: "",
      },
    };
  },

  methods: {
    async signUp() {
      await signup(this.user);
      alert("회원가입 성공!");
      this.$router.push({
        name: 'login'
      });
    },
  },
};
</script>

<style scoped>
#form-container {
  width: 350px;
  height: 500px;
}
#form-container .input-wrapper label {
  width: 100px;
}
/* #form-container .signup-radio [type="radio"] {
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
#form-container .signup-radio input:checked {
  border: 4px solid red;
} */
#form-container .signup-radio > div {
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: center;
  gap: 50px;
}
#form-container .signup-radio > div span {
  display: inline-block;
  width: 25px;
}
#form-container .signup-radio > div label {
  width: 50px;
  text-align: end;
}
#form-container .button-container {
  margin-top: 20px;
  gap: 15px;
}
</style>
