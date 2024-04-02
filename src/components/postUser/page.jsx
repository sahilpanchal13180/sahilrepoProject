import React from "react";
import styles from "./PostUser.module.css";

const getData = async (postId) => {
  const Response = await fetch(
    `https://jsonplaceholder.typicode.com/posts${postId}`
  );
  return Response.json();
};

const PostUser = async ({ userId }) => {
  const user = await getData(userId);
  return (
    <div className={styles.container}>
      <span className={styles.tittle}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
};

export default PostUser;
