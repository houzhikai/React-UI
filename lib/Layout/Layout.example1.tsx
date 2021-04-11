import React from 'react'
import {Layout} from './Layout'
import {Header} from './Header'
import {Footer} from './Footer'
import {Content} from './Content'
import './Layout.example.scss'

const LayoutExample1: React.FC = () => {
    return (
        <div style={{width:600}}>
            <div className='Layout-wrapper'>
                <h2>1.简单的三栏， content 自动充满</h2>
                <Layout style={{height: 500}} className='hi'>
                    <Header className='LayoutExample-header'>Header</Header>
                    <Content className='LayoutExample-content'>Content</Content>
                    <Footer className='LayoutExample-footer'>Footer</Footer>
                </Layout>
            </div>
        </div>
    )
}
export {LayoutExample1}

