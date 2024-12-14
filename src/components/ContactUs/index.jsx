import styles from "./ContactUs.module.css";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import classN from "classnames";
import { useTranslation } from "next-i18next";

import CallPhone from "@/icon/transparentCallPhone.svg";
import User from "@/icon/formIcon/user.svg";
import Phone from "@/icon/formIcon/phone.svg";

function ContactUs() {
  const { t } = useTranslation();
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

  // Добавляем обработчик события для закрытия по Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Убираем обработчик при размонтировании
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
    reset();
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
            <button onClick={closeModal} className={styles.closeButton}>
              X
            </button>
            <h2 className={styles.title_form}>Biz bilan bog‘laning</h2>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form} autoComplete="off">
              <div className={styles.block}>
                <label
                  htmlFor="name"
                  className={classN(styles.label, styles.form_text_style)}
                >
                  {t('form_name_placeholder')}
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
                    placeholder={t('form_name_required')}
                    {...register("name", {
                      required: t('form_name_required'),
                      pattern: {
                        value: /[A-Za-z]{3}/,
                        message: t('form_name_message'),
                      },
                      validate: {
                        minLength: (value) => {
                          if (value.length < 3) {
                            return t('form_name_message');
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
                  {t('form_tel_message')}
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
                    placeholder={t('form_tel_placeholder')}
                    {...register("tel", {
                      required: t('form_tel_required'),
                      pattern: {
                        value: /^\+[0-9]{12}$/,
                        message: t('form_tel_message'),
                      },
                      validate: {
                        minLength: (value) => {
                          if (value.length < 1) {
                            return t('form_tel_message');
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
                <button className={styles.button}>{t('send')}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactUs;
