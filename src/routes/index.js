import { HeaderOnly } from '~/components/Layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import routeConfig from '~/config/routes';

const publicRoutes = [
    {
        path: routeConfig.home,
        component: Home,
    },
    {
        path: routeConfig.home,
        component: Following,
    },
    {
        path: routeConfig.profile,
        component: Profile,
    },

    {
        path: routeConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routeConfig.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
