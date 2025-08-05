import React, {useRef} from 'react';
import cls from "./newHomePrincipal.module.sass";
import image from "shared/assets/images/principal.jpg";

import img1 from "shared/assets/images/ochiq eshiklar kuni.jpg";
import img2 from "shared/assets/images/dars.jpg";
import img3 from "shared/assets/images/backToSchool.jpg";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";



gsap.registerPlugin(useGSAP, ScrollTrigger);

const list = [
    {
        id: 1,
        title: "Yangi o‘quv yili ochilish marosimi",
        date: "01.08 - 01.09",
        text: "Sizni Xalqaro Turon maktabi tomonidan tashkil etilayotgan Ochiq eshiklar kuniga taklif qilamiz!\n" +
            "Bu kunda siz bizning faoliyatimiz, ta’lim dasturlarimiz, o‘qituvchilar jamoasi hamda o‘quvchilarning yutuqlari bilan bevosita tanishishingiz mumkin.",
        image: img1
    },
    {
        id: 2,
        title: "Ochiq eshiklar kuni",
        date: "10.08 - 17.08, 17.08 - 25.08",
        text: "Sizni Xalqaro Turon maktabi tomonidan tashkil etilayotgan bepul sinov darslariga taklif qilamiz!\n" +
            "Bu darslar orqali siz bizning o‘qitish metodikamiz, muhitimiz va o‘qituvchilarimiz bilan yaqindan tanishasiz.",
        image: img2
    },
    {
        id: 3,
        title: "Yangi o‘quv yili boshlanishi",
        date: "02.09.2025",
        text: "Hurmatli o‘quvchilar, ota-onalar va ustozlar!\n" +
            "\n" +
            "Barchangizni quvonchli va mas’uliyatli davr — 2025–2026 o‘quv yilining boshlanishi bilan samimiy tabriklaymiz!\n" +
            "\n" +
            "Yangi o‘quv yili — bu yangi imkoniyatlar, maqsadlar va yutuqlar sari yo‘l demak. Umid qilamizki, bu yil barcha uchun ilhomli, samarali va barakali bo‘ladi.",
        image: img3
    },
];

export const NewHomePrincipal = () => {
    const container = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    useGSAP(() => {

        gsap.from(headerRef.current, {
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 80%",
                end: "bottom 80%",
                toggleActions: "play none none reverse",
                scrub: 1,
            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });

        gsap.from(".event-card", {
            scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 80%",
                end: "bottom 75%",
                scrub: 1,
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3
        });

    }, {scope: container});

    return (
        <div ref={container} className={cls.principal} id={"events"}>
            <div ref={headerRef} className={cls.principal__header}>
                <h1 className={cls.title}>Bo‘lib o‘tgan tadbirlar</h1>
                <p className={cls.subTitle}>
                    Maktab hayotidagi yaqinlashib kelayotgan muhim sanalar va voqealar <br/>
                    bilan tanishing. Har bir tadbir – yangi imkoniyat va ilhom manbai!
                </p>
            </div>
            <div ref={cardsRef} className={cls.principal__container}>
                {list.map((item, index) => (
                    <div key={index} className={`${cls.card} event-card`}>
                        <div className={cls.card__header}>
                            <img className={cls.image} src={item.image} alt=""/>
                            <p className={cls.info}>{item.date}</p>
                        </div>
                        <h2 className={cls.card__title}>{item.title}</h2>
                        <p className={cls.card__text}>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
