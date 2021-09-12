import axios from 'axios';
import { routes } from "../../config/routes";

export const POST_BLOG_COMMENT = "POST_BLOG_COMMENT";
export const FETCH_BLOG_POST = "FETCH_BLOG_POST";


export const commentPost = (
    username,
    useremail,
    comment,
    postId,
  ) => {
    return dispatch => {
        axios.patch(`${routes.server}/blog/post-comments/${postId}`,{name:username, email:useremail, body:comment })
        .then(post=>{
            return dispatch({
                type: POST_BLOG_COMMENT,
                payload: {
                    comment:post.data,
                    blogId:postId
                    }
              });
        })
    };
  };

export const fetchBlogPost = ( ) => {
    return dispatch => {

    axios.get(`${routes.server}/blog/`)
        .then(response =>
            {             
                return dispatch({
                type: FETCH_BLOG_POST,
                payload: [...response.data]
            })}
            )
            .catch(err=>{
                console.log(err)
               return dispatch({
                    type: FETCH_BLOG_POST,
                    payload: [ ]
                })
            })
     ;
    };
  };
