import React from "react";
import ItemComponent from "./ItemComponent";

export default function ListComponent(props) {
    return (
        <div>
            <h2>{props.listName}</h2>
            <ul>
                <ItemComponent name={"L1"}/>
                <ItemComponent name={"L2"}/>
            </ul>
        </div>
    );
}