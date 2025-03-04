import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Genres from "./pages/genres";
import BookDetais from "./pages/bookDetails";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/genre",
        element: <Genres/>
    },
    {
        path: "/details",
        element: <BookDetais/>
    }
])

export default router;