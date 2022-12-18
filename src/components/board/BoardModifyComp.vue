<template>
  <div id="board-outer-container">
    <div id="board-main-container">
      <span class="side-stick"></span>
      <div class="detail-title-wrapper">
        <b-form-input id="input-large" size="lg" v-model="subject" placeholder="title"></b-form-input>
        <p>{{ this.board.regtime }}</p>
      </div>
      <div class="detail-content-wrapper">
        <textarea
          name=""
          v-model="content"
          id=""
          style="
            width: 100%;
            height: 100%;
            resize: none;
            border: 1px solid #ced4da;
            border-radius: 15px 0 0 15px;
            padding: 9px 3px 0px 10px;
          "
          placeholder="content"
          autofocus
        ></textarea>
      </div>
      <p class="detail-user-wrapper">
        <span>by. </span>
        {{ this.board.userid }}
      </p>
      <div class="detail-button-wrapper">
        <button-comp @onClickButton="toUpdate" title="수정"></button-comp>
        <button-comp @onClickButton="toDelete" title="삭제"></button-comp>
        <button-comp @onClickButton="toBoardList" title="취소"></button-comp>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComp from "@/components/common/ButtonComp.vue";
import { mapState, mapActions } from "vuex";
const boardStore = "boardStore";

export default {
  components: { ButtonComp },
  name: "BoardModifyComp",
  data() {
    return {
      subject: "",
      content: "",
    };
  },
  computed: {
    ...mapState(boardStore, ["board"]),
  },
  created() {
    this.subject = this.board.subject;
    this.content = this.board.content;

    console.log(this.subject, this.content);
  },
  methods: {
    ...mapActions(boardStore, ["boardModify", "boardDelete"]),

    async toUpdate() {
      const article = {
        ...this.board,
        subject: this.subject,
        content: this.content,
      };
      console.log(article);
      await this.boardModify(article);
      this.toBoardList();
    },
    async toDelete() {
      alert("정말 삭제하시겠습니까?");

      const articleno = this.board.articleno;
      console.log(articleno);
      await this.boardDelete(articleno);
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
