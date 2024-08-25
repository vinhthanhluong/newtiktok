import config from '~/config';
// Layout
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/layouts/HeaderOnly';

const publicRoutes = [
    { path: config.router.home, component: Home },
    { path: config.router.following, component: Following },
    { path: config.router.profile, component: Profile, layout: HeaderOnly },
    { path: config.router.upload, component: Upload, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
