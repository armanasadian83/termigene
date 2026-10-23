import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root');
if (container.hasChildNodes()) hydrateRoot(container, <App/>);
else createRoot(container).render(<App/>);
