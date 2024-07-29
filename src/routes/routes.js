import { HeaderOnly } from "@/layouts";

import Explore from "@/pages/Explore";
import Following from "@/pages/Following";
import Friends from "@/pages/Friends";
import Home from "@/pages/Home";
import Live from "@/pages/Live";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Upload";

import { routesConfig } from "@/config";

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.explore, component: Explore },
    { path: routesConfig.friends, component: Friends },
    { path: routesConfig.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
