import React, {useState} from 'react';
import Avatar from "../../../assets/img/avatar.png";
import PostImage from "../../../assets/img/post_img.png";
import Post from "../../../component/Post/Post";

const ProfilePost = () => {
    const [mockData, setMockData] = useState([
        {
            img: Avatar,
            name: "Sam Damion",
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
    return <Post hasMore={hasMore} mockData={mockData} fetchMoreData={fetchMoreData}/>
};

export default ProfilePost;
