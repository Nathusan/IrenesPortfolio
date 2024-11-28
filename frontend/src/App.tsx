import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes';
import { createTheme, MantineProvider } from '@mantine/core';
import '@fontsource/inter';

export const App: () => React.ReactElement = () => {

  const theme = createTheme({
    fontFamily: 'Inter, Arial, sans-serif', // Set the primary font
  });


  return (
    <MantineProvider theme={theme}>
        <RouterProvider router={router} />
    </MantineProvider>
  );
};
