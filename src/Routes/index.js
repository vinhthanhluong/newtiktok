import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/layouts/HeaderOnly';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/upload', component: Upload, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
