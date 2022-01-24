import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "../common/Card";

const ComponentEnumerator = ({ children }) => {
    const childrenWithProps = React.Children.map(children, (child, index) => (
        <div className="d-flex">
            <div>{index + 1 + "."}</div>
            {React.cloneElement(child)}
        </div>
    ));
    return <CardWrapper>{childrenWithProps}</CardWrapper>;
};

ComponentEnumerator.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ComponentEnumerator;
