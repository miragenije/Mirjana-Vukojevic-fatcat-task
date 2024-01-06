// import { useMutation } from '@tanstack/react-query';
// import axios from 'axios';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, MutationConfig } from '@/lib/react-query';

export const createPost = (data: { title: string; body: string }): Promise<string> => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response => response.data);
};

type MutationFnType = typeof createPost;

type UseCreatePost = {
    config?: MutationConfig<MutationFnType>;
};

export const useCreatePostMutation = ({ config }: UseCreatePost = {}) => {
    return useMutation<ExtractFnReturnType<MutationFnType>, unknown, Parameters<MutationFnType>>({
        ...config,
        mutationKey: ['createPost'],
        mutationFn: (data: { title: string; body: string }) => createPost(data),
        onSuccess:  () => {
            toast('🐱 You submitet successfully!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        },
    });
};
