import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Genres from "./pages/genres";
import BookDetais from "./pages/bookDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/genre/:genero",  // Agora aceita o nome do gênero na URL
        element: <Genres />
    },
    {
        path: "/details/:id",  // Agora aceita o ID do livro na URL
        element: <BookDetais />
    }
]);

export default router;