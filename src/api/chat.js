import { apiInstance } from "./index.js";

const api = apiInstance();

function listUser(param, success, fail) {
    api.get(`/message/users`, { params: param }).then(success).catch(fail);
}

function listMessages(param, success, fail) {
    api.get(`/message/`, { params: param }).then(success).catch(fail);
}

function writeMessage(message, success, fail) {
    api.post(`/message`, JSON.stringify(message)).then(success).catch(fail);
}

export {listUser,listMessages,writeMessage};