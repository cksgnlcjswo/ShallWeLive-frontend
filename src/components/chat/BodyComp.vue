<template>
  <div class="card-body msg_card_body">
    <div class="mb-4" v-for="(message, index) in messages" :key="index">
      <div v-if="message.ruser == pairId" class="d-flex justify-content-start">
        <div class="img_cont_msg">
          <img
            src="@/assets/user-img6.jpg"
            class="rounded-circle user_img_msg"
          />
        </div>
        <div style="display: flex; flex-direction: column">
          <div class="msg_cotainer" style="background-color: #e6ffff">
            {{ message.content }}
          </div>
          <span style="position: static; margin-top: 3px" class="msg_time"
            >8:40 AM, Today</span
          >
        </div>
      </div>

      <!--이놈이 오른쪽으로 오도록-->
      <div v-else class="d-flex justify-content-end">
        <div style="display: flex; flex-direction: column">
          <div class="msg_cotainer_send" style="background-color: #b3e5fc">
            {{ message.content }}
          </div>
          <span style="position: static; margin-top: 3px" class="msg_time_send"
            >9:05 AM, Today</span
          >
        </div>
        <div class="img_cont_msg">
          <img
            src="@/assets/user-img5.jpg"
            class="rounded-circle user_img_msg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
const chatStore = "chatStore";
const memberStore = "memberStore";

export default {
  computed: {
    ...mapState(chatStore, ["pairId", "messages"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  watch: {
    pairId: function () {
      console.log(`상대방id: ${this.pairId} `);
      console.log(`내 id ${this.userInfo.userId}`);
      const params = {
        me: this.userInfo.userId,
        you: this.pairId,
      };
      this.getMessages(params);
    },
  },

  methods: {
    ...mapMutations(chatStore, ["CLEAR_MESSAGE_LIST"]),
    ...mapActions(chatStore, ["getMessages"]),
  },
};
</script>

<style></style>

