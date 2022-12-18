<template>
  <!-- <router-link :to="{ name: 'boarddetail' }"> -->
  <div @click="toDetail" id="boardlist-item-container" class="card card-body">
    <span class="side-stick"></span>
    <div class="board-item-title-wrapper">
      <h5>
        {{ this.boardItem.subject }}
      </h5>
      <p>{{ this.boardItem.regtime }}</p>
    </div>
    <div class="board-item-content-wrapper">
      <p>{{ this.boardItem.content }}</p>
    </div>
    <p class="board-item-user-wrapper">
      <span>by. </span>
      {{ this.boardItem.userid }}
    </p>
  </div>
  <!-- </router-link> -->
</template>

<script>
import { mapMutations } from "vuex";
const boardStore = "boardStore";

export default {
  name: "BoardListItem",
  props: {
    boardItem: Object,
  },
  methods: {
    ...mapMutations(boardStore, ["SET_BOARD"]),
    toDetail() {
      this.SET_BOARD(this.boardItem);
      this.$router.push({ name: "boarddetail" });
    },
  },
};
</script>

<style scoped>
a {
  text-shadow: none !important;
}
#boardlist-item-container:hover {
  transform: translateY(-3px);
  transition: all ease-in 0.2s;
}
#boardlist-item-container {
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  border: 1px solid #ababab;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}
#boardlist-item-container.card-body {
  flex: 1 1 auto;
  padding: 1.57rem;
}
#boardlist-item-container .side-stick {
  position: absolute;
  width: 5px;
  height: 40px;
  left: 0;
  background-color: #b3e5fc;
}
#boardlist-item-container .board-item-title-wrapper {
  margin-left: 15px;
  margin-bottom: 15px;
}
#boardlist-item-container .board-item-title-wrapper h5 {
  text-align: start;
  margin-bottom: 0;
  color: #2c3e50;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
}
#boardlist-item-container .board-item-title-wrapper p {
  text-align: start;
  margin-bottom: 0;
  color: #ababab;
  font-size: 14px;
}
#boardlist-item-container .board-item-content-wrapper {
  height: 50px;
}
#boardlist-item-container .board-item-content-wrapper p {
  color: #6c757d;
  text-align: start;
  margin-bottom: 0;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
#boardlist-item-container .board-item-user-wrapper {
  text-align: end;
  margin: 0;
  color: #ababab;
  position: absolute;
  bottom: 20px;
  right: 20px;
}

@media (max-width: 767.98px) {
  #boardlist-item-container {
    max-width: 100%;
  }
}

@media (max-width: 991.98px) {
  #boardlist-item-container {
    max-width: 216px;
  }
}
</style>

