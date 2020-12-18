import React from 'react'

import Block from './Block'
import News from './News'
import Navigation from './Navigation'

function Main(props) {
    /* новости */
    const currentNews = {
        blockline: [
            {
                name:'Сейчас в СМИ',
                link:'#'
            },
            {
                name:'в Германии',
                link:'#'
            },
            {
                name:'Рекомендуем',
                link:'#'
            }
        ],
        blocknews:[
                {
                    icon: 'icon 1 ',
                    text: 'news text 1.',
                    link: 'google.com'
                },
                {
                    icon: 'icon 2 ',
                    text: 'news text 2.',
                    link: 'google.com'
                },
                {
                    icon: 'icon 3 ',
                    text: 'news text 3.',
                    link: 'google.com'
                }
            ],
        block3:{icon:'icon', lenk:'#', linktext:'Работа над ошибками', text:'text ....'}
    }
    /* ссыдки на категории*/
    const navLinks = [
        {
            href: 'https://github.com/',
            name: 'Видео'
        },
        {
            href: 'https://github.com/',
            name: 'Картинки'
        },
        {
            href: 'https://github.com/',
            name: 'Новости'
        },
        {
            href: 'https://github.com/',
            name: 'Карты'
        },
        {
            href: 'https://github.com/',
            name: 'Маркет'
        }
    ]
    /* */
    const allWidgets = [
        {
            type:1,
            name: 'col_widget col_1',
            conten: []
        },
        {
            type:2,
            name: 'col_widget col_2',
            conten: []
        },
        {
            type:3,
            name: 'col_widget col_3',
            conten: []
        }        
    ]
    return (
        <React.Fragment>
            {/* новости */}
            <Block class={'news-block'}>
                <News allNews={currentNews}></News>
            </Block>
            {/** Ссылки на категории */}
            <Block class={'search-block'}>
                <Navigation list={navLinks}/>
            </Block>

            <div className='input-group mb-3'>
                <input type='text' className='form-control' placeholder='' aria-label='' aria-describedby='basic-addon2' />
                    <div className='input-group-append'>
                        <span className='input-group-text' id='basic-addon2'>Найти</span>
                    </div>
            </div>

            {/** Блок рекламы */}
            <Block class={'banner'}/>
            {/** Блок виджетов, с разметкой на 3 столюца*/}
            <Block class={'widgets'}>
                {allWidgets.map(widget => <Block class={widget.name}></Block>)}
            </Block>
        </React.Fragment>
    )
}



export default Main
