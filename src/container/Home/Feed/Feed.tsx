import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import Avatar from "../../../assets/img/avatar.png";
import PostImage from "../../../assets/img/post_img.png";
import "./Feed.scss";
import Post from "../../../component/Post/Post";

const Feed = () => {
  const [mockData, setMockData] = useState([
    {
      img: Avatar,
      name: "Jack Damion",
      city: "New York",
      postImg: PostImage,
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vestibulum ex, eget ultrices ex. Vestibulum ac velit in metus laoreet volutpat at id risus. Curabitur mattis lobortis vehicula. Nullam eu lobortis purus. In hac habitasse platea dictumst. Proin viverra aliquet nisl vitae auctor. Donec tortor augue, pharetra a efficitur non, tincidunt vitae felis.",
    },
    {
      img: Avatar,
      name: "Jack Damion",
      city: "New York",
      postImg: PostImage,
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vestibulum ex, eget ultrices ex. Vestibulum ac velit in metus laoreet volutpat at id risus. Curabitur mattis lobortis vehicula. Nullam eu lobortis purus. In hac habitasse platea dictumst. Proin viverra aliquet nisl vitae auctor. Donec tortor augue, pharetra a efficitur non, tincidunt vitae felis.",
    },
  ]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (mockData.length >= 10) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setMockData([...mockData, ...mockData]);
    }, 1000);
  };
  return (
    <Col md={7} className={"pl-5"}>
      <div className={"create_post rounded_white_box"}>
        <img alt="avatar" src={Avatar} />
        <Form className={"create_post_form"}>
          <Form.Control
            type="text"
            placeholder={"Write something in your mind……"}
          />
          <Button>Post</Button>
        </Form>
      </div>
      <Post hasMore={hasMore} mockData={mockData} fetchMoreData={fetchMoreData}/>
    </Col>
  );
};

export default Feed;
