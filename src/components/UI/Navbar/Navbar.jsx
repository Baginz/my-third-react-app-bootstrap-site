import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context";

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    };

    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <NavLink to="/gamepage" className="nav-link">
                                Игра ХО
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/posts"
                                className="nav-link"
                                aria-current="page"
                            >
                                Посты
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/todo" className="nav-link">
                                ToDo
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                                О сайте
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                         
                            </li>
                            <li className="nav-item me-3">
                                <NavLink
                                    to="/admin"
                                    className="nav-link"
                                    aria-current="page"
                                >
                                    Админ
                                </NavLink>
                            </li>

                        </ul>
                        <button
                            className="btn btn-outline-light"
                            onClick={logout}
                        >
                            Выйти
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
