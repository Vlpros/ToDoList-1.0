import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, deletePostActionCreatot, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    }
    let deletePost=()=>{
        //props.deletePost
        props.dispatch(deletePostActionCreatot());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My list</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div><div>
                    <button onClick={ deletePost} title='deleting starts from 1 quest'>Delete post</button>
                </div>

            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;