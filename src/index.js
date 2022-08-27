import React from "react";
import ReactDOM  from "react-dom/client";
import './Style/index.css';
import App from './App';
import MyErrorBoundary from "../Components/ErrorBoundary";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyErrorBoundary>
        <App />
    </MyErrorBoundary>
)