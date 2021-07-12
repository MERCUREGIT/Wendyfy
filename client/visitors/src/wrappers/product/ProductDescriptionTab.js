import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";
import Tab from "react-bootstrap/Tab";
import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Avatar from 'react-avatar';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {routes} from "../../config/routes";

import {commentProducts} from "../../redux/actions/productActions"
import {multilanguage} from "redux-multilanguage";
const ProductDescriptionTab = ({allowComments, strings, commentAction, spaceBottomClass, productFullDesc,productId,authentication,comments, productRating}) => {
 
  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [comment, setComment] =useState("");
  const [isLoading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated]=useState(false)
    const [averageRating,setAverageRating]=useState(productRating)
    const [isReviewLoading,setIsReviewLoading] =useState(false);
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  const handleRating = (val)=>{
    setIsRated(true);
    axios.patch(`${routes.server}/rating/${productId}`, {score:rating})
        .then((r)=>{
            setAverageRating(r.data.score)
        })
        .catch(err=>{
          console.log(err)
          setIsRated(false)
        })
  }
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
        setLoading(false);
      });
      }
    }, [isLoading]);
  

  const submitReviewForm =()=>{
    commentAction(productId, name, email,comment,()=>{
        setIsReviewLoading(true)
    },()=>{
        setIsReviewLoading(false)
    });
  }
 
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">{strings['description']}</Nav.Link>
              </Nav.Item>
              {allowComments ==="true" ?<Nav.Item>
                <Nav.Link eventKey="productReviews">{strings['reviews']}</Nav.Link>
              </Nav.Item>:""}
              <Nav.Item>
                  <Nav.Link>
                      <ReactStars
                       count={5}
                       value={averageRating}
                       edit={false}
                        size={25}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}/>
                  </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="productDescription">
                <p dangerouslySetInnerHTML={{__html:productFullDesc}}/>
              </Tab.Pane>
               
           {  allowComments ==="true" ? <Tab.Pane eventKey="productReviews">
                <div className="row">
                
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                     {comments.map(element=>  <ReviewItem key={element.comment} element= {element}/>)}
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      { authentication && !isRated ?  
                    <div className="row"> 
                        <div className ='col-md-6'>
                          <div className="star-box">
                                <span>{strings['your_rating']}:</span>
                                <div className="ratting-star">
                                  <ReactStars
                                    count={5}
                                    onChange={(score)=>setRating(score)}
                                    size={20}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                  />
                                </div> 
                            </div>
                        </div>
                      <div className ='col-md-6'>
                        <Button variant="primary"
                                disabled={isLoading}
                                onClick={!isLoading ?
                                  ()=> handleRating(true) : null}>
                                        {isLoading ? (strings['rating']+'…') : strings['rate_product']}
                        </Button>
                      </div>
                    </div>
                    : isRated ? <strong> {strings['thanks']} </strong> : <Link style={{padding:10, backgroundColor:'yellow'}}
                            to={process.env.PUBLIC_URL + "/login-register"}>{strings['login_register_to_rate']}</Link>
                        }
                    
                         
                      <div className="ratting-form">
                      {/* /comments/prodID */}
                        <form style={{marginTop:25}} action="#" onSubmit={e=>{
                            e.preventDefault();
                            submitReviewForm();
                        }}>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder={strings['contactSection']['name_e']} type="text"
                                onChange = {e=>setName(e.target.value)} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder={strings['contactSection']['email_e']} type="email"
                                onChange = {e=>setEmail(e.target.value)}/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder={strings['message']}
                                  onChange = {e=>setComment(e.target.value)}
                                  defaultValue={""}
                                />
                                  {isReviewLoading?<p>{strings['loading']}...</p>:<input type="submit" defaultValue={strings['submit']}/>}
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>:""
            }</Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string,
    strings:PropTypes.object
};


function ReviewItem({element}) {

  return  <div className="single-review">
            <div className="review-img">
            <Avatar   email={element.email} name={element.name} />
            </div>
            <div className="review-content">
              <div className="review-top-wrap">
                <div className="review-left">
                  <div className="review-name">
                    <h4>{element.name}</h4>
                  </div>
                </div>
                <div className="review-left">
                </div>
              </div>
              <div className="review-bottom">
                <p>
                {element.comment}
                </p>
              </div>
            </div>
        </div>
}




const mapStateToProps=(state, ownProps)=>{
let product = state.productData.products.find(element=>{
  return element._id === ownProps.productId
})

return {
        allowComments: product.allowComments,
        comments: product.comments,
        productRating: product.rating,
        authentication: state.authentication.login
        }
}

const mapDispatchToProps = dispatch => {
  return {
    commentAction:(productId, name, email,comment,before,after)=>dispatch(commentProducts(productId,name,email,comment,before,after))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(multilanguage(ProductDescriptionTab));
