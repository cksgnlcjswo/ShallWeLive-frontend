<template>
  <div id="select-wrapper">
    <div id="range-wrapper">
      <label for="">가격</label>
      <b-form-input
        id="range-2"
        v-model="price"
        type="range"
        min="5000"
        max="100000"
        step="5000"
      ></b-form-input>
      <div>{{ price }}만원 이하</div>
    </div>
    <div class="select-box-wrapper">
      <b-form-select v-model="sidoCode" :options="sidos" @change="gugunList">
      </b-form-select>
      <b-form-select v-model="gugunCode" :options="guguns" @change="dongList">
      </b-form-select>
      <b-form-select v-model="dongCode" :options="dongs" @change="searchApt">
      </b-form-select>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
const houseStore = "houseStore";

export default {
  name: "SelectComp",

  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
      price: 5000,
    };
  },
  computed: {
    ...mapState(houseStore, ["sidos", "guguns", "dongs", "houses"]),
    // sidos() {
    //   return this.$store.state.sidos;
    // },
  },
  created() {
    // this.$store.dispatch("getSido");
    // this.sidoList();
    this.CLEAR_SIDO_LIST();
    this.CLEAR_GUGUN_LIST();
    this.CLEAR_DONG_LIST();
    this.CLEAR_APT_LIST();
    this.getSido();
  },
  methods: {
    ...mapActions(houseStore, [
      "getSido",
      "getGugun",
      "getDong",
      "getHouseList",
    ]),
    ...mapMutations(houseStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_APT_LIST",
      "CLEAR_DONG_LIST",
    ]),

    gugunList() {
      // console.log(this.sidoCode);
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },

    dongList() {
      // console.log(this.sidoCode);
      this.CLEAR_DONG_LIST();
      this.dongCode = null;
      if (this.gugunCode) this.getDong(this.gugunCode);
    },

    searchApt() {
      const params = { dong: this.dongCode, price: this.price };
      if (this.dongCode) this.getHouseList(params);
    },
  },
};
</script>

<style scoped>
#select-wrapper #range-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 2px solid #969696;
  border-radius: 30px;
  box-shadow: 2px 1px 10px 1px rgb(0 0 0 / 20%);
  color: #2c3e50;
  padding: 8px 20px;
}
#select-wrapper #range-wrapper input {
  flex: 1;
}
#select-wrapper .select-box-wrapper {
  display: flex;
  gap: 20px;
}
#select-wrapper select {
  width: 200px;
  height: 45px;
  border: 2px solid #969696;
  border-radius: 30px;
  /* background-color: #b3e5fc; */
  color: #2c3e50;
  text-align: center;
  box-shadow: 2px 1px 10px 1px rgb(0 0 0 / 20%);
}
</style>

