let store = {
    _state: {
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
    },
    _callSubscriber () {
        console.log("State fell")
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;