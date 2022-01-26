import React from 'react';
import { Col} from "react-bootstrap";
import Slider from "react-slick";
import PostImg from "../../../assets/img/most_liked_post.png";
import * as AiIcon from "react-icons/ai";
import * as MdIcon from "react-icons/md";
import './SideBar.scss';
import TopAccount from "./TopAccount/TopAccount";
import TopBlog from "./TopBlog/TopBlog";

const SideBar = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Col md={4} className={'left_home_section rounded_white_box'}>
            <div className={'most_liked_post'}>
                <h4>Most Liked Post</h4>
                <Slider {...settings} className={'mt-4'}>
                    <div className={'carousel_item px-3'}>
                            <span className={'carousel_image_wrapper'}>
                                 <img alt={'img'} src={PostImg}/>
                            </span>
                        <div className={'carousel_content'}>
                            <AiIcon.AiTwotoneCrown/>
                            <h4 className={'mt-1'}>John Smith</h4>
                            <h3>Excepteur sint.</h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                            <div  className={'most_liked_post_comment'}>
                                <AiIcon.AiFillHeart/>
                                <p className={'mx-2'}>303</p>
                                <MdIcon.MdModeComment className={'ml-4'}/>
                                <p  className={'mx-2'}>200</p>
                            </div>
                        </div>
                    </div>
                    <div className={'carousel_item px-3'}>
                            <span className={'carousel_image_wrapper'}>
                                 <img alt={'img'} src={PostImg}/>
                            </span>
                        <div className={'carousel_content'}>
                            <AiIcon.AiTwotoneCrown/>
                            <h4 className={'mt-3'}>John Smith</h4>
                            <h3>Excepteur sint.</h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                            <div  className={'most_liked_post_comment'}>
                                <AiIcon.AiFillHeart/>
                                <p className={'mx-2'}>303</p>
                                <MdIcon.MdModeComment className={'ml-4'}/>
                                <p  className={'mx-2'}>200</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="top_blog">
                <h4>Top Blogs</h4>
                <TopBlog/>
            </div>

            <div className={'top_account'}>
                <h4>Top Accounts</h4>
                <TopAccount />
            </div>
        </Col>
    );
};

export default SideBar;
