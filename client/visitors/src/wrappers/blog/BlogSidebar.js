import React, {useState} from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
// import {routes} from "../../config/routes"
import {multilanguage} from "redux-multilanguage";
const BlogSidebar = ({post,filterePost, searchElement,strings}) => {

 const [filterList, handleFilterList] = useState([])

const filterPostByCategory = (category)=>{
  let filteredBlogPost = [];
  if(filterList.includes(category)) {
    let temporalFilterBuffer = [...filterList]
    temporalFilterBuffer =  temporalFilterBuffer.filter(cat => category !== cat);
    handleFilterList([...temporalFilterBuffer])
  }
  else{ handleFilterList([...filterList, category]); }
  let sortedArray = [];
  filterList.forEach((item, index, arrayList)=>{
    sortedArray.push(...filteredBlogPost, ...post.filter(element=>element.category.includes(item)))
    });
  filteredBlogPost = sortedArray;
  if(filterList ===[]){
    filterePost();
  }
  else{
    filterePost(filteredBlogPost);
  }
}


const getAllCategoriesCount = (post)=>{
    let filteredCategories =[];
    let allCategories =[];
    post.forEach(element=>{
      allCategories.push(...element.category);
    });
    let checkList = []
    allCategories.forEach(element=>{
      if(checkList.includes(element)){
      }else
      {
        let counter = allCategories.filter(v=>(v===element)).length;
        filteredCategories.push({
          name: element,
          count:counter
        });
        checkList.push(element);
      }
    });
    return filteredCategories;
  }
const getAllTagsCount = (post)=>{
    let filteredTags =[];
    let allCategories =[];
    post.forEach(element=>{
      allCategories.push(...element.tags);
    });
    let checkList = []
    allCategories.forEach(element=>{
      if(checkList.includes(element)){

      }else
      {
        let counter = allCategories.filter(v=>(v===element)).length;
        filteredTags.push({
          name: element,
          count:counter
        });
        checkList.push(element);
      }

    });
    return filteredTags;
  }



  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">{strings['search']} </h4>
        <div className="pro-sidebar-search mb-55 mt-25">
          <form className="pro-sidebar-search-form" action="#">
            <input onChange={ e=>{
              console.log(e.target.value);
              searchElement(e.target.value)}} type="text" placeholder={strings['search_here']} />
            <button>
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title"> {strings['recent_projects']} </h4>
        <div className="sidebar-project-wrap mt-30">
          {
            post.slice(0,4).map(element =>   <div key={uuid()} className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard/" + element._id}>

                  <div style={{backgroundSize: 'cover',backgroundPosition:'center',height:70,width:70,backgroundImage:`url('${element.file}')`}}/>
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>{element.title}</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard/" + element._id}>
                  {element.subTitle}
                </Link>
              </h4>
            </div>
          </div>
        )
          }
        </div>
      </div>
      <div className="sidebar-widget mt-35">
        <h4 className="pro-sidebar-title"> {strings['categories']} </h4>
        <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
          <ul>

            {
              getAllCategoriesCount(post).map(element=>{
              return  <CategoryItem  key={uuid()} post={post} element={element} filterPostByCategory={filterPostByCategory} />
              })
            }

          </ul>
        </div>
      </div>
      <div className="sidebar-widget mt-50">
        <h4 className="pro-sidebar-title">{strings['tag']} </h4>
        <div className="sidebar-widget-tag mt-25">
          <ul>
          {
              getAllTagsCount(post).map(element=>{
              return <li>
                        <Link key={element.name + Math.random()} to={process.env.PUBLIC_URL + "/blog-standard"}>
                          {element.name}
                        </Link>
                      </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};


const CategoryItem=({element, post, filterPostByCategory})=>{
  const[checked, handleIsChecked]=useState(false);

  const handleValidation=(e)=>{
    filterPostByCategory(e.target.value);  }

  return <li key={uuid()}>
  <div className="sidebar-widget-list-left">
    <input key={uuid()} type="checkbox"
    value={element.name}
    checked={checked}
    onClick = { ()=> handleIsChecked(!checked)}
    onChange={e=>handleValidation(e)} />{" "}
    <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
    {element.name} <span>{element.count}</span>{" "}
    </Link>
    <span className="checkmark" />
  </div>
</li>
}


export default multilanguage(BlogSidebar);
