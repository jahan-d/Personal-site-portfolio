import { createBrowserRouter } from "react-router";
import React, { Suspense } from 'react';
import RootLayout from "../layouts/RootLayout";

// Lazy Load Pages
const HomePage = React.lazy(() => import("../pages/home/HomePage"));
const AboutPage = React.lazy(() => import("../pages/about/AboutPage"));
const ProjectsPage = React.lazy(() => import("../pages/projects/ProjectsPage"));
const ContactPage = React.lazy(() => import("../pages/contact/ContactPage"));

// Loading Component
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                element: <Suspense fallback={<PageLoader />}><AboutPage /></Suspense>,
            },
            {
                path: "home",
                element: <Suspense fallback={<PageLoader />}><HomePage /></Suspense>,
            },
            {
                path: "projects",
                element: <Suspense fallback={<PageLoader />}><ProjectsPage /></Suspense>,
            },
            {
                path: "contact",
                element: <Suspense fallback={<PageLoader />}><ContactPage /></Suspense>,
            },
        ],
    },
]);
