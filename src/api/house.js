import { apiInstance } from "./index.js";

const api = apiInstance();
//const house = houseInstance();

function sidoList(success, fail) {
  api.get(`/apt/sido`).then(success).catch(fail);
}

function gugunList(params, success, fail) {
  api.get(`/apt/gugun`, { params: params }).then(success).catch(fail);
}

function dongList(params, success, fail) {
  api.get(`/apt/dong`, { params: params }).then(success).catch(fail);
}

function houseList(params, success, fail) {
  api.get(`apt/list`, {params: params} ).then(success).catch(fail);
}

function getHouse(params, success, fail) {
  api.get(`apt`, {params: params} ).then(success).catch(fail);
}

function HouseHistory(params, success, fail) {
  api.get(`apt/history`, {params: params} ).then(success).catch(fail);
}

function getNews(success, fail) {
  api.get(`/crawler/news`).then(success).catch(fail);
}

export { sidoList, gugunList, houseList,dongList,getHouse,HouseHistory,getNews};
