import React from 'react';
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from '@material-tailwind/react';

import { User } from '@/api/types';

export const UserItem = ({ name, email, dateOfBirdth, phone }: User) => {
    return (
        <Card className="mt-6 w-96">
            <List>
                <ListItem className="pointer-events-none">
                    <ListItemPrefix>
                        <Avatar
                            variant="circular"
                            alt="candice"
                            src="https://docs.material-tailwind.com/img/face-1.jpg"
                        />
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            {name}
                        </Typography>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                        >
                            {email}
                        </Typography>
                        <Typography
                            variant="small"
                            color="green"
                            className="font-normal"
                        >
                            Date of birdth: {dateOfBirdth ?? '/'}
                        </Typography>
                        <Typography
                            variant="small"
                            color="green"
                            className="font-normal"
                        >
                            Phone: {phone}
                        </Typography>
                    </div>
                </ListItem>
            </List>
        </Card>
    );
};
