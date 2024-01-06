import React from 'react';
import './styles.css';

import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from '@/components/UI/templates/Layout';
import routes from '@/routes';
import {Spinner} from "@material-tailwind/react";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {routes.map((routes, index) => {
                    const { path, component: Component } = routes;
                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Suspense fallback={<Spinner />}>
                                    <Component />
                                </Suspense>
                            }
                        />
                    );
                })}
            </Route>
        </Routes>
    );
}

export default App;
