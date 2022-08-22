import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
} from "./utils/consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

export const authRoutes = [
    { path: ADMIN_ROUTE, Components: <Admin /> },
    { path: BASKET_ROUTE, Components: <Basket /> },
];
export const publicRoutes = [
    { path: SHOP_ROUTE, Components: <Shop /> },
    { path: LOGIN_ROUTE, Components: <Auth /> },
    { path: REGISTRATION_ROUTE, Components: <Auth /> },
    { path: DEVICE_ROUTE + "/:id", Components: <DevicePage /> },
];
