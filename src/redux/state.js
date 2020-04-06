import {renderEntireTree} from "../render";

let state = {
    profilePage: {
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
};

 export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0
    };
  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};

export default state;