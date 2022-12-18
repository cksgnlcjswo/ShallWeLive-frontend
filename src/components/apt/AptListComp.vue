<template>
  <div
    id="aptlist-container"
    class="overflow-auto"
    v-if="houses && houses.length != 0"
  >
    <div class="aptlist-wrapper">
      <b-table
        hover
        id="my-table"
        select-mode="single"
        selectable
        @row-clicked="onRowSelected"
        :items="houses"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
    </div>
    <div class="aptlist-pg-wrapper">
      <b-pagination
        pills
        v-model="currentPage"
        :total-rows="countHouse"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
    <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
  </div>
  <b-alert class="overflow-auto" v-else>주택 목록이 없습니다.</b-alert>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
const houseStore = "houseStore";

export default {
  name: "AptListComp",
  data() {
    return {
      fields: [
        {
        key:'apartmentName',
        label: '아파트 이름'
        },
        {
        key:'dealAmount',
        label: '가격(만원)'
        },
        {
        key:'area',
        label: '아파트 면적'
        },
        {
        key:'dealYear',
        label: '거래연도'
        }],
      perPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    ...mapState(houseStore, ["houses", "center"]),
    ...mapGetters(houseStore, ["countHouse"]),
  },

  methods: {
    ...mapMutations(houseStore, ["SET_CENTER"]),

    onRowSelected(record, index) {
      console.log(record);
      console.log(index);
      const center = {
        lat: record.lat,
        lng: record.lng,
      };
      this.SET_CENTER(center);
    },
  },
};
</script>

<style scoped>
#aptlist-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
#aptlist-container .aptlist-wrapper {
  width: 100%;
}
#aptlist-container .aptlist-wrapper > table {
  margin: 0;
}
#aptlist-container .aptlist-pg-wrapper > ul {
  margin: 0;
}
#aptlist-container .aptlist-pg-wrapper {
  margin-top: 30px;
}
</style>

