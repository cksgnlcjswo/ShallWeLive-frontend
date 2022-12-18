<template>
  <button @click.prevent="onClickEmit">{{ title }}</button>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
    title: String,
  },
  methods: {
    // 로그인 이벤트 발생
    onClickEmit() {
      this.$emit("onClickButton");
    },
  },
};
</script>

<style scoped>
button {
  background: #b3e5fc;
  color: #2c3e50;
  width: 300px;
  padding: 13px 18px;
  outline: none;
  border: none;
  border-radius: 25px !important;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
}
.button-lg {
  font-size: 20px !important;
}
.button-md {
  font-size: 15px !important;
}
.button-sm {
  font-size: 10px !important;
}
</style>

