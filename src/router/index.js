import About from "../pages/About";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Mail from "../pages/Mail";
import Posts from "../pages/Posts";
import ToDo from "../pages/ToDo";
import Error from "../pages/Error";
import GamePage from "../pages/GamePage";
import PostIdPage from "../pages/PostIdPage";


export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '/mail', component: Mail, exact: true},
    {path: '/admin', component: Admin, exact: true},
    {path: '/todo', component: ToDo, exact: true},
    {path: '/error', component: Error, exact: true},
    {path: '/gamepage', component: GamePage, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]
