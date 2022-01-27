import React from 'react';
import "./Blog.scss";
import FeaturedBlog from "./FeaturedBlog/FeaturedBlog";
import PopularBlog from "./PopularBlog/PopularBlog";

const Blog = () => {


    return (
        <React.Fragment>
            <div className={'blogs'}>
                <FeaturedBlog />
            </div>

            <div className={'popular_blogs'}>
                <PopularBlog />
            </div>

        </React.Fragment>
    );
};

export default Blog;
