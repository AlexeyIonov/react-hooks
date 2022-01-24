import React from "react";
import PropTypes from "prop-types";

const ComponentEnumerator = ({ children }) => {
    console.log("React.Children.map children", children);
    const childrenWithProps = React.Children.map(children, (child, index) => {
        console.log("React.Children.map child", child.props, index);
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { ...child.props, innerText: index + child.props.innerText });
        }
        return child;
    });
    return <div>{childrenWithProps}</div>;
};

ComponentEnumerator.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ComponentEnumerator;
