// routes.ts
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/AboutPage';
import GraphicDesignPage from './src/pages/GraphicDesignPage';
import Layout from './src/components/Layout';
import ProductDesignPage from './src/pages/ProductDesignPage'
import React from 'react';
import ProjectPageWrapper from './src/pages/wrappers/projectPageWrapper';

export enum RoutePage {
    HomePage,
    AboutPage,
    GraphicDesignPage,
    ProductDesignPage,
    ProjectDummyPage,
    Gum,
}

export const routes = {
    [RoutePage.HomePage]: {
        path: "/",
        element: <HomePage />,
    },
    [RoutePage.AboutPage]: {
        path: "/about",
        element: <AboutPage />,
    },
    [RoutePage.GraphicDesignPage]: {
        path: "/graphic-design",
        element: <GraphicDesignPage/>
    },
    [RoutePage.ProductDesignPage]: {
        path: "/product-design",
        element: <ProductDesignPage/>
    },
    [RoutePage.ProjectDummyPage]: {
        path: "/project-page",
        element: <ProjectPageWrapper/>
    }
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            routes[RoutePage.HomePage],
            routes[RoutePage.AboutPage],
            routes[RoutePage.GraphicDesignPage],
            routes[RoutePage.ProductDesignPage],
            routes[RoutePage.ProjectDummyPage],
        ]
    },
]);
