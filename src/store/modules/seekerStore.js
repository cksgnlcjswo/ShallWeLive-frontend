import { getSeeker, writeSeeker } from "@/api/seeker.js";

const seekerStore = {
  namespaced: true,
  state: {
    seekers: [],
    seeker: [],
  },
  mutations: {
    SET_SEEKER_LIST: (state, seekers) => {
      state.seekers = seekers;
    },

    SET_SEEKER: (state, seeker) => {
      state.seeker = seeker;
    },
    INSERT_SEEKER: (state, seeker) => {
      state.seekers.push(seeker);
    },
  },
  actions: {
    getSeekers: ({ commit }, apartmentName) => {
      const params = { aptName: apartmentName };
      getSeeker(
        params,
        ({ data }) => {
          commit("SET_SEEKER_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    insertSeeker: ({ commit }, seeker) => {
      writeSeeker(
        seeker,
        ({ data }) => {
          if (data == "success") {
            console.log("seeker 삽입 성공");
            commit("INSERT_SEEKER", seeker);
          } else {
            console.log("메세지 삽입 실패");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default seekerStore;

