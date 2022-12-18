import { listUser,listMessages, writeMessage } from "@/api/chat.js";

const chatStore = {
    namespaced: true,
    state: {
        users: [],
        pairId: null, // 현재 유저가 보고있는 상대방
        messages: [],
    },

    mutations: {
        CLEAR_USER_LIST(state) {
            state.users = [];
        },
        
        CLEAR_MESSAGE_LIST(state) {
            state.messages = [];
        },

        SET_USER_LIST(state, users) {
            state.users = users;
        },

        SET_PAIRID(state, pairId) {
            state.pairId = pairId;
        },

        SET_MESSAGE(state, messages) {
            state.messages = messages;
        },

        INSERT_MESSAGE(state, message) {
            state.messages.push(message);
        }
    },

    actions: {
        getUsers: ({ commit },params) => {
            listUser(
                params,
                ({ data }) => {
                commit("SET_USER_LIST", data);
                },
                (error) => {
                console.log(error);
                }
            );
        },

        getMessages: ({ commit },params) => {
            listMessages(
                params,
                ({ data }) => {
                    console.log(data);
                    commit("SET_MESSAGE", data);
                },
                (error) => {
                console.log(error);
                }
            );
        },

        insertMessage: ({ commit }, message) => {
            writeMessage(
                message,
                ({ data }) => {
                    if (data == "success") {
                        console.log("메세지 삽입 성공");
                        commit("INSERT_MESSAGE", message);    
                    } else {
                        console.log("메세지 삽입 실패");
                    }
                },
                (error) => {
                    console.log(error);
                }
            )
        },
    }
}

export default chatStore;