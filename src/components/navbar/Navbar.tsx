import { Link, NavLink } from "react-router-dom";
import crown from "../../assets/crown.jpg";

export default function Navbar() {
    return (
        <nav className="w-full py-4 bg-white text-gray-800 shadow-sm">
            <div className="w-full flex items-center justify-between px-8">
                <Link
                    to="/home"
                    className="flex items-center gap-2 text-2xl font-bold text-gray-900"
                >
                    <img
                        src={crown}
                        alt="Logo Lorem Ipsum"
                        className="w-10 h-10 object-cover rounded-full"
                    />
                    Lorem Ipsum
                </Link>

                <ul className="flex items-center gap-6 text-sm font-medium">
                    <li>
                        <NavLink
                            to="/lorem"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600"
                                    : "text-gray-600 hover:text-gray-900 transition-colors"
                            }
                        >
                            Lorem
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ipsum"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600"
                                    : "text-gray-600 hover:text-gray-900 transition-colors"
                            }
                        >
                            Ipsum
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}