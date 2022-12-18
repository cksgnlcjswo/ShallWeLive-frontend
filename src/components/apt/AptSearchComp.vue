<template>
  <div id="search-container">
    <page-title-comp title="매매정보"></page-title-comp>
    <section>
      <div class="search-left-container">
        <apt-selectbox-comp></apt-selectbox-comp>
        <div class="aptlist-container">
          <apt-list-comp></apt-list-comp>
        </div>
      </div>
      <!-- <div class="select-info-container"> -->
      <div class="map-wrapper">
        <apt-map-comp></apt-map-comp>
      </div>
      <!-- </div> -->
    </section>
  </div>
</template>

<script>
import PageTitleComp from "@/components/common/PageTitleComp";
import AptSelectboxComp from "@/components/apt/AptSelectboxComp";
import AptListComp from "@/components/apt/AptListComp";
import AptMapComp from "@/components/apt/AptMapComp";

export default {
  name: "AptSearchComp",
  components: {
    PageTitleComp,
    AptSelectboxComp,
    AptListComp,
    AptMapComp,
  },
};
</script>

<style scoped>
#search-container {
}
#search-container > section {
  display: flex;
  gap: 50px;
  min-height: calc(100vh - 250px);
}
#search-container .search-left-container {
  flex: 0.4;
}
#search-container .aptlist-container {
  /* width: 100%; */
}
#search-container .map-wrapper {
  width: 100%;
}
</style>

