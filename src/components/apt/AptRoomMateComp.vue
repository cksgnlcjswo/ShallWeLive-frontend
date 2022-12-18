<template>
  <div id="roommate-container">
    <div>
      <div class="roommate-header">
        <b-icon class="header-icon" icon="megaphone-fill"></b-icon>
        <h3>룸메이트를 찾고있는 유저</h3>
      </div>
      <ul class="roommate-main">
        <apt-room-mate-item
          v-for="(user, index) in this.seekers"
          :user="user"
          :key="index"
          v-b-modal.modal-profile
          @openModal="openProfileModal"
        ></apt-room-mate-item>
      </ul>
    </div>
    <div v-b-modal.modal-write class="write-button-wrapper">
      <button-comp title="WRITE"></button-comp>
    </div>

    <!-- 룸메이트 작성 모달 -->
    <b-modal
      id="modal-write"
      title="룸메이트 찾기 등록"
      centered
      header-border-variant="white"
      footer-border-variant="white"
      @ok="handleOk"
    >
      <b-form-group label-for="content-input">
        <b-form-input id="content-input" v-model="newContent" required></b-form-input>
      </b-form-group>
    </b-modal>

    <!-- 룸메이트 유저 프로필 모달 -->
    <b-modal
      id="modal-profile"
      centered
      hide-footer
      header-border-variant="white"
      footer-border-variant="white"
      :user="this.seeker"
    >
      <div id="roommate-modal-body">
        <section>
          <!-- <img :src="require(`@/assets/${this.user.img}`)" alt="" /> -->
          <img :src="require(`@/assets/user-img5.jpg`)" alt="" />
          <p>{{ this.seeker.username }}</p>
          <span>{{ this.seeker.userId }}</span>
        </section>
        <button-comp title="Send message" @onClickButton="sendMessage"></button-comp>
        <ul>
          <li>
            <b-icon icon="envelope" class="li-icons"></b-icon>
            <p>{{ this.seeker.email }}</p>
          </li>
          <li>
            <b-icon icon="telephone" class="li-icons"></b-icon>
            <p>{{ this.seeker.phone }}</p>
          </li>
          <li>
            <b-icon icon="megaphone" class="li-icons"></b-icon>
            <p>{{ this.seeker.info }}</p>
          </li>
        </ul>
      </div>
    </b-modal>
  </div>
</template>

<script>
import AptRoomMateItem from "@/components/apt/AptRoomMateItem";
import ButtonComp from "@/components/common/ButtonComp";
import { mapActions, mapMutations, mapState } from "vuex";

const seekerStore = "seekerStore";
const houseStore = "houseStore";
const memberStore = "memberStore";
const chatStore = "chatStore";

export default {
  name: "AptRoomMate",
  components: {
    AptRoomMateItem,
    ButtonComp,
  },

  data() {
    return {
      newContent: null,
    };
  },
  computed: {
    ...mapState(seekerStore, ["seekers", "seeker"]),
    ...mapState(houseStore, ["house"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  methods: {
    ...mapMutations(seekerStore, ["SET_SEEKER"]),
    ...mapActions(seekerStore, ["insertSeeker"]),
    ...mapActions(chatStore, ["insertMessage"]),

    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault();

      const seeker = {
        aptCode: this.house.aptCode,
        userId: this.userInfo.userId,
        content: this.newContent,
      };
      this.insertSeeker(seeker);
      this.newContent = "";
      window.location.reload(true);
    },

    openProfileModal(user) {
      this.SET_SEEKER(user);
    },

    sendMessage() {
      console.log("message btn clicked!");

      const message = {
        suser: this.userInfo.userId,
        ruser: this.seeker.userId,
        content: "안녕하세요.",
      };
      this.insertMessage(message);
      this.$router.push({
        name: "chat",
      });
    },
  },
};
</script>

<style scoped>
#roommate-container {
  min-height: 100%;
  margin: auto;
  padding: 30px 30px;
  width: 100%;
  background-color: rgba(0 0 0 / 10%);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#roommate-container .roommate-header {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
#roommate-container .roommate-header .header-icon {
  width: 30px;
  height: 30px;
  color: #b3e5fc;
}
#roommate-container .roommate-header h3 {
  margin: 0;
}
#roommate-container .roommate-main {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
#roommate-container .write-button-wrapper {
  margin: 0 auto;
}
#roommate-container .write-button-wrapper button {
  width: 200px;
}

/* 프로필 모달 */
#roommate-modal-body {
  width: 80%;
  height: 450px;
  margin: auto;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#roommate-modal-body section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
#roommate-modal-body section img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}
#roommate-modal-body section p {
  margin: 0;
  font-size: 25px;
  color: #2c3e50;
}
#roommate-modal-body section span {
  color: #6c757d;
}
#roommate-modal-body ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#roommate-modal-body ul li {
  display: flex;
  align-items: start;
}
#roommate-modal-body ul li .li-icons {
  margin-right: 10px;
  transform: translate(0, 5px);
  color: #5d8ba0;
}
#roommate-modal-body ul li p {
  margin: 0;
}
</style>
