<template>
  <div id="selectbox-container">
    <select-comp></select-comp>
    <!-- <button-comp title="search"></button-comp> -->
  </div>
</template>

<script>
import SelectComp from "@/components/common/SelectComp";
// import ButtonComp from "@/components/common/ButtonComp";

export default {
  name: "AptSelectboxComp",
  components: {
    SelectComp,
    // ButtonComp,
  },
};
</script>

<style scoped>
#selectbox-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
#selectbox-container button {
  width: 200px;
  height: 40px;
  padding: 0;
}
#range-wrapper {
}
#range-wrapper input {
  width: 350px;
}
</style>
