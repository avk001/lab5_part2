import React from 'react'
import Link from './Link'

/**
 *  ссылки на категории
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Navigation(props) {
    return (
        <nav className='nav_bar'>
            <ul className='nav_bar_list'>
                {props.list.map(item => <li>
                    <Link link={item.href} class='nav_bar_link'>{item.name}</Link>
                </li>)}
            </ul>
        </nav>
    )
}


export default Navigation