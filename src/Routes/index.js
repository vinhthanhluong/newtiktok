import config from '~/config';
// Layout
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Login from '~/pages/Login';
import Feedback from '~/pages/Feedback';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';
import HeaderOnly from '~/layouts/HeaderOnly';

const publicRoutes = [
    { path: config.router.home, component: Home },
    { path: config.router.following, component: Following },
    { path: config.router.profile, component: Profile, layout: HeaderOnly },
    { path: config.router.upload, component: Upload, layout: null },
    { path: config.router.login, component: Login, layout: HeaderOnly },
    { path: config.router.feedback, component: Feedback },
    { path: config.router.explore, component: Explore },
    { path: config.router.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
