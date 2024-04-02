import React from "react";
import Image from "next/image";
import styles from "./Contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact Image" fill />
      </div>
      <div className="formContainer">
        <form action="" className={styles.forms}>
          <input type="text" placeholder="Name And SurName" />
          <input type="email" placeholder="Email Address" />
          <input type="phonenumber" placeholder="enter PhoneNumber(optional)" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
          <button>send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
