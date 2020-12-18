import React from 'react'
import Link from './Link'
import Block from './Block'

/**
 *  Блок новостей
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function News(props) {
    console.log(props)
    return (
        <React.Fragment>
            {/* блок новостей строка*/}
            <Block class={'class-newline'}>
                {
                    props.allNews.blockline.map(d =>
                    <div>
                        <Link link={d.link} class={''}>
                            <p>
                                {d.name}
                            </p>
                        </Link>
                    </div>
                )}
                <span>31 июля, среда 02 32</span>
            </Block>
            {/* list news*/}
            <Block class={'class-newblock'}>
                {props.allNews.blockline.map(news =>
                    <div>
                        <i>{news.icon}</i>
                        <Link link={news.link} class={news.class ? news.class : null}>
                            <p>
                                {news.text}
                            </p>
                        </Link>
                    </div>
                )}
            </Block>
            {/*block 3*/}
            <Block class={'class-newline'}>
                <div>
                    <i>{props.allNews.block3.icon}</i>
                    <Link link={props.allNews.block3.link} class={''}>
                        <p>
                            {props.allNews.block3.linktext}
                        </p>
                    </Link>
                    <p>{props.allNews.block3.text}</p>
                </div>

            </Block>

        </React.Fragment>
    )
}


export default News