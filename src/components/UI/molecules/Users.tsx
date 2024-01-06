import React from 'react';
import { Spinner } from '@material-tailwind/react';

import { useGetCart } from '@/api/getUser';
import { User } from '@/api/types';
import { UserItem } from '@/components/UI/atoms/User';

const Users = () => {
    const {
        data: users,
        isLoading,
        isFetching,
        isError,
    } = useGetCart()<User[], Error>;

    if (isLoading || isFetching) {
        return <Spinner color="green" />;
    }

    if (isError) {
        return <p>Error: Failed to fetch data</p>;
    }

    return (
        <div>
            <div className="flex w-full flex-wrap items-center space-x-2 justify-center">
                {users?.data.map((user) => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        dateOfBirdth={user.dateOfBirdth}
                        phone={user.phone}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;
