import React, {Fragment} from 'react'
import {Demo} from '../demo'
import {LayoutExample1} from './Layout.example1'
import {LayoutExample2} from './Layout.example2'
import {LayoutExample3} from './Layout.example3'
import {LayoutExample4} from './Layout.example4'


const LayoutDemo = () => {
    return (
        <Fragment>
            <Demo code={require('!raw-loader!./Layout.example1.tsx').default}>
                <LayoutExample1/>
            </Demo>
            <Demo code={require('!raw-loader!./Layout.example2.tsx').default}>
            <LayoutExample2/>
            </Demo>
            <Demo code={require('!raw-loader!./Layout.example3.tsx').default}>
                <LayoutExample3/>
            </Demo><Demo code={require('!raw-loader!./Layout.example4.tsx').default}>
            <LayoutExample4/>
        </Demo>
        </Fragment>

    )
}
export {LayoutDemo}