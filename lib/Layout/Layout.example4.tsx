import React from 'react'
import {Layout} from './Layout'
import {Header} from './Header'
import {Footer} from './Footer'
import {Content} from './Content'
import {Aside} from './Aside'
import './Layout.example.scss'

const LayoutExample4: React.FC = () => {
    return (
        <div style={{width:600}}>
            <div  className='Layout-wrapper'>
                <h2>4.Aside 在最外面</h2>
                <Layout style={{height: 500}} className='outside'>
                    <Aside className='LayoutExample-Aside'>Aside</Aside>
                    <Layout>
                        <Header className='LayoutExample-header'>Header</Header>
                        <Content className='LayoutExample-content'>Content</Content>
                        <Footer className='LayoutExample-footer'>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}
export {LayoutExample4}

