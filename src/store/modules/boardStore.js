import {
  getBoardList,
  boardWrite,
  //   getBoard,
  boardModify,
  boardDelete,
} from "@/api/board";

const boardStore = {
  namespaced: true,
  state: {
    board: null,
    boards: [],
  },
  getters: {
    countBoards: function (state) {
      return state.boards.length;
    },
    getBoards: function (state) {
      return state.boards;
    }
  },
  mutations: {
    SET_BOARD_LIST(state, boards) {
      state.boards = boards;
    },
    SET_BOARD(state, board) {
      state.board = board;
    },
    SET_BOARD_IN_LIST(state, board) {
      
      for (let i = 0; i < state.boards.length; ++i) {
        if (state.boards[i].articleno == board.articleno) {
          state.boards[i] = board;
          break;
        }
      }
    },
    DELETE_BOARD_LIST(state, articleno) {
      for (let i = 0; i < state.boards.length; ++i) {
        if (state.boards[i].articleno == articleno) {
          state.boards.splice(i, 1);
          break;
        }
      }
    },
    SET_BOARD_FRONT(state, board) {
      state.boards.push(board);
    },

  },
  actions: {

    boardWrite: ({ commit },article) => {
      boardWrite(
        article,
        ({ data }) => {
          console.log("getBoardList Action 호출!!!", data);
          commit("SET_BOARD_FRONT", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    getBoardList: ({ commit }) => {
      getBoardList(
        ({ data }) => {
          console.log("getBoardList Action 호출!!!", data);
          commit("SET_BOARD_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    boardModify: ({commit}, article) => {
      boardModify(
        article,
        ({ data }) => {
          console.log(data);
          commit("SET_BOARD_IN_LIST", article);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    boardDelete: ({commit}, articleno) => {
      boardDelete(
        articleno,
        ({ data }) => {
          console.log(data);
          commit("SET_BOARD_IN_LIST", articleno);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    
  },
};

export default boardStore;

