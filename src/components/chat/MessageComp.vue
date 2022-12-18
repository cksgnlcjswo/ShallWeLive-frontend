<template>
  <div class="card-footer">
    <div class="input-group">
      <textarea
        class="form-control type_msg"
        placeholder="Type your message..."
        v-model="content"
      ></textarea>
      <!-- <b-button variant="info" @click="sendMessage">전송</b-button> -->
      <b-button
        style="
          background-color: #b3e5fc;
          border: 1px solid #b3e5fc;
          color: black;
        "
        @click="sendMessage"
        >전송</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const chatStore = "chatStore";
const memberStore = "memberStore";
export default {
  data() {
    return {
      content: null,
    };
  },

  computed: {
    ...mapState(chatStore, ["pairId"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  methods: {
    ...mapActions(chatStore, ["insertMessage"]),

    sendMessage() {
      const message = {
        suser: this.userInfo.userId,
        ruser: this.pairId,
        content: this.content,
      };
      console.log(`pairId ${this.pairId}`);
      this.insertMessage(message);
      this.content = "";
    },
  },
};
</script>

<style scoped>
.form-control type_msg {
  overflow-y: hidden;
  resize: none;
}
</style>

