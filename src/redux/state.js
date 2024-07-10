let renderEntireTree = () => {
    console.log("state fell")
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 42},
            {id: 3, message: 'Blabla', likesCount: 0},
            {id: 4, message: 'hi', likesCount: 1}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Maxim'},
            {id: 2, name: 'Vadim'},
            {id: 3, name: 'Nikolay'},
            {id: 4, name: 'Dmitriy'},
            {id: 5, name: 'Nastya'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'}
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
    };

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;