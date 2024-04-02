import React from "react";
import Postcard from "../../components/postcard/page";
import styles from "./Blog.module.css";
const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.posts} key={post.id}>
            <Postcard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
