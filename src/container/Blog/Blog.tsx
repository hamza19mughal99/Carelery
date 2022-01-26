import React from 'react';
import "./Blog.scss";
import Slider from "react-slick";
import BlogImg from "../../assets/img/blog_img.png";
import PopularBlog from "../../assets/img/popular_blog.png";
import {Container, Row, Col} from "react-bootstrap";

const Blog = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div>
            <h5>Featured Blogs</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vestibulum.</p>

            <div className={'blogs'}>
                <Slider {...settings} className={'mt-4'}>
                    <div className={'blog_detail text-center'}>
                            <img src={BlogImg} alt={'blog-img'}/>
                            <hr className={'w-50 mt-3 mb-3 '}/>
                            <h5>How to Stay Fit
                                While Travelling</h5>
                            <p>April 4, 2019</p>
                    </div>

                    <div className={'blog_detail text-center'}>
                        <img src={BlogImg} alt={'blog-img'}/>
                        <hr className={'w-50 mt-3 mb-3 '}/>
                        <h5>How to Stay Fit
                            While Travelling</h5>
                        <p>April 4, 2019</p>
                    </div>

                    <div className={'blog_detail text-center'}>
                        <img src={BlogImg} alt={'blog-img'}/>
                        <hr className={'w-50 mt-3 mb-3 '}/>
                        <h5>How to Stay Fit
                            While Travelling</h5>
                        <p>April 4, 2019</p>
                    </div>

                    <div className={'blog_detail text-center'}>
                        <img src={BlogImg} alt={'blog-img'}/>
                        <hr className={'w-50 mt-3 mb-3 '}/>
                        <h5>How to Stay Fit
                            While Travelling</h5>
                        <p>April 4, 2019</p>
                    </div>

                    <div className={'blog_detail text-center'}>
                        <img src={BlogImg} alt={'blog-img'}/>
                        <hr className={'w-50 mt-3 mb-3 '}/>
                        <h5>How to Stay Fit
                            While Travelling</h5>
                        <p>April 4, 2019</p>
                    </div>

                    <div className={'blog_detail text-center'}>
                        <img src={BlogImg} alt={'blog-img'}/>
                        <hr className={'w-50 mt-3 mb-3 '}/>
                        <h5>How to Stay Fit
                            While Travelling</h5>
                        <p>April 4, 2019</p>
                    </div>
                </Slider>
            </div>

            <div className={'popular_blogs'}>
                <Container fluid>
                    <Row className={'popular_blogs_row'}>
                        <Col md={4}>
                            <img src={PopularBlog} alt={'popular_blog'}/>
                        </Col>
                        <Col md={6} className={'popular_blogs_text'}>
                            <h5>Lifestyle, Design</h5>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Maecenas.</p>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={'popular_blogs'}>
                <Container fluid>
                    <Row className={'popular_blogs_row'}>
                        <Col md={4}>
                            <img src={PopularBlog} alt={'popular_blog'}/>
                        </Col>
                        <Col md={6} className={'popular_blogs_text'}>
                            <h5>Lifestyle, Design</h5>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Maecenas.</p>

                        </Col>
                    </Row>
                </Container>
            </div>


        </div>
    );
};

export default Blog;
