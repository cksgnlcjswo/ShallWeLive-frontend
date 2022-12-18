<template>
  <div id="map"></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
const houseStore = "houseStore";
const seekerStore = "seekerStore";
export default {
  name: "AptMapComp",

  data() {
    return {
      map: null,
    };
  },
  computed: {
    ...mapState(houseStore, ["houses", "center"]),
    ...mapState(seekerStore, ["seekers"]),
  },

  watch: {
    center: function () {
      console.log(`lat : ${this.center.lat}, lng: ${this.center.lng}`);
      this.map.setCenter(
        new kakao.maps.LatLng(this.center.lat, this.center.lng)
      );
    },
    houses: function () {
      //positions에 데이터 lat,lng 넣어두기

      let positions = [];

      for (let i = 0; i < this.houses.length; ++i) {
        positions.push({
          title: this.houses[i].apartmentName,
          latlng: new kakao.maps.LatLng(this.houses[i].lat, this.houses[i].lng),
        });
      }
      if (positions.length > 0) {
        this.map.setCenter(positions[0].latlng);
      }

      for (let i = 0; i < positions.length; ++i) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        });

        kakao.maps.event.addListener(marker, "click", async () => {
          //마커 클릭시 디테일 페이지 이동
          console.log(`${this.houses[i].apartmentName} clicked!`);
          await this.detailHouse(this.houses[i].apartmentName);
          await this.getHouseHistory(this.houses[i].apartmentName);
          await this.getSeekers(this.houses[i].apartmentName);
          this.$router.push({
            name: "aptdetail",
          });
        });
      }
    },
  },

  methods: {
    ...mapActions(houseStore, ["detailHouse", "getHouseHistory"]),
    ...mapActions(seekerStore, ["getSeekers"]),
    initMap() {
      let container = document.getElementById("map");
      let options = {
        center: new kakao.maps.LatLng(37.50238307905, 127.0445569933),
        level: 3,
      };

      this.map = new kakao.maps.Map(container, options);
    },
  },

  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      console.log(`script 호출 ${script}`);
      script.type = "text/javascript";
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;
      document.head.appendChild(script);
    }
  },
};
</script>

<style>
#map {
  /* width: 364.88px; */
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
}
</style>

