import React from 'react'
import {Layout} from './Layout'
import {Header} from './Header'
import {Footer} from './Footer'
import {Content} from './Content'
import {Aside} from './Aside'
import './Layout.example.scss'

const LayoutExample2: React.FC = () => {
    return (
        <div style={{width: 600}}>
            <div  className='Layout-wrapper'>
                <h2>2.Aside 在左边（中间自动充满）</h2>
                <Layout style={{height: 500}} className='hi'>
                    <Header className='LayoutExample-header'>Header</Header>
                    <Layout>
                        <Aside className='LayoutExample-Aside'>Aside</Aside>
                        <Content className='LayoutExample-content'>Content</Content>
                    </Layout>
                    <Footer className='LayoutExample-footer'>Footer</Footer>
                </Layout>
            </div>
        </div>
    )
}
export {LayoutExample2}

