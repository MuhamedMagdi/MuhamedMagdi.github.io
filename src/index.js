import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';
import { AnalyticsProvider } from 'use-analytics';
import './index.css';
import App from './App';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import ProjectID from './pages/projectID';
import Error404 from './pages/error404';
import reportWebVitals from './reportWebVitals';

const analytics = Analytics({
    app: 'awesome',
    plugins: [
        googleAnalytics({
            measurementIds: 'G-94T0084H1R'
        })
    ]
}); 

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error404 />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/projects/:slug',
        element: <ProjectID />,
        errorElement: <Error404 />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AnalyticsProvider instance={analytics}>
            <RouterProvider router={router} />
        </AnalyticsProvider>
    </React.StrictMode>
);

reportWebVitals();
