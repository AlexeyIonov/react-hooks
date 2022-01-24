import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const handleLogin = (params) => {
    };

    const handleLogout = (params) => {
    };

    return (
        isAuth === true
        ? <button className="btn btn-primary" onClick={handleLogout}>Выйти из системы</button>
        : <button className="btn btn-primary" onClick={handleLogin}>Войти</button>
     );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
