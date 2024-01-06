import React  from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {Button, Card, Input, Spinner, Textarea, Typography} from '@material-tailwind/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { useCreatePostMutation } from '@/api/useCreatePostMutation';

interface IFormInput {
    title: string;
    body: string;
}

const validationSchema = z.object({
    title: z.string().min(5).max(50, { message: 'Required' }),
    body: z.string().min(10).max(200, { message: 'Required' }),
});

export const FormGenerator = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: zodResolver(validationSchema),
    });

    const createPost = useCreatePostMutation();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        createPost.mutate(data);
        reset();
    };

    return (
        <Card className="mt-6 w-96 p-4 mx-auto">
            <Typography variant="h5" color="blue-gray" className="mb-2">
                Post form
            </Typography>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center flex-col h-80"
        >
            {createPost.isPending ? (
                <Spinner color="green" className="m-auto" />
            ) : (
                <>
                    <div className="mb-4">
                        <label htmlFor="title" className="mb-1 block">
                            Title
                        </label>
                        <Input
                            size="md"
                            id="title"
                            placeholder="name@mail.com"
                            className={"!border-t-blue-gray-200 focus:!border-t-gray-900"}
                            labelProps={{
                                className:
                                    'before:content-none after:content-none',
                            }}
                            {...register('title')}
                        />
                        {errors.title && (
                            <p className="text-xs text-red-500">
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="mb-1 block">
                            Body
                        </label>
                        <Textarea
                            id="body"
                            label="Message"
                            {...register('body')}
                        />
                        {errors.body && (
                            <p className="text-xs text-red-500">
                                {errors.body.message}
                            </p>
                        )}
                    </div>
                </>
            )}

            <Button
                type="submit"
                className="rounded-full mx-auto"
                color="green"
                loading={createPost.isPending}
            >
                Submit
            </Button>
        </form>
        </Card>
    );
};
