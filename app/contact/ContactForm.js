"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./contact.module.css";
import allStyles from "../all.module.css";
import { MailIcon } from "@heroicons/react/solid";
import AlertService from "../api/services/AlertService";
import { useStateContext } from "../context/contextProvider";

const ContactForm = () => {
  const [coverImgUrl, setCoverImgUrl] = useState("");
  const { coverImage } = useStateContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // function submit(e) {
  //   // This will prevent page refresh
  //   e.preventDefault();

  //   // replace this with your own unique endpoint URL
  //   fetch("https://formcarry.com/s/XXXXXXX", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({ email: email, message: message }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.code === 200) {
  //         setSubmitted(true);
  //       } else {
  //         setError(res.message);
  //       }
  //     })
  //     .catch((error) => setError(error));
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // if (submitted) {
  //   return <p>We've received your message, thank you for contacting us!</p>;
  // }

  useEffect(() => {
    const imageIrl = Object.values(coverImage).map((image) => {
      console.log(image?.image);
      if (image["page_name"] == "contact_us") setCoverImgUrl(image?.image);
    });
  }, [coverImage]);

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      AlertService.success("Submitted your message successfully");

      // Display success alert
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <>
      <div className={`content-wrapper ${allStyles.imageContainer}`}>
        <img
          src={coverImgUrl}
          alt="background image"
          width="1280"
          height="400"
        />
      </div>
      <div className={`content-wrapper mt-5`}>
        <div className="row text-center mb-5">
          <div className="col">
            <h1 className="display-4 bgRed animate__animated animate__fadeInDown">
              Email Us
            </h1>
            <p className="lead animate__animated animate__fadeInUp">
              <MailIcon width={30} height={30} /> query@iglgroup.com
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.contactForm} m-5`}>
        <div className="container">
          <div className="row flex-row justify-content-around">
            <div
              className={`${styles.infoBranchBlock} col-md-4 col-sm-8 col-xs-12`}
            >
              <div className={`${styles.innerBox}`}>
                <h3>Main Branch</h3>
                <div className={`${styles.text}`}>
                  House #33 (4th Floor), Road # 4, Dhanmondi, Dhaka-1205, <br />
                  Bangladesh.
                </div>
                <a href="#" className={`${styles.direction}`}>
                  Get Direction
                </a>
              </div>
            </div>
            <div className="col-6  text-center">
              <div className={`${styles.contactForm}`}>
                <h5 className="display-4 animate__animated animate__fadeInDown">
                  Contact <span className={`${styles.red}`}> Us </span>
                </h5>
                <form
                  id="contact-form"
                  className={`${styles.form}`}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  {/* Row 1 of form */}
                  <div className={`${styles.formRow} row`}>
                    <div className="col-6">
                      <input
                        type="text"
                        name="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                        className={`${styles.formInput} form-control`}
                        placeholder="Name"
                      ></input>
                      {errors.name && (
                        <span className={`${styles.errorMessage}`}>
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        name="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className={`${styles.formInput} form-control`}
                        placeholder="Email address"
                      ></input>
                      {errors.email && (
                        <span className={`${styles.errorMessage}`}>
                          Please enter a valid email address
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className={`${styles.formRow} row`}>
                    <div className="col">
                      <input
                        type="text"
                        name="subject"
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Please enter a subject",
                          },
                          maxLength: {
                            value: 75,
                            message: "Subject cannot exceed 75 characters",
                          },
                        })}
                        className={`${styles.formInput} form-control`}
                        placeholder="Subject"
                      ></input>
                      {errors.subject && (
                        <span className={`${styles.errorMessage}`}>
                          {errors.subject.message}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className={`${styles.formRow} row`}>
                    <div className="col">
                      <textarea
                        rows={3}
                        name="message"
                        {...register("message", {
                          required: true,
                        })}
                        className={`${styles.formInput} form-control`}
                        placeholder="Message"
                      ></textarea>
                      {errors.message && (
                        <span className={`${styles.errorMessage}`}>
                          Please enter a message
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    className={`${styles.submitBtn} btn btn-primary`}
                    disabled={disabled}
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {alertInfo.display && (
          <div
            className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
            role="alert"
          >
            {alertInfo.message}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() =>
                setAlertInfo({ display: false, message: "", type: "" })
              }
            ></button>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
