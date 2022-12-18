<template>
  <li @click="onClickItemEmit" id="roommate-item-container">
    <div class="roommate-user">
      <b-icon class="roommate-icon" icon="person-circle"></b-icon>
      <span>{{ user.userId }}</span>
    </div>
    <div class="roommate-bubble-wrapper">
      <img src="@/assets/speech_bubble_start.png" alt="" />
      <div class="bubble-content-wrapper">
        <img src="@/assets/speech_bubble.png" alt="" />
        <p>{{ user.content }}</p>
      </div>
      <img src="@/assets/speech_bubble_end.png" alt="" />
    </div>
  </li>
</template>

<script>
export default {
  name: "AptRoomMateItem",
  props: {
    user: Object,
  },
  methods: {
    onClickItemEmit() {
      this.$emit("openModal", this.user);
    },
  },
};
</script>

<style scoped>
#roommate-item-container {
  display: flex;
  align-items: center;
}
#roommate-item-container:hover {
  transform: translateY(-3px);
  transition: all ease-in 0.2s;
}
#roommate-item-container .roommate-user {
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#roommate-item-container .roommate-user:hover {
  cursor: pointer;
}
#roommate-item-container .roommate-icon {
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  box-shadow: 0 0 9px 0px #5f5f5f !important;
}
#roommate-item-container .roommate-bubble-wrapper {
  display: flex;
  height: 80px;
  margin-left: 20px;
}
#roommate-item-container .roommate-bubble-wrapper img {
  height: 100%;
}
#roommate-item-container .bubble-content-wrapper {
  max-width: 450px;
}
#roommate-item-container .bubble-content-wrapper img {
  width: 100%;
  object-fit: fill;
}
#roommate-item-container .bubble-content-wrapper p {
  margin: 0;
  transform: translate(0px, -53px);
}
</style>

