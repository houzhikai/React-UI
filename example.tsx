import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, NavLink, Route} from 'react-router-dom'
import {Layout} from './lib/Layout/Layout'
import {Content} from './lib/Layout/Content'
import {Aside} from './lib/Layout/Aside'
import {Header} from './lib/Layout/Header'
import {Footer} from './lib/Layout/Footer'
import './example.scss'

import {IconDemo} from './lib/Icon/IconDemo'
import {DialogDemo} from './lib/dialog/DialogDemo'
import {LayoutDemo} from './lib/Layout/LayoutDemo'
// import {CollapseDemo} from './lib/Collapse/CollapseDemo'
import {CollapseExample} from './lib/Collapse/Collapse.example'
import {HomePage} from './lib/HomePage/HomePage'
// const logo = require('./logo.png')
ReactDOM.render(
    <Router>
        <Layout className='site-page'>
            <Header className="site-header">
                <HomePage/>
            </Header>

            <Layout>
                <div className='main'>
                    <Aside className='site-aside'>
                        <h4>组件总览</h4>
                        <ul>
                            <li>
                                <NavLink to="/icon">Icon</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dialog">Dialog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/layout">Layout</NavLink>
                            </li>
                            <li>
                                <NavLink to="/collapse">Collapse</NavLink>
                            </li>
                        </ul>
                    </Aside>
                    <Content className='site-content'>
                        <Route path="/icon" component={IconDemo}/>
                        <Route path="/icon" component={IconDemo}/>
                        <Route path="/dialog" component={DialogDemo}/>
                        <Route path="/layout" component={LayoutDemo}/>
                        <Route path="/collapse" component={CollapseExample}/>
                    </Content>
                </div>
            </Layout>
            <Footer className='site-footer'>
                © @me
            </Footer>
        </Layout>
    </Router>, document.querySelector('#root'))