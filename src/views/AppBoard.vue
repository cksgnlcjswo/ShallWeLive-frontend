<template>
  <div id="board-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AppBoard",
};
</script>

<style>
#board-container {
  width: 100%;
  min-height: calc(100vh - 140px);
}
#board-container #board-outer-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#board-container #board-outer-container #board-main-container {
  width: 90%;
  max-width: 900px;
  height: 90%;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  border: 1px solid #ababab;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 50px;
}
</style>

