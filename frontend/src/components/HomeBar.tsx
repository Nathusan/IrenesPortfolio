/* eslint-disable no-undef */
import * as React from 'react';
import {
  Button,
  Group,
  MantineProvider,
  Image
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { RoutePage, routes } from '../../routes';

export default function Homebar(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <MantineProvider>
      <Group className="home-bar">
        <div className='logo'>
          <Image w='50%' src={require('../img/logo.png')}/>
        </div>
        <Group className='home-bar'>
          <Button
            variant="transparent"
            color="rgba(0, 0, 0, 1)"
            onClick={() => navigate(routes[RoutePage.HomePage].path)}
          >
            Home
          </Button>
          <Button
            variant="transparent"
            color="rgba(0, 0, 0, 1)"
            onClick={() => navigate(routes[RoutePage.AboutPage].path)}
          >
            About
          </Button>
          <Button
            variant="transparent"
            color="rgba(0, 0, 0, 1)"
            onClick={() => navigate(routes[RoutePage.GraphicDesignPage].path)}
          >
            Graphic Design
          </Button>
          <Button
            variant="transparent"
            color="rgba(0, 0, 0, 1)"
            onClick={() => navigate(routes[RoutePage.ProductDesignPage].path)}
          >
            Product Design
          </Button>
        </Group>
      </Group>
    </MantineProvider>
  );
}