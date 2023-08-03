import { Outlet, createBrowserRouter } from "react-router-dom";
import Root from "./Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        Children: [
            {
                path: "introduce"
            }
        ]
    }
])

export default router;