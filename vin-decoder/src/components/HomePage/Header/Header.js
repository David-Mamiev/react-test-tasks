import { NavLink, Outlet } from "react-router-dom";

import "./header-style.scss";

export function Header() {
    const setActive = ({ isActive }) => isActive ? "header__link header__link_active" : "header__link";
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__block">
                        <h2 className="header__title">VIN DECODER ONLINE</h2>
                        <nav className="header__nav">
                            <NavLink to="/" className={setActive}> HOME </NavLink>
                            <NavLink to="/variables" className={setActive}> VARIABLES </NavLink>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}