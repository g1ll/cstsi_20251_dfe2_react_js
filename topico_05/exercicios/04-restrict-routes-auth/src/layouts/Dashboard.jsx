
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import appLogo from './../assets/appLogo.svg';
import logoutIcon from "../assets/logout.svg";
import { useAuthContext } from '../contexts/AuthProvider';
import "./../styles/dashboard.css"


const Dashboard = () => {

    const { isLogged } = useAuthContext()
    const navigate = useNavigate();

    if(!isLogged) return <Navigate to="/login" />;
    
    const onLogout = () => {
        navigate("/login");
    };

    return (
        <>
            <header>
                <div className="logo">
                    <Link href="/">
                        <img src={appLogo} />
                    </Link>
                </div>
                {/* </DefaultLogo> */}
                <div>Bem vindo !</div>
                <div className="logout">
                    <a href="#" onClick={onLogout} >
                        <img src={logoutIcon} />
                    </a>
                </div>
            </header>
            <main>
                <aside>
                    <Link to="#dashboard">Dashboard</Link>
                    <Link to="#users">Users</Link>
                    <Link to="#cadastro">Novo User</Link>
                </aside>
                <section>
                    <Outlet />
                </section>
            </main>
        </>
    )
}

export default Dashboard