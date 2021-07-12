import {
    POST_BLOG_COMMENT,FETCH_BLOG_POST} from "../actions/blogActions";

const initState = [];

const blogReducer = (state = initState, action) => {

    const blogPost = action.payload;

  if (action.type === FETCH_BLOG_POST) {
   return blogPost
  }

  if (action.type === POST_BLOG_COMMENT) {
    
    return [
      ...state,
      state.find(v=>v._id === blogPost.blogId).comments.push(blogPost.comment)
    ];
  }

  return state;
};

export default blogReducer;