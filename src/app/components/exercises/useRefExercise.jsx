// import React, { useEffect, useState, useRef } from "react";
import React, { useRef } from "react";
import Divider from "../common/divider";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockGeometryRef = useRef();
    const blockTextRef = useRef();
    const handleClick = () => {
        blockGeometryRef.current.style.height = "150px";
        blockGeometryRef.current.style.width = "80px";
        blockGeometryRef.current.children[0].innerText = "text";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <Divider />
            <div
                ref={blockGeometryRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={blockTextRef}>Блок</small>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Click Me</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
