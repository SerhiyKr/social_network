const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let store = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: "Hi, how are you?", likes: 4},
                {id: 2, message: "It's my first post", likes: 7}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Serhiy"},
                {id: 2, name: "Pupa"},
                {id: 3, name: "Lupa"}
            ],
            messages: [
                {id: 1, message: "Hiii"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Fuck youuu..."}
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },
    getState() {
      return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            this._state.dialogsPage.messages.push({id: 6, message: this._state.dialogsPage.newMessageBody})
            this._state.dialogsPage.newMessageBody = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
};

export const addNewPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
};

export const sendNewMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const onMessageBodyChangeActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
};

export default store;