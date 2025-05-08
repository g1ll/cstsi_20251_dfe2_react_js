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
import Admin from "../pages/Admin/Admin";
import PriviteRoute from "../components/PriviteRoute/PriviteRoute";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Guest />}>
                <Route path="/" element={<Home />} />
                <Route path="/produto/:id" element={<Show />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp/>} />
                <Route path="*" element={<NotFound />}></Route>
            </Route>
            <Route path="/" element={<PriviteRoute><Dashboard /></PriviteRoute>}>
                <Route path="/admin" element={<Admin/>} />
            </Route>
        </>
    )
);

export default router;
