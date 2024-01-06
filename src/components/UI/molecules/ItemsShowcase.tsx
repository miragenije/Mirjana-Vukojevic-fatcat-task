import React from 'react';

import {showCaseItems} from '@/config/showCaseItems'
import {Image} from "@/components/UI/atoms/Image";
import { Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button} from "@material-tailwind/react";

export const ItemsShowcase = () => {
    return (
        <div className="flex justify-center items-center mb-8">
            <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8">
                {showCaseItems.map(({ title, description, imageUrl }) => (
                    <Card key={title} className="mt-6">
                        <CardHeader color="blue-gray" className="relative max-h-56">
                            <Image alt={title} src={imageUrl} />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {title}
                            </Typography>
                            <Typography>
                                {description}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button>Read More</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};
