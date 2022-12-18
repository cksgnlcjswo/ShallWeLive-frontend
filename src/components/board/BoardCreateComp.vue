<template>
  <div id="board-outer-container">
    <div id="board-main-container">
      <span class="side-stick"></span>
      <div class="detail-title-wrapper">
        <!-- <h5>{{ this.article.subject }}</h5> -->
        <!-- <input type="text" :value="this.article.subject" /> -->
        <b-form-input id="input-large" size="lg" placeholder="title" autofocus v-model="subject"></b-form-input>
      </div>
      <div class="detail-content-wrapper">
        <!-- <p>{{ this.article.content }}</p> -->
        <textarea
          placeholder="content"
          style="
            width: 100%;
            height: 100%;
            resize: none;
            border: 1px solid #ced4da;
            border-radius: 15px 0 0 15px;
            padding: 9px 3px 0px 10px;
          "
          v-model="content"
        ></textarea>
      </div>
      <p class="detail-user-wrapper">
        <span>by. </span>
        {{ this.userInfo.userId }}
      </p>
      <div class="detail-button-wrapper">
        <button-comp @onClickButton="toCreate" title="등록"></button-comp>
        <button-comp @onClickButton="toBoardList" title="취소"></button-comp>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComp from "@/components/common/ButtonComp.vue";
import { mapActions, mapState } from "vuex";
const memberStore = "memberStore";
const boardStore = "boardStore";

export default {
  components: { ButtonComp },
  name: "BoardModifyComp",
  data() {
    return {
      userid: "",
      subject: "",
      content: "",
      hit: "",
    };
  },

  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },

  methods: {
    ...mapActions(boardStore, ["boardWrite"]),

    toCreate() {
      const article = {
        userid: this.userInfo.userId,
        subject: this.subject,
        content: this.content,
      };
      console.log(article);
      this.boardWrite(article);
      this.toBoardList();
    },
    toBoardList() {
      this.$router.push({ name: "boardlist" });
    },
  },
};
</script>

<style scoped>
#board-outer-container {
}
#board-outer-container #board-main-container {
  position: relative;
}
#board-main-container .side-stick {
  position: absolute;
  width: 5px;
  height: 70px;
  left: 0;
  background-color: #b3e5fc;
}
#board-main-container .detail-title-wrapper {
  margin: 0 15px 27px 15px;
}
#board-main-container .detail-title-wrapper h5 {
  font-size: 40px;
  text-align: start;
  margin-bottom: 0;
  color: #2c3e50;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
}
#board-main-container .detail-title-wrapper p {
  text-align: start;
  margin-bottom: 0;
  color: #ababab;
  font-size: 17px;
}
#board-main-container .detail-content-wrapper {
  flex: 1;
}
#board-main-container .detail-content-wrapper p {
  color: #6c757d;
  font-size: 20px;
  text-align: start;
  margin-bottom: 0;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
}
#board-main-container .detail-user-wrapper {
  text-align: end;
  margin: 15px 0px;
  color: #ababab;
  font-size: 20px;
}
#board-main-container .detail-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
}
#board-main-container .detail-button-wrapper button {
  width: 155px;
  padding: 10px 18px;
}
</style>
