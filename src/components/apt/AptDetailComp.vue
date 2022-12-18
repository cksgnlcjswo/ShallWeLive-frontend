<template>
  <div id="aptdetail-container">
    <div class="apt-img-wrapper">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        :interval="4000"
        fade
        controls
        indicators
      >
        <b-carousel-slide
          v-for="(item, index) in imgItems"
          :key="index"
          :caption="item[1]"
        >
          <template #img>
            <img
              class="d-block img-fluid w-100"
              :src="require(`@/assets/${item[0]}`)"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="apt-info-container">
      <div class="apt-info-wrapper">
        <div>
          <ul>
            <li>
              <span>이름</span>
              <p>{{ this.house.apartmentName }}</p>
            </li>
            <li>
              <span>평균가격</span>
              <p>{{ this.house.dealAmount }}만원</p>
            </li>
            <li>
              <span>면적</span>
              <p>{{ this.house.area }}</p>
            </li>
            <li>
              <span>주소</span>
              <p>
                {{ this.house.sidoName }} {{ this.house.dongName }}
                {{ this.house.roadName }} {{ this.house.jibun }}
              </p>
            </li>
            <li>
              <span>건축연도</span>
              <p>{{ this.house.buildYear }}년</p>
            </li>
          </ul>
        </div>
        <div class="apt-chart-wrapper">
          <line-chart></line-chart>
        </div>
      </div>
      <div class="roommate-container">
        <apt-room-mate-comp @openModal="openUserProfile"></apt-room-mate-comp>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/common//Line.vue";
import AptRoomMateComp from "@/components/apt/AptRoomMateComp";
import { mapState } from "vuex";
const houseStore = "houseStore";

export default {
  name: "AptDetailComp",
  components: {
    AptRoomMateComp,
    LineChart,
  },

  data() {
    return {
      imgItems: [
        ["apt1.jpg", "외관"],
        ["apt2.jpg", "외관"],
        ["stairs.jpg", "복도"],
        ["bedroom.jpg", "침실"],
        ["kitchen.jpg", "부엌"],
      ],
    };
  },

  computed: {
    ...mapState(houseStore, ["house"]),
  },

  methods: {
    openUserProfile(userid) {
      console.log("모달열어!", userid);
    },
  },
};
</script>

<style scoped>
#aptdetail-container {
  min-height: calc(100vh - 140px);
}
#aptdetail-container div {
  /* border: 1px solid salmon; */
}
#aptdetail-container .apt-img-wrapper img {
  /* width: 100%; */
  height: 400px;
  object-fit: contain;
  border-radius: 20px;
}
#aptdetail-container .apt-info-container {
  min-height: calc(100vh - 140px - 400px); /* 400px : 캐러셀 높이 */
  display: flex;
  gap: 30px;
  margin-top: 50px;
}
#aptdetail-container .apt-info-wrapper {
  flex: 1;
}
#aptdetail-container .apt-info-wrapper > div {
  padding: 30px 30px;
  background-color: rgba(0 0 0 / 10%);
  backdrop-filter: blur(4px);
  border-radius: 20px;
}
#aptdetail-container .apt-info-wrapper ul {
  margin: auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
#aptdetail-container .apt-info-wrapper ul li {
  display: flex;
  font-size: 20px;
}
#aptdetail-container .apt-info-wrapper ul li span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  gap: 10px;
  margin-right: 25px;
  /* text-align: center; */
}
#aptdetail-container .apt-info-wrapper ul li span::after {
  content: "";
  display: block;
  width: 1px;
  height: 20px;
  border: 2px solid #b3e5fc;
  /* margin-right: 10px; */
}
#aptdetail-container .apt-info-wrapper ul li span {
}
#aptdetail-container .apt-info-wrapper ul li p {
  margin: 0;
}
#aptdetail-container .apt-chart-wrapper {
  margin-top: 30px;
}
#aptdetail-container .roommate-container {
  flex: 1;
}
</style>

