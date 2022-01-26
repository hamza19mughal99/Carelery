import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import {Grid} from "react-loader-spinner";
import * as MdIcon from "react-icons/md";
import * as AiIcon from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/img/avatar.png";
import {Button, Form} from "react-bootstrap";
import './Post.scss';

interface IPostPropsInterface {
    hasMore: boolean,
    mockData: any,
    fetchMoreData: () => void;
}

const Post = (props: IPostPropsInterface) => {

    const navigation = useNavigate();

    const onPostClickHandler = () => {
        navigation("/other-profile")
    }

    const viewAllComments = () => {
        navigation("/post-detail")
    }

    return (
        <div className={"activity_feed"}>
            <h4>Activity Feed</h4>

            <InfiniteScroll
                next={props.fetchMoreData}
                hasMore={props.hasMore}
                endMessage={
                    <h4 className={'text-center my-3'}>Yay! You have seen it all</h4>

                }
                loader={<div className="text-center">
                    <Grid
                        wrapperStyle={{
                            justifyContent: "center"
                        }}
                        width="35"
                        color='#2196F3'
                        ariaLabel='loading'
                    />
                </div>}
                dataLength={props.mockData.length}
            >
                {props.mockData.map((data: any, index: any) => (
                    <div key={index} className={"activity_feed_post rounded_white_box"}>
                        <div className={"activity_feed_user"} onClick={onPostClickHandler}>
                            <img alt={"avatar"} src={data.img} />
                            <div className={"activity_feed_user_info"}>
                                <h5>{data.name}</h5>
                                <p className={"text-muted"}>
                                    <MdIcon.MdLocationOn />
                                    {data.city}
                                </p>
                            </div>
                        </div>

                        <div className={"activity_feed_description"}>
                            <p>{data.text}</p>
                        </div>

                        <div className={'text-center'}>
                            <img width={1000} alt={"post"} src={data.postImg} />
                        </div>

                        <div className={"d-flex mt-4 align-items-center post_stats"}>
                            <AiIcon.AiFillHeart />
                            <p className={"mx-2 p-0 m-0 text-muted"}>303</p>
                            <MdIcon.MdModeComment className={"ml-4"} />
                            <p className={"mx-2 p-0 m-0 text-muted"}>200</p>
                        </div>
                        <div className={"post_comment"}>
                            <div className={"comment_form"}>
                                <img width={50} alt={"avatar"} src={data.img} />
                                <Form className={"create_post_form"}>
                                    <Form.Control
                                        type="text"
                                        placeholder={"Write your comment……"}
                                    />
                                    <Button>Post</Button>
                                </Form>
                            </div>
                            <hr />
                            {/*-----------------1-------------------*/}
                            <div className={'comment_show'}>
                                <img src={Avatar} alt={'comment_avatar'} />

                                <div className={'comment_detail'}>
                                    <h5> John Mayers <span> 5 Days ago</span> </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vestibulum ex, eget ultrices ex.
                                        Vestibulum ac velit in metus laoreet volutpat at id risus. Curabitur mattis lobortis vehicula.</p>
                                </div>

                            </div>
                            <hr />
                            {/*----------------2-------------*/}
                            <div className={'comment_show'}>
                                <img src={Avatar} alt={'comment_avatar'} />

                                <div className={'comment_detail'}>
                                    <h5> John Mayers <span> 5 Days ago</span> </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vestibulum ex, eget ultrices ex.
                                        Vestibulum ac velit in metus laoreet volutpat at id risus. Curabitur mattis lobortis vehicula.</p>
                                </div>
                            </div>
                            <hr />
                            <div className={'all_comment'}>
                                <Button onClick={viewAllComments}>View All <AiIcon.AiOutlineArrowDown /></Button>
                            </div>

                        </div>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
};
export default Post;
