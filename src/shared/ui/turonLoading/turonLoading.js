import { useEffect, useState } from "react";
import cls from "./logo.module.sass";
import logo from "shared/assets/logo/turonLogo.png";

export const LogoLoader = () => {


    return (
        <div className={cls.loaderWrapper}>
            <img src={logo} alt="Logo" className={cls.logo} />
        </div>
    );
};

