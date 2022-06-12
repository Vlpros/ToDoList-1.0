const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const DELETE_POST='DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Give offer to Vladimir Prosvirin'},
        {id: 2, message: 'Review code'},
        {id: 3, message: 'Tea-time'},
        {id: 4, message: 'Do sport'}
    ],
    newPostText: 'text'
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case DELETE_POST:
            state.posts.shift();
            return state
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const deletePostActionCreatot=()=>({type:DELETE_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;