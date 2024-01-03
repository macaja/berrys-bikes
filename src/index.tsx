import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import StepperProvider from './StepperContext';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <StepperProvider>
        <App />
    </StepperProvider>,
);
