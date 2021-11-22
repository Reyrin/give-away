import React from "react";

function Button({ text, small = false, disable = false }) {
    return (
        <>
            {
                disable === true ? (
                    <button className={small === true ? 'btn btn--small' : 'btn'} disabled>{text}</button>
                ) : (
                    <button className={small === true ? 'btn btn--small' : 'btn'}>{text}</button>
                )
            }
        </>
        
    )
}

export default Button;
