import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/views/AppMain";
import store from "@/store";

Vue.use(VueRouter);

const onlyAuthUser = async (to, from, next) => {
  const checkUserInfo = store.getters["memberStore/checkUserInfo"];
  const checkToken = store.getters["memberStore/checkToken"];
  let token = sessionStorage.getItem("access-token");
  console.log("로그인 처리 전", checkUserInfo, token);

  if (checkUserInfo != null && token) {
    console.log("토큰 유효성 체크하러 가자!!!!");
    await store.dispatch("memberStore/getUserInfo", token);
  }
  if (!checkToken || checkUserInfo === null) {
    alert("로그인이 필요한 페이지입니다..");
    // next({ name: "login" });
    router.push({ name: "login" });
  } else {
    console.log("로그인 했다!!!!!!!!!!!!!.");
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "main",
    component: AppMain,
  },
  {
    path: "/apt",
    name: "apt",
    component: () => import("@/views/AppApt"),
    beforeEnter: onlyAuthUser,
    children: [
      {
        path: "aptsearch",
        name: "aptsearch",
        component: () => import("@/components/apt/AptSearchComp"),
      },
      {
        path: "aptdetail",
        name: "aptdetail",
        component: () => import("@/components/apt/AptDetailComp"),
      },
    ],
  },
  {
    path: "/board",
    name: "board",
    component: () => import("@/views/AppBoard"),
    beforeEnter: onlyAuthUser,
    children: [
      {
        path: "boardlist",
        name: "boardlist",
        component: () => import("@/components/board/BoardListComp"),
      },
      {
        path: "boarddetail",
        name: "boarddetail",
        component: () => import("@/components/board/BoardDetailComp"),
      },
      {
        path: "boardmodify",
        name: "boardmodify",
        component: () => import("@/components/board/BoardModifyComp"),
      },
      {
        path: "boardcreate",
        name: "boardcreate",
        component: () => import("@/components/board/BoardCreateComp"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/AppUser"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/user/UserLoginComp"),
      },
      {
        path: "signup",
        name: "signup",
        component: () => import("@/components/user/UserSignupComp"),
      },
      {
        path: "mypage",
        name: "mypage",
        component: () => import("@/components/user/UserMypageComp"),
        beforeEnter: onlyAuthUser,
      },
    ],
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("@/views/AppChat"),
    beforeEnter: onlyAuthUser,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

