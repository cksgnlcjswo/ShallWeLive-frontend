<template>
  <div id="boardlist-container">
    <page-title-comp title="게시판"></page-title-comp>
    <div class="board-main-container" v-if="boards && boards.length != 0">
      <div class="board-button-wrapper">
        <button-comp @onClickButton="toBoardWrite" title="Write"></button-comp>
      </div>
      <ul class="board-items-container" id="my-board">
        <board-list-item-comp
          v-for="(board, index) in slicedBoards"
          :key="index"
          :boardItem="board"
        ></board-list-item-comp>
      </ul>
      <div class="boardlist-pg-wrapper">
        <b-pagination
          pills
          @change="onPageChanged"
          v-model="currentPage"
          :total-rows="countBoards"
          :per-page="perPage"
        ></b-pagination>
      </div>
    </div>
    <b-alert class="overflow-auto" v-else>게시물이 없습니다.</b-alert>
  </div>
</template>

<script>
import PageTitleComp from "@/components/common/PageTitleComp";
import BoardListItemComp from "@/components/board/BoardListItemComp";
import ButtonComp from "@/components/common/ButtonComp.vue";
import { mapActions, mapState, mapGetters } from "vuex";
const boardStore = "boardStore";

export default {
  name: "BoardListComp",
  components: {
    PageTitleComp,
    BoardListItemComp,
    ButtonComp,
  },
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      slicedBoards: [],
    };
  },
  computed: {
    ...mapState(boardStore, ["boards"]),
    ...mapGetters(boardStore, ["countBoards", "getBoards"]),
  },
  methods: {
    ...mapActions(boardStore, ["getBoardList"]),
    paginate(page) {
      let boardsToParse = this.boards;
      this.slicedBoards = boardsToParse.slice((page - 1) * this.perPage, page * this.perPage);
    },
    onPageChanged(page) {
      this.paginate(page);
    },
    toBoardWrite() {
      this.$router.push({ name: "boardcreate" });
    },
  },
  mounted() {
    this.getBoardList();
    this.paginate(this.currentPage);
  },
};
</script>

<style scoped>
#boardlist-container > h1 {
  margin-bottom: 40px;
}
#boardlist-container .board-button-wrapper {
  display: flex;
  justify-content: end;
}
#boardlist-container .board-button-wrapper button {
  width: 180px;
  margin: 0px 50px 40px 0px;
}
#boardlist-container .board-items-container {
  margin: 0;
  padding: 0;
  display: grid;
  column-gap: 50px;
  row-gap: 70px;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: 100px; */
  grid-auto-flow: dense;
}

#boardlist-container .boardlist-pg-wrapper {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
</style>
