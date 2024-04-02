import React from "react";
import styles from "./SinglePage.module.css";
import Image from "next/image";
import PostUser from "../../../components/postUser/page";
const singlePost = async (slug) => {
  const Responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  return Responce.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await singlePost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contact Image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.titles}>{post.title}</h1>
        <div className={styles.avatar}>
          <Image src="/contact.png" alt="avatar" height={50} width={50} />
        </div>
        <div className={styles.detail}>
          <PostUser UserId={post.UserId} />

          <div className={styles.detailText}>
            <span className={styles.detailTittle}>published</span>
            <span className={styles.detailValue}>1.1.24</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
