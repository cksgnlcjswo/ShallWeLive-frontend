import { apiInstance } from "./index.js";

const api = apiInstance();

function getSeeker(param,success, fail) {
    api.get(`/roommate`, { params: param }).then(success).catch(fail);
}

function writeSeeker(seeker, success, fail) {
    api.post(`/roommate`, JSON.stringify(seeker)).then(success).catch(fail);
}

export {getSeeker, writeSeeker};