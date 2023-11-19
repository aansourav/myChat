import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/lws-logo-dark.svg";
import { userLoggedOut } from "../../features/auth/authSlice";

export default function Navigation() {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userLoggedOut());
        localStorage.clear();
    };
    return (
        <nav className="border-general sticky top-0 z-40 border-b bg-yellow-700 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex items-center ">
                        <img
                            className="h-10"
                            src={logoImage}
                            alt=" "
                        /> <span className="text-white text-lg text-white-800">myChat</span>
                    </Link>
                    <ul>
                        <li className="text-white">
                            <span className="cursor-pointer" onClick={logout}>
                                Logout
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
