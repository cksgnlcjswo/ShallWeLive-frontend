<template>
  <div id="user-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AppUser",
};
</script>

<style>
#user-container {
  /* background-color: #c3ecff; */
  /* background-color: #e6ffff; */
  /* background-color: #fff; */
  /* background-color: #c2e7f8; */
  background-color: rgb(100 100 100 / 60%);
  border-radius: 10px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
}
#user-container #form-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#user-container #form-container .input-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
#user-container .input-wrapper label {
  width: 80px;
  text-align: start;
  color: #ffffff;
}
#user-container #form-container .button-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
#user-container #form-container .button-container button {
  width: 100%;
}
</style>

