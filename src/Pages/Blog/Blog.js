import React from "react";
// import BlogCards2 from "../../Components/Blog/BlogCard2";
import BlogContainer from "../../Components/Blog/BlogContainer";
import './Blog.css'

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="blog-background">
               <BlogContainer/>
               <br/><br/>
            </div>
         );
    }
}
 
export default Blog;