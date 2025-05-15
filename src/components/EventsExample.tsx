import React, { FC, useState } from "react";
import styles from "./EventExample.module.css";

const EventsExample: FC = () => {

    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG")
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log("DROP");
        // e.dataTransfer.files.item(1)         //На канале есть целый ролик про Drag и Drop
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} />
            <button onClick={clickHandler}>Вывести</button>
            (Перетаскивать)
            <div
                onDrag={dragHandler}
                className={styles.block}
                draggable
                style={{ background: "red" }}
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                className={styles.block}
                style={{ background: isDrag ? "blue" : "red"}}
            ></div>
        </div>
    );
}

export default EventsExample;