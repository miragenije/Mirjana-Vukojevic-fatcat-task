import React from 'react';
import { faList, faGripVertical, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from '@/components/UI/templates/Header';
import { LinkItem } from '@/components/UI/atoms/LinkItem';
import 'react-toastify/dist/ReactToastify.css';

type LayoutProps = {
    background?: string;
};

export const Layout = ({ background }: LayoutProps) => {
    return (
        <section className={background}>
            <ToastContainer />
            <Header
                actions={
                    <>
                        <LinkItem href={'/'} icon={faList} text={'Users'} />
                        <LinkItem
                            href={'/tabs'}
                            icon={faGripVertical}
                            text={'Page Generator'}
                        />
                        <LinkItem
                            href={'/form'}
                            icon={faFilePen}
                            text={'Form Generator'}
                        />
                    </>
                }
                icon="stars"
            />
            <main>
                <div className="mx-auto max-w-screen-2xl px-4 pt-24 md:px-6 2xl:px-10">
                    <Outlet />
                </div>
            </main>
        </section>
    );
};
