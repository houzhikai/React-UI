import React, { Fragment } from 'react'
import '../../example.scss'
// @ts-ignore
import logo from '../../lib/Icons/logo.png'
import Icon from '../Icon/Icon'
// @ts-ignore
import {useHistory} from 'react-router-dom'
const HomePage: React.FC = () => {
    const history = useHistory()
    return (
        <Fragment>
            <div className="logo">
                <img src={logo} width='48' height='48' alt=''/>
                <span>React-UI</span>
            </div>
            <div className='site-search'>
                <span><Icon name='search'/></span>
                <input type='text' placeholder='点击搜索...'/>
            </div>
            <div className='icon'>
                <span>主页</span>
                <span onClick={()=>{history.push('/')}}>文档</span>
                <a target='_blank' href='https://github.com/houzhikai/React-UI'>
                    <Icon name='GitHub'/>
                </a>
                <a target='_blank' href='https://www.yuque.com/dashboard'>
                    <Icon name='YuQue'/>
                </a>
            </div>
        </Fragment>
    )
}
export {HomePage}

