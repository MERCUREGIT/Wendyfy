import React,{useState} from 'react';
import { connect } from "react-redux";
import {commentPost} from "../../redux/actions/blogActions"

const  BlogCommentForm = ({userCommentPost,blopPostId})=>{

    const [state, handleState] = useState({
      email:'',
      name:'',
      body:'',
    });

    function handleInputChange(e){
      const { name, value } = e.target;

      handleState({...state, [name]:value})
    }

    function handleSubmit(){
      userCommentPost(state.name, state.email, state.body,blopPostId)
    }
    
return <div className="blog-reply-wrapper mt-50">
        <h4 className="blog-dec-title">post a comment</h4>
        <form className="blog-form" onSubmit={e=>{
            e.preventDefault();
            handleSubmit()
        }}>
            <div className="row">
            <div className="col-md-6">
                <div className="leave-form">
                <input type="text" onChange={e=>handleInputChange(e)}  name="name" placeholder="Full Name" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="leave-form">
                <input type="email" onChange={e=>handleInputChange(e)} name="email" placeholder="Email Address " />
                </div>
            </div>
            <div className="col-md-12">
                <div className="text-leave">
                <textarea placeholder="Message" onChange={e=>handleInputChange(e)} name="body" defaultValue={""} />
                <input type="submit" defaultValue="SEND MESSAGE" />
                </div>
            </div>
            </div>
        </form>
    </div>
}

const mapDispatchToProps = dispatch=>{
return {
    userCommentPost: (username,useremail,comment,postId)=>  dispatch(commentPost(username,useremail,comment,postId)),
    
    }
}

export default connect(null,mapDispatchToProps)(BlogCommentForm)