<template>
  <div id="header-container">
    <div class="header-wrapper">
      <router-link :to="{ name: 'main' }">
        <img id="logo" src="@/assets/logo3.png" alt="logo" />
      </router-link>
      <ul v-if="userInfo">
        <li>
          <router-link :to="{ name: 'mypage' }">
            <b-icon icon="person-circle"></b-icon>
            myPage
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'chat' }"
            ><b-icon icon="chat-dots"></b-icon> Message</router-link
          >
        </li>
        <li>
          <a href="#" @click.prevent="onClickLogout">Logout</a>
        </li>
      </ul>

      <ul v-else>
        <li><router-link :to="{ name: 'login' }">Login</router-link></li>
        <li><router-link :to="{ name: 'signup' }">Signup</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "TheHeaderNavbar",

  data() {
    return {};
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userLogout"]),
    // ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
    onClickLogout() {
      // this.SET_IS_LOGIN(false);
      // this.SET_USER_INFO(null);
      // sessionStorage.removeItem("access-token");
      // if (this.$route.path != "/") this.$router.push({ name: "main" });
      console.log(this.userInfo.userid);
      //vuex actions에서 userLogout 실행(Backend에 저장 된 리프레시 토큰 없애기
      //+ satate에 isLogin, userInfo 정보 변경)
      // this.$store.dispatch("userLogout", this.userInfo.userid);
      this.userLogout(this.userInfo.userid);
      sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
      sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
      if (this.$route.path != "/") this.$router.push({ name: "main" });
    },
  },
};
</script>

<style scoped>
#header-container {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
}
#header-container .header-wrapper {
  margin: auto;
  left: 0;
  right: 0;
  width: 90%;
  max-width: 1536px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#header-container #logo {
  width: 150px;
}
#header-container ul {
  margin: 0;
  display: flex;
  gap: 20px;
  font-size: 20px;
}
#header-container ul .b-icon {
  border-radius: 50%;
  box-shadow: 0 0 4px 1px #818181 !important;
}
</style>

