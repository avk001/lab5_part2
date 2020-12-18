import React from 'react'

function Link(props) {
    return (
            <a href={props.link} className={props.class}>{props.children ? props.children : props.name ? props.name : null}</a>
    )
}


export default Link