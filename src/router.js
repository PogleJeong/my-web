import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Hello from "./pages/Hello";
import About from "./pages/About";
import NotFound404 from "./pages/NotFound_404";
import Skill from "./pages/Skill";
import Project from "./pages/Project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "hello",
                element: <Hello />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "skill",
                element: <Skill />,
            },
            {
                path: "project",
                element: <Project />,
            },
        ],
        errorElement: <NotFound404 />,
    },
])

export default router;