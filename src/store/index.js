import Vue from "vue";
import Vuex from "vuex";
import memberStore from "@/store/modules/memberStore";
import houseStore from "@/store/modules/houseStore";
import createPersistedState from "vuex-persistedstate";
import chatStore from "@/store/modules/chatStore";
import seekerStore from "@/store/modules/seekerStore";
import boardStore from "@/store/modules/boardStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    boardStore,
    houseStore,
    memberStore,
    chatStore,
    //todoStore,
    seekerStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});

