import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

function DevicePage() {
    const isAuth = true;

    return (
        <Routes>
            {isAuth === true &&
                authRoutes.map(({ path, Components }) => {
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={Components}
                            exact
                        />
                    );
                })}
            {publicRoutes.map(({ path, Components }) => {
                return (
                    <Route key={path} path={path} element={Components} exact />
                );
            })}

            <Route
                path="*"
                element={<Navigate to={SHOP_ROUTE} replace={true} />}
            />
        </Routes>
    );
}

export default DevicePage;
