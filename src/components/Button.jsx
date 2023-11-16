import React from "react";


const Button = (props) => {
    return (
        <button type="submit" className="btn" style={{ backgroundColor: props.backgrounds, color: props.textColor }}>{props.name}</button>
    )
}
export default Button
