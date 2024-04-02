import React from "react";
import styles from "./PostCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.ImgContainers}>
        <Image src="/about.png" alt="" className={styles.img} fill />
      </div>
      <div className="textContainer">
        <div className={styles.title}>{post.title}</div>
        <div className={styles.userid}>{post.body}</div>
        <Link href="./blog/post" className={styles.links}>
          {`read more on ${post.id}`}
        </Link>
      </div>
    </div>
  );
};
export default PostCard;
