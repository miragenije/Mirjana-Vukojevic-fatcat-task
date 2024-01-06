import { lazy } from 'react';

import { TabItems } from '@/components/UI/organisms/TabItems';
import { FormGenerator } from '@/components/UI/molecules/FormGenerator';

const Users = lazy(() => import('@/components/UI/molecules/Users'));

const coreRoutes = [
    {
        path: '/',
        title: 'Home',
        component: Users,
    },
    {
        path: '/tabs',
        title: 'Page Generator',
        component: TabItems,
    },
    {
        path: '/form',
        title: 'Form Generator',
        component: FormGenerator,
    },
];

const routes = [...coreRoutes];
export default routes;
