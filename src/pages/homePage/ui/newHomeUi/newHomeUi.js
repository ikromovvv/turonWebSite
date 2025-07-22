import cls from "./newHomeUi.module.sass"
import React, {Suspense} from "react";

import {Route, Routes} from "react-router";
import {Alert} from "features/alert";
import {useEffect, useState} from "react";


const NewHomeHeader = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeHeader})));
const NewHomeMain = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeMain})));
const NewHomeAdmissions = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeAdmissions})));
const NewHomeFileDownload = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeFileDownload})));
const NewHomeCurriculum = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeCurriculum})));
const NewHomePrincipal = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomePrincipal})));
const NewHomeDailyLife = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeDailyLife})));
const NewHomeClubs = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeClubs})));
const NewHomeGrade = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeGrade})));
const NewHomeAssessment = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeAssessment})));
const NewHomeFaculty = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeFaculty})));
const NewHomeContact = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeContact})));
const NewHomeIntroduction = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeIntroduction})));
const NewHomeMission = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeMission})));
const NewHomeCoreValues = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeCoreValues})));
const NewHomeSchoolLife = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeSchoolLife})));
const NewHomeParentsComment = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeParentsComment})));
const NewHomePayment = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomePayment})));
const NewHomeCalendar = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeCalendar})));
const NewHomeQuestions = React.lazy(() => import("entities/newHomeUi").then(m => ({default: m.NewHomeQuestions})));




 const NewHomeUi = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 6000)

        return () => clearTimeout(timer)
    }, [])


    return (

        <div className={cls.wrapper}>
            <Alert/>
            <Suspense fallback={<></>}>
                <NewHomeHeader/>
            </Suspense>

            <div className={cls.wrapper__container}>
                <Suspense fallback={<></>}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/student_life" element={<NewHomeClubs/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/admissions" element={<Admissions/>}/>
                        <Route path="/academics" element={<Academics/>}/>
                        <Route path="/faculty" element={<NewHomeFaculty/>}/>
                        <Route path="/contact" element={<NewHomeContact/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>

    );
};

const Home = () => {
    return (
        <Suspense fallback={<></>}>
            <NewHomeMain/>
            <NewHomePrincipal/>
            <NewHomeDailyLife/>
            <NewHomeAdmissions/>
        </Suspense>
    );
};

const Academics = () => {
    return (
        <Suspense fallback={<></>}>
            <NewHomeCurriculum/>
            <NewHomeGrade/>
            <NewHomeAssessment/>
        </Suspense>
    );
};

const About = () => {
    return (
        <Suspense fallback={<></>}>
            <NewHomeIntroduction/>
            <NewHomeMission/>
            <NewHomeCoreValues/>
            <NewHomeSchoolLife/>
            <NewHomeParentsComment/>
            <NewHomeFileDownload/>
        </Suspense>
    );
};

const Admissions = () => {
    return (
        <Suspense fallback={<></>}>
            <NewHomePayment/>
            <NewHomeCalendar/>
            <NewHomeQuestions/>
        </Suspense>
    );
};



export default NewHomeUi;