import React, { useState } from "react";
import styles from "./Contact.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import Magnetic from "../../Lib/Magnetic";
const s = styles;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError("All fields are required.");
      toast.error("Please fill in all fields before submitting.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: true,
        style: {
          padding: "16px 24px",
          borderRadius: "8px",
          fontSize: "1rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          fontFamily: "'Roboto', sans-serif",
        },
      });
      return;
    }

    console.log("Form Data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    toast.success(
      <div style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}>
        <FaCheckCircle
          style={{
            fontSize: "2rem",
            marginRight: "8px",
            color: "#4CAF50",
          }}
        />
        <span>Your message has been successfully sent!</span>
      </div>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        icon: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: true,
        style: {
          padding: "16px 24px",
          borderRadius: "8px",
          fontSize: "1rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          fontFamily: "'Roboto', sans-serif",
        },
      }
    );
  };

  return (
    <>
      <div className={s.mainBox}>
        <div className={s.container}>
          <div className={s.contactBox}>
            <h2 className={s.title}>Contact Me</h2>
            <p className={s.subtitle}>
              I'd love to hear from you. Fill out the form or reach out via the
              info below.
            </p>

            <div className={s.content}>
              <form className={s.form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={s.input}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={s.input}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={s.textarea}
                ></textarea>
                <button type="submit" className={s.button}>
                  Send Message
                </button>
              </form>

              <div className={s.infoContainer}>
                <div className={s.info}>
                  <h3>Contact Information</h3>
                  <div className={s.socialLinks}>
                    <Magnetic>
                      <a
                        href="https://www.linkedin.com/in/israrahmad2004/"
                        target="blank"
                      >
                        <AiOutlineLinkedin />
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a href="https://github.com/israrahmad831" target="blank">
                        <RiGithubLine />
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a href="https://www.facebook.com/xDisrar" target="blank">
                        <AiOutlineFacebook />
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a href="https://wa.me/923264114782" target="blank">
                        <FaWhatsapp />
                      </a>
                    </Magnetic>
                  </div>
                </div>

                <div className={s.additionalContent}>
                  <p>
                    Feel free to drop me a message anytime! I'm always open to
                    new opportunities, collaborations, or discussions.
                  </p>
                  <p>Looking forward to connecting with you!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
