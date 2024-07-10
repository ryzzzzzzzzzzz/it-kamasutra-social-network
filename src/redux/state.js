let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 42},
            {id: 3, message: 'Blabla', likesCount: 0},
            {id: 4, message: 'hi', likesCount: 1}
        ]
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 6,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(postMessage)
}

export default state;