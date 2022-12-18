<template>
  <form id="form-container">
    <div class="input-wrapper">
      <label for="input-id">ID</label>
      <b-form-input id="input-id" v-model="user.userId" readOnly></b-form-input>
    </div>
    <div class="input-wrapper">
      <label for="input-pw">패스워드</label>
      <b-form-input id="input-pw" v-model="user.userPass"></b-form-input>
    </div>
    <div class="input-wrapper">
      <label for="input-name">이름</label>
      <b-form-input id="input-name" v-model="user.userName"></b-form-input>
    </div>
    
    <div class="input-wrapper">
      <label for="input-email">E-MAIL</label>
      <b-form-input id="input-email" v-model="user.email"></b-form-input>
    </div>
    <div class="input-wrapper">
      <label for="input-phone">PHONE</label>
      <b-form-input id="input-phone" v-model="user.phone"></b-form-input>
    </div>
    <div class="input-wrapper">
      <label for="input-info">자기소개</label>
      <b-form-textarea id="input-info" v-model="user.info"></b-form-textarea>
    </div>
    <div class="button-container">
      <div @click="update()">
        <button-comp title="회원정보 수정"></button-comp>
      </div>
      <div class="button-container-sec">
        <div @click="cancel()">
          <button-comp title="취소"></button-comp>
        </div>
        <div @click="deleteMember()">
          <button-comp title="삭제"></button-comp>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import ButtonComp from "@/components/common/ButtonComp";
import {mapState,mapActions} from "vuex";

const memberStore = "memberStore";
export default {
  name: "UserMypageComp",
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
    }
  },

  created() {
    this.user = {
      ...this.userInfo
    }
  },
  methods: {
    ...mapActions(memberStore,["updateUser","delete"]),
    update() {
      console.log("회원정보 수정!");
      this.updateUser(this.user);
      alert("수정완료!");
      this.$router.push({
        path:"/",
      });
    },
    cancel() {
      this.$router.push({
        path: "/",
      });
    },
    deleteMember() {
      const userid = this.user.userId;
      console.log('aaaaaaaaaa',userid);
      this.delete(userid);
      alert("정말 탈퇴하시겠습니까?");
      this.$router.push({
        path:"/",
      });
    },
  },

  computed: {
    ...mapState(memberStore,["userInfo"]),
  }
};
</script>

<style scoped>
#form-container {
  width: 350px;
  height: 570px;
}
#form-container .input-wrapper label {
  width: 100px;
}
/* #mypage-container .mypage-radio [type="radio"] {
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
#mypage-container .mypage-radio input:checked {
  border: 4px solid red;
} */
#form-container .mypage-radio > div {
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: center;
  gap: 50px;
}
#form-container .mypage-radio > div span {
  display: inline-block;
  width: 25px;
}
#form-container .mypage-radio > div label {
  width: 50px;
  text-align: end;
}
#form-container .button-container {
  margin-top: 20px;
  gap: 20px;
}
#form-container .button-container-sec {
  display: flex;
  gap: 20px;
}
#form-container .button-container-sec div {
  flex: 1;
}
#form-container .button-container-sec > div:nth-child(2) button {
  background-color: #bababa;
}
</style>
