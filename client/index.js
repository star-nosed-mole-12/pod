// require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AllListings } from './pages/AllListings/AllListings.jsx';

const appElement = document.getElementById('app');
const root = createRoot(appElement)
root.render(<AllListings />)