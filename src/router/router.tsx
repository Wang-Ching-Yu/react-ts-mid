import { createHashRouter } from "react-router";
import HomePage from "../view/HomePage";
import App from '../view/App';

export const router = createHashRouter([
    {
        path: "/",
        element: <HomePage />, // 首頁路徑
      },
    {
        
        path: "/app",
        element: <App />,
    },
])