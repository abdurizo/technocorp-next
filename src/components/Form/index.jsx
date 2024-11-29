import styles from "./Form.module.css";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { postServiceMessage } from "@/api/pagesApis/contactUs";
import { useRouter } from "next/router";

import User from "@/icon/formIcon/user.svg";
import Phone from "@/icon/formIcon/phone.svg";
import Callphone from "@/icon/formIcon/callphone.svg";
import Location from "@/icon/formIcon/location.svg";
import Envelope from "@/icon/formIcon/envelope.svg";

function Form({ type, id }) {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onSubmit",
    });

    const roueter = useRouter();
    console.log(roueter.query.internalservise);

    const onSubmit = async (data) => {
        try {
            // Подготовка данных для API
            const payload = {
                fullname: data.name,
                description: data.message || "No description provided",
                type: type,
                service: id || null,
                phone: data.tel,
            };

            // Отправка запроса
            const response = await postServiceMessage(payload);

            console.log("Ответ сервера:", response);


            alert("Сообщение успешно отправлено!");

            // Очистка формы после отправки
            reset();
        }
        catch (error) {
            console.error("Ошибка при отправке данных:", error);
            if (error.response) {
                // Ошибки, связанные с сервером
                console.log("Ответ сервера с ошибкой:", error.response.data);
                alert(`Ошибка: ${error.response.data.message || "Неизвестная ошибка"}`);
            } else if (error.request) {
                // Сервер не ответил
                console.log(
                    "Запрос был отправлен, но ответа не получено:",
                    error.request
                );
                alert("Сервер не отвечает. Проверьте подключение.");
            } else {
                // Проблемы на клиентской стороне
                console.log("Ошибка при настройке запроса:", error.message);
                alert(`Клиентская ошибка: ${error.message}`);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} autoComplete="off">
            <div className={styles.wrap}>
                <div>
                    <div className={styles.block}>
                        <div className={styles.input_wrap}>
                            <label htmlFor="name">
                                <Image
                                    src={User}
                                    width={"auto"}
                                    height={"auto"}
                                    alt="adliya"
                                    className={styles.icon}
                                />
                            </label>
                            <input
                                type="text"
                                id="name"
                                className={styles.input}
                                placeholder="Ismingiz"
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
                        <div className={styles.error}>
                            {errors?.name && <p>{errors?.name?.message}</p>}
                        </div>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.input_wrap}>
                            <label htmlFor="tel">
                                <Image
                                    src={Phone}
                                    width={"auto"}
                                    height={"auto"}
                                    alt="adliya"
                                    className={styles.icon}
                                />
                            </label>
                            <input
                                type="tel"
                                id="tel"
                                className={styles.input}
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
                        <div className={styles.error}>
                            {errors?.tel && <p>{errors?.tel?.message}</p>}
                        </div>
                    </div>

                    <textarea
                        name="message"
                        id="message"
                        placeholder="Matn kiriting"
                        className={styles.textarea}
                        {...register('message')}
                    ></textarea>
                </div>
                <div>
                    <div className={styles.us_wrap}>
                        <div className={styles.icon_us_wrap}>
                            <Image
                                src={Callphone}
                                width={"auto"}
                                height={"auto"}
                                alt="adliya"
                                className={styles.icon_us}
                            />
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.content}>
                            <p className={styles.title}>Telefon</p>
                            <p className={styles.text}>+998 (55) 501-43-13</p>
                        </div>
                    </div>
                    <div className={styles.us_wrap}>
                        <div className={styles.icon_us_wrap}>
                            <Image
                                src={Location}
                                width={"auto"}
                                height={"auto"}
                                alt="adliya"
                                className={styles.icon_us}
                            />
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.content}>
                            <p className={styles.title}>Manzil</p>
                            <p className={styles.text}>
                                O‘zbekiston Respublikasi, Toshkent, A.Navoiy 30b
                            </p>
                        </div>
                    </div>
                    <div className={styles.us_wrap}>
                        <div className={styles.icon_us_wrap}>
                            <Image
                                src={Envelope}
                                width={"auto"}
                                height={"auto"}
                                alt="adliya"
                                className={styles.icon_us}
                            />
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.content}>
                            <p className={styles.title}>E-mail</p>
                            <p className={styles.text}>info@technocorp.uz</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className={styles.button}>Yuborish</button>
        </form>
    );
}

export default Form;
