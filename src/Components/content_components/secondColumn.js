import React from "react";
import style from '../CSS/columns.module.css';
import PostBlockProfile from "./Profile_components/postBlockProfile";
import TextfieldBlockProfile from "./Profile_components/textfieldBlockProfile";
import GalleryBlockProfile from "./Profile_components/galleryBlockProfile";
import BioInfoProfile from "./Profile_components/bioInfoProfile";

const PostItem = (props) => {
  return (
      <PostBlockProfile text={props.text} date={props.date} likes={props.likes} comments={props.comments}/>
  )
};

const SecondColumn = (props) => {
    let data = props.data.data.PostsWall;

    const PostItems = data
        .map(item => <PostItem text={item.text} date={item.date} likes={item.likes} comments={item.comments}/>);
    return (
        <div className={style.second_column}>
            <BioInfoProfile/>
            <GalleryBlockProfile/>
            <TextfieldBlockProfile addPost={props.data.data.addPost}/>
            {PostItems}
        </div>
    )
};

export default SecondColumn;