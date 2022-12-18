import { apiInstance } from "./index.js";

const api = apiInstance();

function getBoardList(success, fail) {
  api.get(`/board`).then(success).catch(fail);
}

function boardWrite(article, success, fail) {
  api.post(`/board`, JSON.stringify(article)).then(success).catch(fail);
}

function getBoard(articleno, success, fail) {
  api.get(`/board/${articleno}`).then(success).catch(fail);
}

function boardModify(article, success, fail) {
  api.put(`/board`, JSON.stringify(article)).then(success).catch(fail);
}

function boardDelete(articleno, success, fail) {
  api.delete(`/board/delete/${articleno}`).then(success).catch(fail);
}

export { getBoardList, boardWrite, getBoard, boardModify, boardDelete };

