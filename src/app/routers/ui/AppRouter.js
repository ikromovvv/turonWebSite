import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import classNames from "classnames";
import {NewHomeUi,} from "pages/homePage";

import "app/styles/index.sass"

import Target from "pages/target/ui/Target";
import LayoutTarget from "app/layouts/layoutTarget/LayoutTarget";


export const AppRouter = () => {


    const router = createBrowserRouter(
        createRoutesFromElements(
            <>

                <Route path={"/*"} element={<NewHomeUi/>}/>

                <Route path={"/register/target/*"}  element={<LayoutTarget>
                    <Target/>
                </LayoutTarget>} />

            </>
        )
    );

    return (
        <div className={classNames("app")}>
                <RouterProvider router={router}/>
        </div>
    );
};
