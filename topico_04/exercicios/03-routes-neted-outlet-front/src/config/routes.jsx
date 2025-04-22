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
        </>
    )
);

export default router;
