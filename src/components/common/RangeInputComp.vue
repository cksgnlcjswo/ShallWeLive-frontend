<template>
  <div id="range-wrapper">
    <div class="mt-2">{{ value }}만원 이하</div>
    <b-form-input
      id="range-2"
      v-model="value"
      type="range"
      min="5000"
      max="100000"
      step="5000"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  name: "RangeInputComp",
  data() {
    return {
      value: "5000",
    };
  },
};
</script>

<style scoped>
#range-wrapper {
}
#range-wrapper input {
  width: 350px;
}
</style>

