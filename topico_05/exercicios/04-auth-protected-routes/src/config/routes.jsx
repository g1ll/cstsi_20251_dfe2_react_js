import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Guest from "../layouts/Guest";
import Home from "../pages/Home/Home";
import Show from "../pages/Show/Show";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import {SignUp} from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import Admin from "../pages/Admins/Admin";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Users from "../pages/Admins/Users";
import Produto from "../pages/Admins/Produtos";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Guest />}>
                <Route index element={<Home />} />
                <Route path="/produto/:id" element={<Show />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp/>} />
                <Route path="*" element={<NotFound />}></Route>
            </Route>
            <Route path="/dashboard" 
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }>
                <Route index element={<Admin/>} />
                <Route path="users" element={<Users/>} />
                <Route path="produtos" element={<Produto/>} />
            </Route>
        </>
    )
);

export default router;
