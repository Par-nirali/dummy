import React from "react";
import styles from "./editprofile.module.scss";
import { AiOutlineCamera } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { Formik, Field, Form } from "formik";

const Editprofile = () => {
  return (
    <>
      <div className={styles.editProMainDiv}>
        <div className={styles.editProInfo}>
          <div className={styles.editProPhoto}>
            <div className={styles.editProImg}>
              <img src="/profile.png" alt="profile" />
            </div>
            <div className={styles.cameraIcon}>
              <FiEdit3 />
            </div>
          </div>
          <p>Change Profile</p>
        </div>
        <div className={styles.editProForm}>
          <div className={styles.form}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
              }}
              // validationSchema={SignupSchema}
              // onSubmit={(values, { resetForm }) => {
              //   submitForm(values, resetForm);
              // }}
            >
              {({ errors, touched, setFieldValue }) => (
                <Form>
                  <div className={styles.projectDescriptionDiv}>
                    <div className={styles.lableInput}>
                      <div className={styles.leftMail}>
                        <label htmlFor="name" className={styles.lable}>
                          First Name
                        </label>
                        <Field
                          id="name"
                          name="name"
                          className={styles.inp}
                        ></Field>
                        {errors.name && touched.name ? (
                          <div className={styles.errMes}>{errors.name}</div>
                        ) : null}
                      </div>
                      <div className={styles.rightCall}>
                        <label htmlFor="name" className={styles.lable}>
                          Last Name
                        </label>
                        <Field
                          id="name"
                          name="name"
                          className={styles.inp}
                        ></Field>
                        {errors.name && touched.name ? (
                          <div className={styles.errMes}>{errors.name}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className={styles.lableEmail}>
                      <label htmlFor="email" className={styles.lable}>
                        Email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        className={styles.inp}
                      ></Field>
                      {errors.email && touched.email ? (
                        <div className={styles.errMes}>{errors.email}</div>
                      ) : null}
                    </div>
                    {/* <ReCAPTCHA
                            sitekey="6LfOBLMoAAAAAIPJr9r353ujXdetGVrPZ3U_YHCZ"
                            onChange={onChange}
                        /> */}
                    <button type="submit" className={styles.btn}>
                      Save Changes
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editprofile;
