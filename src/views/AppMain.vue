<template>
  <div id="main-container">
    <div class="main-main">
      <h2>Shall we?</h2>
      <div class="main-button-container">
        <div @click="gotoSearch()">
          <button-comp title="아파트 매매 정보"></button-comp>
        </div>
        <div @click="gotoList()">
          <button-comp title="게시판"></button-comp>
        </div>
      </div>
      <div class="main-down-icon">
        <b-icon
          icon="chevron-double-down"
          animation="cylon-vertical"
          font-scale="4"
        ></b-icon>
      </div>
    </div>
    <section class="main-news-container">
      <page-title-comp title="관련 기사"></page-title-comp>
      <div class="main-news-wrapper">
        <img src="@/assets/buildings1.jpg" alt="" />
        <article>
          <div v-html="this.news.desc"></div>
          <a :href="this.news.link">
            기사보러가기
            <b-icon icon="arrow-right"></b-icon>
          </a>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import ButtonComp from "@/components/common/ButtonComp";
import { mapState, mapActions } from "vuex";
import PageTitleComp from "@/components/common/PageTitleComp.vue";
const houseStore = "houseStore";

export default {
  name: "AppMain",
  components: {
    ButtonComp,
    PageTitleComp,
  },

  mounted() {
    this.getNews();
  },

  computed: {
    ...mapState(houseStore, ["news"]),
  },

  methods: {
    ...mapActions(houseStore, ["getNews"]),

    gotoSearch() {
      this.$router.push({
        name: "aptsearch",
      });
    },
    gotoList() {
      this.$router.push({
        name: "boardlist",
      });
    },
  },
};
</script>

<style scoped>
#main-container {
  flex-direction: column;
  gap: 80px;
}
#main-container .main-main {
  width: 100%;
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 100px 0;
}
#main-container .main-main .main-down-icon {
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  bottom: 30px;
}
#main-container .main-main .main-down-icon svg {
  font-size: 200% !important;
  color: #7a7a7a;
}
#main-container h2 {
  font-family: MainTitle;
  font-size: 120px;
}
#main-container .main-button-container {
  /* margin-bottom: 50px; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
}
#main-container .main-news-container {
  width: 700px;
}
#main-container .main-news-container h1 {
  font-size: 33px;
  margin-bottom: 20px;
}
#main-container .main-news-container h1::before {
  height: 35px;
}
#main-container .main-news-wrapper {
  padding: 30px 30px;
  background-color: rgba(0 0 0 / 15%);
  backdrop-filter: blur(4px);
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  gap: 20px;
}
#main-container .main-news-wrapper img {
  width: 230px;
  height: auto;
  border-radius: 10px;
}
#main-container .main-news-wrapper article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
#main-container .main-news-wrapper article > div {
  text-align: left;
}
</style>

