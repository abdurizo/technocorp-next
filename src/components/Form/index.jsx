import styles from './Form.module.css'

import Image from 'next/image';
import { useForm } from "react-hook-form";

import User from '@/icon/formIcon/user.svg';
import Phone from '@/icon/formIcon/phone.svg';
import Callphone from '@/icon/formIcon/callphone.svg';
import Location from '@/icon/formIcon/location.svg';
import Envelope from '@/icon/formIcon/envelope.svg';
function Form() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.wrap}>
                <div>
                    <div className={styles.block}>
                        <div className={styles.input_wrap}>
                            <label htmlFor="name" >
                                <Image
                                    src={User}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="adliya"
                                    className={styles.icon}
                                />
                            </label>
                            <input
                                type="text"
                                id="name"
                                className={styles.input}
                                placeholder='Ismingiz'
                                {...register('name', {
                                    required: 'Ismni kiriting',
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Lotin alifbosining kamida 3 harfini kiritin'
                                    },
                                    validate: {
                                        minLength: (value) => {
                                            if (value.length < 3) {
                                                return ('Lotin alifbosining kamida 3 harfini kiritin');
                                            }
                                        },
                                    },
                                })}
                            />
                        </div>
                        <div className={styles.error}>
                            {
                                errors?.name && <p>{errors?.name?.message}</p>
                            }
                        </div>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.input_wrap}>
                            <label htmlFor="tel" >
                                <Image
                                    src={Phone}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="adliya"
                                    className={styles.icon}
                                />
                            </label>
                            <input
                                type="tel"
                                id="tel"
                                className={styles.input}
                                placeholder='Telefon raqamingiz'
                                {
                                ...register('tel', {
                                    required: 'Telefon raqamini kiriting',
                                    pattern: {
                                        value: /^\+[0-9]{12}$/,
                                        message: 'Telefon raqamingiz toliq kiriting'
                                    },
                                    validate: {
                                        minLength: (value) => {
                                            if (value.length < 1) {
                                                return 'Telefon raqamingiz toliq kiriting';
                                            }
                                        },
                                    },
                                })
                                }

                            />
                        </div>
                        <div className={styles.error}>
                            {
                                errors?.tel && <p>{errors?.tel?.message}</p>
                            }
                        </div>
                    </div>

                    <textarea name="message" id="message" placeholder='Matn kiriting' className={styles.textarea}></textarea>
                </div>


                <div>
                    <div className={styles.us_wrap}>
                        <div className={styles.icon_us_wrap}>
                            <Image
                                src={Callphone}
                                width={'auto'}
                                height={'auto'}
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
                                width={'auto'}
                                height={'auto'}
                                alt="adliya"
                                className={styles.icon_us}
                            />
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.content}>
                            <p className={styles.title}>Manzil</p>
                            <p className={styles.text}>O‘zbekiston Respublikasi, Toshkent, A.Navoiy 30b</p>
                        </div>
                    </div>
                    <div className={styles.us_wrap}>
                        <div className={styles.icon_us_wrap}>
                            <Image
                                src={Envelope} 
                                width={'auto'}
                                height={'auto'}
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