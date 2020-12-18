import React from 'react'

function Block(props) {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    )
}


export default Block