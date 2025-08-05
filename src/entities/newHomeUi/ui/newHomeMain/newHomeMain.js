import cls from "./newHomeMain.module.sass";
import {HomeBtnUi} from "shared/ui/homeBtnUi/homeBtnUi";
import CountUp from "react-countup";
import {Input} from "shared/ui/input";
import {Form} from "shared/ui/form";
import {Textarea} from "shared/ui/textArea";
import {useRef, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {HomeNewForm} from "features/homeNewForm";
import {useForm} from "react-hook-form";
import {API_URL, useHttp} from "shared/api/base";
import {useDispatch} from "react-redux";
import {onAddAlertOptions} from "features/alert/model/slice/alertSlice";
import {PhoneController} from "shared/ui/phoneController/phoneController";
import {useTranslation} from "react-i18next";
import video from "shared/assets/video/video_2025-07-22_16-09-04.mp4"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const NewHomeMain = () => {
    const container = useRef(null);
    const footerRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const btnRef = useRef(null);
    const [active, setActive] = useState(false)
    const [phone, setPhone] = useState("")
    const {request} = useHttp()
    const {handleSubmit, register, control, reset} = useForm()
    const dispatch = useDispatch()
    const {t} = useTranslation()
    useGSAP(() => {
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        });

        gsap.from(descRef.current, {
            scrollTrigger: {
                trigger: descRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            x: -100,
            opacity: 0,
            duration: 1.4,
            ease: "power3.out",
        });

        gsap.from(btnRef.current, {
            scrollTrigger: {
                trigger: btnRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            x: -100,
            opacity: 0,
            duration: 1.4,
            ease: "power3.out",
        });


        gsap.from(".main__left_footer_number", {
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    }, {scope: container});

    const number = [
        {
            number: 3,
            text: "Filiallar soni"
        },
        {
            number: 520,
            text: "O'qiyotgan o'quvchilar"
        },
        {
            number: 320,
            text: "Xalqaro sertifikat sohiblari"
        }
    ];


    const onClick = (data) => {
        const splitWord = data?.name.split(" ")

        const res = {
            name: splitWord ? splitWord[0] : data?.name,
            surname: splitWord[1] ? splitWord[1] : data?.name,
            type: "home",
            phone: phone
        }


        request(`${API_URL}Lead/lead_create/`, "POST", JSON.stringify(res))
            .then((res) => {

                dispatch(onAddAlertOptions({
                    status: true,
                    type: "success",
                    msg: 'Muvaffaqiyatli yuborildi'
                }))
                reset()

            })
            .catch((err) => {
                dispatch(onAddAlertOptions({
                    status: true,
                    type: "error",
                    msg: 'Lead allaqachon yuborilgan'
                }))
            });
    }
    return (
        <div ref={container} id="homepage" className={cls.main}>
            <div className={cls.main__left}>
                <h1 title={"Turon xalqaro maktabi"} ref={titleRef} className={cls.main__left_title}>
                    {t("homeMain.title")} {window.innerWidth > 1050 ? <br/> : null} {t("homeMain.subTitle")} <br/>
                    <span>{t("homeMain.blueTitle")}</span>
                </h1>
                <p ref={descRef} className={cls.main__left_desc}>{t("homeMain.desc")}</p>
                <div ref={btnRef} className={cls.main__left_link}>
                    <HomeBtnUi onClick={() => setActive(true)} icon={<i className="fa-solid fa-arrow-right"/>}>
                        {t("homeMain.btn")}
                    </HomeBtnUi>
                    <div className={cls.main__left_link_info}> {t("homeMain.info")}
                    </div>
                </div>
                <div
                    ref={footerRef}
                    className={`${cls.main__left_footer} ${cls.main__left_disappear}`}
                >
                    {number.map((item, idx) => (
                        <div key={idx} className={`${cls.main__left_footer_number} main__left_footer_number`}>
                            <h1>
                                +<CountUp start={0} end={item.number} duration={4}/>
                            </h1>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={cls.main__right}>
                <div className={cls.main__right_header}>
                    <div className={cls.main__right_header_video}>
                        <iframe src={video}></iframe>


                    </div>
                </div>
                <div className={cls.main__right_form}>
                    <div className={cls.main__right_form_title}>{t("homeMain.request")}</div>
                    <Form extraClassname={cls.main__right_form_form} typeSubmit>
                        <div className={cls.main__right_wrapper}>
                            <Input register={register} name={"name"} extraClassName={cls.main__right_form_input}
                                   placeholder={`${t("homeMain.fullName")}`}/>
                            <PhoneController canChange onChange={(value) => setPhone(value)} typeClass={"form"}
                                             control={control} name={"phone"}
                                             extraClassName={cls.main__right_form_input}/>
                        </div>
                        <Textarea
                            register={register}
                            name={"message"}
                            style={{width: window.innerWidth > 1050 ? "transparent" : "100%"}}
                            placeholder={`${t("homeMain.message")}`}
                            extraClassName={cls.main__right_form_textarea}
                        />
                    </Form>
                    <HomeBtnUi onClick={handleSubmit(onClick)} type={"submit"}>{t("homeMain.send")}</HomeBtnUi>
                </div>

                <div className={`${cls.main__left_footer} ${cls.main__right_disappear}`}>
                    {number.map((item, idx) => (
                        <div key={idx} className={`${cls.main__left_footer_number} main__left_footer_number`}>
                            <h1 title={"turon statistika"}>
                                +<CountUp start={0} end={item} duration={4}/>
                            </h1>
                            <span>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <HomeNewForm setActiveForm={setActive} activeForm={active}/>

        </div>
    );
};
export default NewHomeMain