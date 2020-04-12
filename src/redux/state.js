let store = {
    _state: {
        profilePage: {
            newPostText: "serhiy",
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
            ]
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },
    getState() {
      return this._state;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;