import React from "react";
import CardWrapper from "../../common/Card";

const simpleComponentHoc = (Component) => (props) => {
    const user = localStorage.getItem("user");
    const handleLogin = (params) => {
        console.log("OnLogin", params);
    };
    const handleLogout = (params) => {
        console.log("OnLogout", params);
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={user}
                onLogin={handleLogin(user)}
                onLogout={handleLogout(user)}
            />
        </CardWrapper>
     );
};

export default simpleComponentHoc;
