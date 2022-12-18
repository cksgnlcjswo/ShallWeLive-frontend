<template>
  <div id="board-outer-container">
    <div id="board-main-container">
      <span class="side-stick"></span>
      <div class="detail-title-wrapper">
        <h5>{{ this.board.subject }}</h5>
        <p>{{ this.board.regtime }}</p>
      </div>
      <div class="detail-content-wrapper">
        <p>{{ this.board.content }}</p>
      </div>
      <p class="detail-user-wrapper">
        <span>by. </span>
        {{ this.board.userid }}
      </p>
      <div class="detail-button-wrapper">
        <button-comp
          v-if="this.userInfo.userId == board.userid"
          @onClickButton="toBoardModify"
          title="수정"
        ></button-comp>
        <button-comp @onClickButton="toBoardList" title="목록"></button-comp>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComp from "@/components/common/ButtonComp.vue";
import { mapState } from "vuex";
const boardStore = "boardStore";
const memberStore = "memberStore";

export default {
  components: { ButtonComp },
  name: "BoardDetailComp",
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(boardStore, ["board"]),
  },
  methods: {
    toBoardModify() {
      this.$router.push({ name: "boardmodify" });
    },
    toBoardList() {
      this.$router.push({ name: "boardlist" });
    },
  },
  mounted() {},
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
#board-main-container .detail-content-wrapper textarea {
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

