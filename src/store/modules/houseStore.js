import { sidoList, gugunList,dongList,houseList,getHouse,HouseHistory,getNews} from "@/api/house.js";

const houseStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "시/도" }],
    guguns: [{ value: null, text: "구/군" }],
    dongs: [{ value: null, text: "동" }],
    center: null,
    houses: [],
    houseHistory: [],
    house: null,
    news: null,
  },
  getters: {
    countHouse: function (state) {
      return state.houses.length;
    },
  },
  mutations: {
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "시/도" }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "구/군" }];
    },
    CLEAR_DONG_LIST(state) {
      state.dongs = [{ value: null, text: "동" }];
    },
    CLEAR_APT_LIST(state) {
      state.houses = [];
      state.house = null;
    },
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    
    SET_NEWS(state, news) {
      state.news = news;
    },

    SET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    SET_DONG_LIST(state, dongs) {
      dongs.forEach((dong) => {
        state.dongs.push({ value: dong.dongCode, text: dong.dongName });
      });
    },

    SET_HOUSE_LIST(state, houses) {
      state.houses = houses;
    },
    SET_DETAIL_HOUSE(state, house) {
      state.house = house;
    },
    SET_CENTER(state, center) {
      state.center = center;
    },

    SET_HOUSEHISTORY(state, houseHistory) {
      state.houseHistory = houseHistory;
    }
  },
  actions: {
    getSido: ({ commit }) => {
      sidoList(
        ({ data }) => {
          commit("SET_SIDO_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getNews: ({ commit }) => {
      getNews(
        ({ data }) => {
          commit("SET_NEWS", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getGugun: ({ commit }, sidoCode) => {
      const params = { sido: sidoCode };
      gugunList(
        params,
        ({ data }) => {
          commit("SET_GUGUN_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    getDong: ({ commit }, gugunCode) => {
      const params = { gugun: gugunCode };
      dongList(
        params,
        ({ data }) => {
          commit("SET_DONG_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getHouseList: ({ commit }, params) => {
      
      console.log(`dong: ${params.dong} price: ${params.price}`);
      houseList(
        params,
        ({data}) => {
          console.log(data);
          commit("SET_HOUSE_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    detailHouse: ({ commit }, apartmentName) => {
      // 나중에 house.일련번호를 이용하여 API 호출
      console.log(`detailhouse ${apartmentName}`);
      const params = { aptName: apartmentName };
      getHouse(
        params,
        ({data}) => {
          console.log(data);
          commit("SET_DETAIL_HOUSE", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getHouseHistory: ({ commit }, apartmentName) => {
      // 나중에 house.일련번호를 이용하여 API 호출
      console.log(`houseHistory ${apartmentName}`);
      const params = { aptName: apartmentName };
      HouseHistory(
        params,
        ({data}) => {
          console.log(data);
          commit("SET_HOUSEHISTORY", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default houseStore;
