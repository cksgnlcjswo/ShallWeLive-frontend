<template>
  <h1 id="page-title-comp">{{ title }}</h1>
</template>

<script>
export default {
  name: "PageTitleComp",
  props: {
    title: String,
  },
};
</script>

<style scoped>
h1#page-title-comp {
  text-align: start;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
h1#page-title-comp::before {
  content: "";
  border: 2px solid #b3e5fc;
  margin-right: 15px;
  display: inline-block;
  height: 45px;
}
</style>

