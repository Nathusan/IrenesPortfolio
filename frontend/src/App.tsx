// App.tsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes'; // Import the router you created
import { MantineProvider } from '@mantine/core';

export const App: () => React.ReactElement = () => {
  return (
    <MantineProvider>
        <RouterProvider router={router} />
    </MantineProvider>
  );
};
