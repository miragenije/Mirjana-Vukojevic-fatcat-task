import { useQuery } from '@tanstack/react-query';

import { User } from '@/api/types';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

export const getUsers = (): Promise<User[]> => {
    return axios.get('users');
};

type QueryFnType = typeof getUsers;

type UseGetUsers = {
    config?: QueryConfig<QueryFnType>;
};

export const useGetCart = ({ config }: UseGetUsers = {}) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['users'],
        queryFn: () => getUsers(),
    });
};
