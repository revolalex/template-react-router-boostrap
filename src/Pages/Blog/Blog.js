import React from "react";
// import BlogCards2 from "../../Components/Blog/BlogCard2";
import BlogCards from "../../Components/Blog/BlogCards";
import './Blog.css'

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="blog-background">
               <BlogCards/>
            </div>
         );
    }
}
 
export default Blog;