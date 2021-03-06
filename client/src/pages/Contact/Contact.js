import React from "react";
import styles from "./Contact.module.css";
import "animate.css";
import { Row, Col, message } from "antd";

const About = (props) => {
  const message = {
    name: "",
    email: "",
    message: "",
  };
  const onFinish = (e) => {};
  return (
    <div className="animate__animated animate__fadeIn" className={styles.container}>
      <Row justify="center">
        <Col className={styles["parallax"]} lg={{ span: 9, offset: 2 }} xs={{ span: 24 }} ></Col>
        <Col className={styles["form"]} lg={{ span: 9, offset: 1 }} xs={{ span: 16 }}>
          <div className={styles["footer-header"]}>
            <h1>Liên hệ</h1>
            <p className={styles["sub-title"]}>
            Liên hệ với chúng tôi để được báo giá, trợ giúp hoặc tham gia Team Sachuphy.
            </p>
            <div className={styles["contact-us"]}>
              <div className={styles["address-us"]}>
                <p className={styles["content"]}>Địa chỉ</p>
                <p className={styles["sub-content"]}>54 Sachuphy</p>
              </div>
              <div className={styles["email-us"]}>
                <p className={styles["content"]}>Email</p>
                <p className={styles["sub-content"]}>sachuphy@studio.com</p>
              </div>
              <div className={styles["phone-us"]}>
                <p className={styles["content"]}>Điện thoại</p>
                <p className={styles["sub-content"]}>+84 132 456 789</p>
              </div>
            </div>
          </div>
          <form className={styles["footer-section wrapper"]}>
            <h2 className={styles["message"]}>Nhận Báo giá</h2>
            <div className={styles["input-data"]}>
              <input className={styles["input"]} type="text" required></input>
              <label className={styles["label"]}>Tên</label>
            </div>
            <div className={styles["input-data"]}>
              <input className={styles["input"]} type="text" required></input>
              <label className={styles["label"]}>Email</label>
            </div>
            <div className={styles["input-data"]}>
              <label>Ghi chú</label>
              <textarea
                placeholder="Nhập vào đây ... "
                className={styles["textarea"]}></textarea>
            </div>
            <div className={styles["btn-send"]}>
              <button onClick={onFinish}>Gửi</button>
            </div>
          </form>
          <div className={styles["contact-footer"]}>
            <h2 className={styles["follow"]}>Mạng xã hội</h2>
            <div className={styles["social-media"]}>
              <div className={styles["media"]}>
                <a className={styles["link"]}>Facebook</a>
              </div>
              <div className={styles["media"]}>
                <a className={styles["link"]}>Twitter</a>
              </div>
              <div className={styles["media"]}>
                <a className={styles["link"]}>Instagram</a>
              </div>
              <div className={styles["media"]}>
                <a className={styles["link"]}>Github</a>
              </div>
            </div>
          </div>
        </Col>
        <Col offset={2}></Col>
      </Row>
    </div>
  );
};
export default About;
