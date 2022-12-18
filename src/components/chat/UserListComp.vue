<template>
  <div class="col-md-4 col-xl-3 chat">
    <div
      class="card mb-sm-3 mb-md-0 contacts_card"
      style="backdrop-filter: blur(10px)"
    >
      <div class="card-header">
        <div class="input-group">
          <!--search 영역 -->
          <input
            type="text"
            placeholder="Search..."
            name=""
            class="form-control search"
            style="border-radius: 15px !important; margin-top: 12px"
          />
        </div>
      </div>

      <div class="card-body contacts_body">
        <ul class="contacts">
          <li
            class="active"
            v-for="(user, index) in users"
            :key="index"
            @click="changePair(user.userId)"
          >
            <div class="d-flex bd-highlight">
              <div class="img_cont">
                <img
                  src="@/assets/user-img6.jpg"
                  class="rounded-circle user_img"
                />
                <span class="online_icon"></span>
              </div>
              <div class="user_info">
                <span>{{ user.userId }}</span>
                <p>{{ user.userId }} is online</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
const chatStore = "chatStore";
const memberStore = "memberStore";
export default {
  name: "UserListComp",
  computed: {
    ...mapState(chatStore, ["users"]),
    ...mapState(memberStore, ["userInfo"]),
  },
  created() {
    const user = this.userInfo.userId;
    console.log(user);
    const params = {
      userId: user,
    };

    this.getUsers(params);
  },

  methods: {
    ...mapMutations(chatStore, ["SET_USER_LIST", "SET_PAIRID"]),
    ...mapActions(chatStore, ["getUsers"]),

    changePair(pairId) {
      console.log(pairId);
      this.SET_PAIRID(pairId);
    },
  },
};
</script>

<style></style>

