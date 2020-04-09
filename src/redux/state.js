let renderEntireTree = () => {
  console.log("State changed");
};

let state = {
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
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
};

export default state;