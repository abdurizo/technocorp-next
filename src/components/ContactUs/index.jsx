import styles from "./ContactUs.module.css";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import classN from "classnames";

import CallPhone from "@/icon/transparentCallPhone.svg";
import User from "@/icon/formIcon/user.svg";
import Phone from "@/icon/formIcon/phone.svg";

function ContactUs() {
  // Состояние для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для открытия модального окна
  const openModal = () => setIsModalOpen(true);
  // Функция для закрытия модального окна
  const closeModal = () => setIsModalOpen(false);

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains(styles.modal)) {
      closeModal();
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className={styles.wrap} onClick={openModal}>
        <div className={styles.inner_wrap}>
          <Image
            src={CallPhone}
            width={"auto"}
            height={"auto"}
            alt="callphone"
            className={styles.image}
          />
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={handleBackgroundClick}>
          <div className={styles.modalContent}>
            <h2 className={styles.title_form}>Biz bilan bog‘laning</h2>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form} autoComplete="off">
              <div className={styles.block}>
                <label
                  htmlFor="name"
                  className={classN(styles.label, styles.form_text_style)}
                >
                  Ism
                </label>
                <div className={styles.input_wrap}>
                  <span>
                    <Image
                      src={User}
                      width={"auto"}
                      height={"auto"}
                      alt="adliya"
                      className={styles.icon}
                    />
                  </span>
                  <input
                    type="text"
                    id="name"
                    className={classN(styles.input, styles.form_text_style)}
                    placeholder="Ismingizni kiritng"
                    {...register("name", {
                      required: "Ismni kiriting",
                      pattern: {
                        value: /[A-Za-z]{3}/,
                        message: "Lotin alifbosining kamida 3 harfini kiritin",
                      },
                      validate: {
                        minLength: (value) => {
                          if (value.length < 3) {
                            return "Lotin alifbosining kamida 3 harfini kiritin";
                          }
                        },
                      },
                    })}
                  />
                </div>
                <div className={classN(styles.error, styles.form_text_style)}>
                  {errors?.name && <p>{errors?.name?.message}</p>}
                </div>
              </div>

              <div className={styles.block}>
                <label
                  htmlFor="tel"
                  className={classN(styles.label, styles.form_text_style)}
                >
                  Telefon raqamingizni toliq kiriting
                </label>
                <div className={styles.input_wrap}>
                  <span>
                    <Image
                      src={Phone}
                      width={"auto"}
                      height={"auto"}
                      alt="adliya"
                      className={styles.icon}
                    />
                  </span>
                  <input
                    type="tel"
                    id="tel"
                    className={classN(styles.input, styles.form_text_style)}
                    placeholder="Telefon raqamingiz"
                    {...register("tel", {
                      required: "Telefon raqamini kiriting",
                      pattern: {
                        value: /^\+[0-9]{12}$/,
                        message: "Telefon raqamingiz toliq kiriting",
                      },
                      validate: {
                        minLength: (value) => {
                          if (value.length < 1) {
                            return "Telefon raqamingiz toliq kiriting";
                          }
                        },
                      },
                    })}
                  />
                </div>
                <div className={classN(styles.error, styles.form_text_style)}>
                  {errors?.tel && <p>{errors?.tel?.message}</p>}
                </div>
              </div>
              <div className={styles.button_wrap}>
                <button className={styles.button}>Yuborish</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactUs;
